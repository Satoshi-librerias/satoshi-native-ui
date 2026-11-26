/**
 * @description Polyfills del entorno de pruebas para simular el runtime
 * multiplataforma antes de cargar los modulos de la libreria. jsdom no
 * expone crypto.subtle, por lo que se restaura el WebCrypto de Node.
 * @author Steveen Cues
 * @version 1.0.0
 */
import { webcrypto } from "node:crypto";
import { TextEncoder, TextDecoder } from "node:util";

const globalCrypto = globalThis as unknown as {
  crypto?: Crypto;
  TextEncoder?: typeof TextEncoder;
  TextDecoder?: typeof TextDecoder;
};

if (
  globalCrypto.crypto === undefined ||
  globalCrypto.crypto.subtle === undefined
) {
  Object.defineProperty(globalThis, "crypto", {
    value: webcrypto,
    configurable: true,
    writable: true,
  });
}

if (globalCrypto.TextEncoder === undefined) {
  globalCrypto.TextEncoder = TextEncoder;
}

if (globalCrypto.TextDecoder === undefined) {
  globalCrypto.TextDecoder = TextDecoder;
}
