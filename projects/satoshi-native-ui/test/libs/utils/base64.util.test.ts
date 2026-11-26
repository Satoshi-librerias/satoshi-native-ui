import { describe, expect, it } from "@jest/globals";

import { decodeBase64, encodeBase64, encodeText, decodeText } from "@libs";

describe("base64.util", () => {
  it("encodes and decodes bytes round trip", () => {
    const bytes = encodeText("Satoshi Native UI");
    const encoded = encodeBase64(bytes);
    const decoded = decodeBase64(encoded);

    expect(decodeText(decoded.buffer)).toBe("Satoshi Native UI");
  });
});

describe("text-encoding.util", () => {
  it("encodes text into UTF-8 bytes", () => {
    const bytes = encodeText("abc");

    expect(bytes.length).toBe(3);
  });

  it("decodes UTF-8 bytes into text", () => {
    const bytes = encodeText("abc");

    expect(decodeText(bytes.buffer)).toBe("abc");
  });
});
