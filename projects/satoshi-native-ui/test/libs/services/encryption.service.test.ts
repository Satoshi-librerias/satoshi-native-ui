import { describe, expect, it } from "@jest/globals";

import { decryptText, encryptText } from "@libs";

const SECRET = "test-secret-key";

describe("encryption.service", () => {
  it("encrypts and decrypts a value round trip", async () => {
    const encrypted = await encryptText("valor-secreto", SECRET);

    expect(encrypted).toBeDefined();

    const decrypted = await decryptText(encrypted as string, SECRET);

    expect(decrypted).toBe("valor-secreto");
  });

  it("returns undefined when the secret is empty", async () => {
    const encrypted = await encryptText("valor", "");

    expect(encrypted).toBeUndefined();
  });

  it("returns undefined for malformed encrypted values", async () => {
    const decrypted = await decryptText("valor-invalido", SECRET);

    expect(decrypted).toBeUndefined();
  });
});
