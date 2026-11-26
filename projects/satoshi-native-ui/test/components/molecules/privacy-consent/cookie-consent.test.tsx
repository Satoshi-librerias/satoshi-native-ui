import { fireEvent, render, screen } from "@testing-library/react-native";
import { describe, expect, it, jest } from "@jest/globals";

import { CookieConsent } from "@components";

const TRANSLATIONS = {
  title: "Cookies",
  description: "Usamos cookies para mejorar tu experiencia.",
  details: "Las cookies necesarias siempre estan activas.",
  settings: "Preferencias de cookies",
  necessary: "Necesarias: siempre activas",
  optional: "Cookies opcionales",
  acceptAll: "Aceptar todo",
  necessaryOnly: "Solo necesarias",
  manage: "Configurar",
  save: "Guardar",
};

describe("CookieConsent", () => {
  it("shows the consent dialog when no preference is stored", () => {
    render(<CookieConsent translations={TRANSLATIONS} />);

    expect(screen.getByText("Cookies")).toBeTruthy();
    expect(screen.getByText("Aceptar todo")).toBeTruthy();
  });

  it("saves the accept-all preference and hides the dialog", () => {
    const onPreferenceSaved = jest.fn();

    render(
      <CookieConsent
        onPreferenceSaved={onPreferenceSaved}
        translations={TRANSLATIONS}
      />,
    );

    fireEvent.press(screen.getByText("Aceptar todo"));

    expect(onPreferenceSaved).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Aceptar todo")).toBeNull();
    expect(screen.getByText("Preferencias de cookies")).toBeTruthy();
  });

  it("opens the manage mode and saves the optional choice", () => {
    const onPreferenceSaved = jest.fn();

    render(
      <CookieConsent
        onPreferenceSaved={onPreferenceSaved}
        translations={TRANSLATIONS}
      />,
    );

    fireEvent.press(screen.getByText("Configurar"));

    expect(screen.getByText("Cookies opcionales")).toBeTruthy();

    fireEvent.press(screen.getByText("Guardar"));

    expect(onPreferenceSaved).toHaveBeenCalledTimes(1);
  });
});
