/**
 * @description Codifica texto a bytes UTF-8.
 * @param value Texto a codificar.
 * @returns Bytes codificados.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function encodeText(value: string): Uint8Array<ArrayBuffer> {
  return new TextEncoder().encode(value);
}

/**
 * @description Decodifica bytes UTF-8 a texto.
 * @param value Bytes codificados.
 * @returns Texto decodificado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function decodeText(value: ArrayBuffer): string {
  return new TextDecoder().decode(value);
}
