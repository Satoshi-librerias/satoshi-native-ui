import { describe, expect, it } from "@jest/globals";

import {
  getLocalStorage,
  resolveStorage,
  setKeyValueStorage,
  type KeyValueStorage,
} from "@libs";

/**
 * @description Crea un adaptador de almacenamiento en memoria.
 * @returns Adaptador KeyValueStorage de prueba.
 * @author Steveen Cues
 * @version 1.0.0
 */
function createMemoryStorage(): KeyValueStorage {
  const map = new Map<string, string>();

  return {
    getItem: (key: string): string | null => map.get(key) ?? null,
    setItem: (key: string, value: string): void => {
      map.set(key, value);
    },
    removeItem: (key: string): void => {
      map.delete(key);
    },
  };
}

describe("storage-api.util", () => {
  it("returns localStorage when available", () => {
    expect(getLocalStorage()).toBeDefined();
  });

  it("resolves the registered adapter over localStorage", () => {
    const adapter = createMemoryStorage();

    setKeyValueStorage(adapter);

    expect(resolveStorage()).toBe(adapter);
  });

  it("stores and reads values through the registered adapter", () => {
    const adapter = createMemoryStorage();

    setKeyValueStorage(adapter);
    adapter.setItem("clave", "valor");

    expect(adapter.getItem("clave")).toBe("valor");
  });
});
