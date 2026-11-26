/**
 * @description Codifica bytes a Base64 de forma multiplataforma.
 * En web utiliza btoa; en React Native utiliza el modulo global Buffer
 * expuesto por el runtime de Hermes o la implementacion base64 nativa.
 * @author Steveen Cues
 * @version 2.0.0
 */
export function encodeBase64(bytes: Uint8Array): string {
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  if (typeof btoa === "function") {
    return btoa(binary);
  }

  const globalBuffer = (
    globalThis as unknown as {
      Buffer?: {
        from(
          value: string,
          encoding: string,
        ): { toString(encoding: string): string };
      };
    }
  ).Buffer;

  if (globalBuffer !== undefined) {
    return globalBuffer.from(binary, "binary").toString("base64");
  }

  throw new Error("Base64 encoding is unavailable in this environment.");
}

/**
 * @description Decodifica Base64 a bytes de forma multiplataforma.
 * @param value Cadena Base64.
 * @returns Bytes decodificados.
 * @author Steveen Cues
 * @version 2.0.0
 */
export function decodeBase64(value: string): Uint8Array<ArrayBuffer> {
  if (typeof atob === "function") {
    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);

    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }

    return bytes;
  }

  const globalBuffer = (
    globalThis as unknown as {
      Buffer?: { from(value: string, encoding: string): Uint8Array };
    }
  ).Buffer;

  if (globalBuffer !== undefined) {
    const decoded = globalBuffer.from(value, "base64");
    const bytes = new Uint8Array(decoded.length);

    bytes.set(decoded);

    return bytes;
  }

  throw new Error("Base64 decoding is unavailable in this environment.");
}
