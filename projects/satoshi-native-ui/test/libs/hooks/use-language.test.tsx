import { act, render } from "@testing-library/react-native";
import { describe, expect, it } from "@jest/globals";
import type { ReactNode } from "react";

import { ThemeProvider, TranslateProvider, useLanguage, useTheme } from "@libs";
import { THEMES } from "@test/fixtures/theme.fixtures";
import { TEST_TRANSLATIONS } from "@test/fixtures/translations.fixtures";

/**
 * @description Renderiza un sondeo dentro de los providers y captura su valor.
 * @param useHook Hook a sondear.
 * @returns Valor actual del hook con rerender controlado.
 * @author Steveen Cues
 * @version 1.0.0
 */
function renderProbe<T>(useHook: () => T): {
  current: T;
  rerender: () => void;
} {
  let captured: T | undefined;
  let rerenderFn: () => void = () => undefined;

  function Probe(): null {
    captured = useHook();
    return null;
  }

  function Wrapper({ children }: { children: ReactNode }): ReactNode {
    return (
      <TranslateProvider
        translations={TEST_TRANSLATIONS}
        initialLanguage="es"
        fallbackLanguage="en"
        languageEncryptionKey="test-encryption-key"
      >
        <ThemeProvider themes={THEMES} initialTheme="light">
          {children}
        </ThemeProvider>
      </TranslateProvider>
    );
  }

  const view = render(<Probe />, { wrapper: Wrapper });
  rerenderFn = (): void => view.rerender(<Probe />);

  return {
    get current(): T {
      if (captured === undefined) {
        throw new Error("Probe did not capture a value.");
      }
      return captured;
    },
    rerender: rerenderFn,
  };
}

describe("useLanguage", () => {
  it("exposes the active language and translation function", () => {
    const probe = renderProbe(useLanguage);

    expect(probe.current.language).toBe("es");
    expect(probe.current.t("greeting")).toBe("Hola");
    expect(probe.current.languages).toEqual(["es", "en"]);
  });

  it("switches language and translates with the new catalog", () => {
    const probe = renderProbe(useLanguage);

    act(() => {
      probe.current.setLanguage("en");
    });

    expect(probe.current.language).toBe("en");
    expect(probe.current.t("greeting")).toBe("Hello");
  });

  it("falls back to the fallback language for missing keys", () => {
    const probe = renderProbe(useLanguage);

    expect(probe.current.t("nested.key")).toBe("Valor anidado");
  });
});

describe("useTheme", () => {
  it("exposes the active theme name", () => {
    const probe = renderProbe(useTheme);

    expect(probe.current.themeName).toBe("light");
  });

  it("switches the active theme", () => {
    const probe = renderProbe(useTheme);

    act(() => {
      probe.current.setTheme("dark");
    });

    expect(probe.current.themeName).toBe("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});
