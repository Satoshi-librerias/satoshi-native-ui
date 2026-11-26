import { afterEach, describe, expect, it } from "@jest/globals";

import {
  applyThemeToDocument,
  findThemeByName,
  isCustomThemeDefinition,
  persistTheme,
  resolveInitialTheme,
} from "@libs";
import {
  CUSTOM_THEME,
  LIGHT_THEME,
  THEMES,
} from "@test/fixtures/theme.fixtures";

afterEach(() => {
  window.localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

describe("findThemeByName", () => {
  it("finds a theme by name", () => {
    expect(findThemeByName(THEMES, "light")).toBe(LIGHT_THEME);
  });

  it("returns undefined for an unknown theme", () => {
    expect(findThemeByName(THEMES, "magenta")).toBeUndefined();
  });
});

describe("isCustomThemeDefinition", () => {
  it("returns true for a theme with custom colors", () => {
    expect(isCustomThemeDefinition(CUSTOM_THEME)).toBe(true);
  });

  it("returns false for a base theme", () => {
    expect(isCustomThemeDefinition(LIGHT_THEME)).toBe(false);
  });
});

describe("resolveInitialTheme", () => {
  it("returns the requested theme when registered", () => {
    expect(resolveInitialTheme(THEMES, "brand")).toBe("brand");
  });

  it("falls back to the first theme when the request is unknown", () => {
    expect(resolveInitialTheme(THEMES, "magenta")).toBe("light");
  });

  it("prefers the stored theme over the requested one", () => {
    window.localStorage.setItem("app_theme", "brand");

    expect(resolveInitialTheme(THEMES, "light")).toBe("brand");
  });
});

describe("applyThemeToDocument", () => {
  it("sets the data-theme attribute", () => {
    applyThemeToDocument("dark");

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});

describe("persistTheme", () => {
  it("stores the theme name in localStorage", () => {
    persistTheme("dark");

    expect(window.localStorage.getItem("app_theme")).toBe("dark");
  });
});
