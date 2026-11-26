import {
  AES_GCM_ALGORITHM,
  AES_GCM_IV_LENGTH,
  ENCRYPTED_VALUE_PART_COUNT,
  KEY_USAGES,
  RAW_KEY_FORMAT,
  SHA_256_ALGORITHM,
  STORAGE_VALUE_SEPARATOR,
} from "@libs/constants";
import {
  decodeBase64,
  encodeBase64,
  getCryptoApi,
  decodeText,
  encodeText,
} from "@libs/utils";

/**
 * @description Representa un payload cifrado validado.
 * @author Steveen Cues
 * @version 1.0.0
 */
interface EncryptedPayload {
  iv: Uint8Array<ArrayBuffer>;
  ciphertext: Uint8Array<ArrayBuffer>;
}

/**
 * @description Deriva una clave AES-GCM a partir de un secreto.
 * @param secret Secreto de cifrado.
 * @returns Clave criptografica o undefined cuando no esta disponible.
 * @author Steveen Cues
 * @version 1.0.0
 */
async function deriveAesKey(secret: string): Promise<CryptoKey | undefined> {
  const cryptoApi = getCryptoApi();

  if (cryptoApi === undefined || secret.length === 0) {
    return undefined;
  }

  const digest = await cryptoApi.subtle.digest(
    SHA_256_ALGORITHM,
    encodeText(secret),
  );

  return cryptoApi.subtle.importKey(
    RAW_KEY_FORMAT,
    digest,
    { name: AES_GCM_ALGORITHM },
    false,
    KEY_USAGES,
  );
}

/**
 * @description Crea un vector de inicializacion criptograficamente aleatorio.
 * @returns Vector de inicializacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
function createInitializationVector(): Uint8Array<ArrayBuffer> {
  const cryptoApi = getCryptoApi();

  if (cryptoApi === undefined) {
    throw new Error("Cryptographic API is unavailable.");
  }

  return cryptoApi.getRandomValues(new Uint8Array(AES_GCM_IV_LENGTH));
}

/**
 * @description Valida y decodifica un vector de inicializacion.
 * @param value Vector codificado en Base64.
 * @returns Vector valido o undefined.
 * @author Steveen Cues
 * @version 1.0.0
 */
function decodeInitializationVector(
  value: string,
): Uint8Array<ArrayBuffer> | undefined {
  try {
    const iv = decodeBase64(value);

    return iv.length === AES_GCM_IV_LENGTH ? iv : undefined;
  } catch {
    return undefined;
  }
}

/**
 * @description Comprueba si el valor cifrado tiene los segmentos esperados.
 * @param parts Segmentos del valor cifrado.
 * @returns Indica si los segmentos contienen un IV y un texto cifrado.
 * @author Steveen Cues
 * @version 1.0.0
 */
function hasExpectedEncryptedParts(parts: string[]): parts is [string, string] {
  return parts.length === ENCRYPTED_VALUE_PART_COUNT;
}

/**
 * @description Valida los segmentos del valor cifrado.
 * @param parts Segmentos del valor cifrado.
 * @returns Segmentos validados o undefined.
 * @author Steveen Cues
 * @version 1.0.0
 */
function validateEncryptedParts(parts: string[]): [string, string] | undefined {
  if (!hasExpectedEncryptedParts(parts)) {
    return undefined;
  }

  return [parts[0], parts[1]];
}

/**
 * @description Divide y valida un valor cifrado.
 * @param value Vector de inicializacion y texto cifrado codificados.
 * @returns Payload validado o undefined.
 * @author Steveen Cues
 * @version 1.0.0
 */
function parseEncryptedPayload(value: string): EncryptedPayload | undefined {
  const parts = validateEncryptedParts(value.split(STORAGE_VALUE_SEPARATOR));

  if (parts === undefined) {
    return undefined;
  }

  const [encodedIv, encodedCiphertext] = parts;
  const iv = decodeInitializationVector(encodedIv);

  if (iv === undefined) {
    return undefined;
  }

  try {
    return {
      iv,
      ciphertext: decodeBase64(encodedCiphertext),
    };
  } catch {
    return undefined;
  }
}

/**
 * @description Cifra bytes usando AES-GCM.
 * @param plaintext Bytes en texto plano.
 * @param key Clave de cifrado.
 * @param iv Vector de inicializacion.
 * @returns Bytes cifrados.
 * @author Steveen Cues
 * @version 1.0.0
 */
async function encryptPayload(
  plaintext: Uint8Array<ArrayBuffer>,
  key: CryptoKey,
  iv: Uint8Array<ArrayBuffer>,
): Promise<ArrayBuffer> {
  const cryptoApi = requireCryptoApi();

  return cryptoApi.subtle.encrypt(
    { name: AES_GCM_ALGORITHM, iv },
    key,
    plaintext,
  );
}

/**
 * @description Descifra bytes usando AES-GCM.
 * @param payload Payload cifrado validado.
 * @param key Clave de descifrado.
 * @returns Bytes descifrados.
 * @author Steveen Cues
 * @version 1.0.0
 */
async function decryptPayload(
  payload: EncryptedPayload,
  key: CryptoKey,
): Promise<ArrayBuffer> {
  const cryptoApi = requireCryptoApi();

  return cryptoApi.subtle.decrypt(
    {
      name: AES_GCM_ALGORITHM,
      iv: payload.iv,
    },
    key,
    payload.ciphertext,
  );
}

/**
 * @description Obtiene la API criptografica o lanza un error si no existe.
 * @returns API criptografica disponible.
 * @author Steveen Cues
 * @version 1.0.0
 */
function requireCryptoApi(): Crypto {
  const cryptoApi = getCryptoApi();

  if (cryptoApi === undefined) {
    throw new Error("Cryptographic API is unavailable.");
  }

  return cryptoApi;
}

/**
 * @description Cifra texto usando AES-GCM.
 * @param value Texto a cifrar.
 * @param secret Secreto de cifrado.
 * @returns Valor cifrado codificado o undefined cuando no esta disponible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function encryptText(
  value: string,
  secret: string,
): Promise<string | undefined> {
  try {
    const key = await deriveAesKey(secret);

    if (key === undefined) {
      return undefined;
    }

    const iv = createInitializationVector();
    const ciphertext = await encryptPayload(encodeText(value), key, iv);

    return [encodeBase64(iv), encodeBase64(new Uint8Array(ciphertext))].join(
      STORAGE_VALUE_SEPARATOR,
    );
  } catch {
    return undefined;
  }
}

/**
 * @description Descifra un valor cifrado con AES-GCM.
 * @param value Vector de inicializacion y texto cifrado codificados.
 * @param secret Secreto de cifrado.
 * @returns Texto original o undefined si el descifrado falla.
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function decryptText(
  value: string,
  secret: string,
): Promise<string | undefined> {
  try {
    const payload = parseEncryptedPayload(value);

    if (payload === undefined) {
      return undefined;
    }

    const key = await deriveAesKey(secret);

    if (key === undefined) {
      return undefined;
    }

    const plaintext = await decryptPayload(payload, key);

    return decodeText(plaintext);
  } catch {
    return undefined;
  }
}
