import { decryptText, encryptText } from "@libs/services";
import { resolveStorage } from "@libs/utils";

/**
 * @description Cifra y guarda una preferencia en el almacenamiento activo.
 * @param storageKey Clave de almacenamiento.
 * @param value Valor a almacenar.
 * @param encryptionKey Secreto de cifrado.
 * @returns Promesa completada al finalizar el intento de guardado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function saveEncryptedPreference(
  storageKey: string,
  value: string,
  encryptionKey: string | undefined,
): Promise<void> {
  if (
    value.length === 0 ||
    encryptionKey === undefined ||
    encryptionKey.length === 0
  ) {
    return;
  }

  try {
    const storage = resolveStorage();

    if (storage === undefined) {
      return;
    }

    const encryptedValue = await encryptText(value, encryptionKey);

    if (encryptedValue === undefined) {
      return;
    }

    storage.setItem(storageKey, encryptedValue);
  } catch {
    // La persistencia de preferencias no debe interrumpir el uso de la app.
  }
}

/**
 * @description Carga y descifra una preferencia del almacenamiento activo.
 * @param storageKey Clave de almacenamiento.
 * @param encryptionKey Secreto de cifrado.
 * @returns Preferencia descifrada o undefined cuando no esta disponible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function loadEncryptedPreference(
  storageKey: string,
  encryptionKey: string | undefined,
): Promise<string | undefined> {
  if (encryptionKey === undefined || encryptionKey.length === 0) {
    return undefined;
  }

  try {
    const storage = resolveStorage();

    if (storage === undefined) {
      return undefined;
    }

    const encryptedValue = storage.getItem(storageKey);

    if (encryptedValue === null) {
      return undefined;
    }

    return await decryptText(encryptedValue, encryptionKey);
  } catch {
    return undefined;
  }
}
