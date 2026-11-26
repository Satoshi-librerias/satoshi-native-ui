/**
 * @description Obtiene la API criptografica cuando esta disponible.
 * En web es globalThis.crypto; en React Native depende del runtime.
 * @returns API criptografica o undefined si no esta disponible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getCryptoApi(): Crypto | undefined {
  try {
    return globalThis.crypto;
  } catch {
    return undefined;
  }
}
