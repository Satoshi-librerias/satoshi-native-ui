import { fireEvent, render, screen } from "@testing-library/react-native";
import { describe, expect, it } from "@jest/globals";

import { GuidedTour } from "@components";

const TRANSLATIONS = {
  openGuide: "Abrir guia",
  stepOf: "Paso {current} de {total}",
  back: "Atras",
  next: "Siguiente",
  skip: "Omitir",
  finish: "Finalizar",
};

const STEPS = [
  {
    targetId: "dashboard",
    title: "Panel",
    description: "Aqui ves el resumen.",
  },
  {
    targetId: "settings",
    title: "Ajustes",
    description: "Configura tu cuenta.",
  },
];

describe("GuidedTour", () => {
  it("opens automatically when no completion flag is stored", () => {
    render(<GuidedTour steps={STEPS} translations={TRANSLATIONS} />);

    expect(screen.getByText("Panel")).toBeTruthy();
    expect(screen.getByText("Paso 1 de 2")).toBeTruthy();
  });

  it("advances to the next step and finishes the tour", () => {
    render(<GuidedTour steps={STEPS} translations={TRANSLATIONS} />);

    fireEvent.press(screen.getByText("Siguiente"));

    expect(screen.getByText("Ajustes")).toBeTruthy();
    expect(screen.getByText("Paso 2 de 2")).toBeTruthy();

    fireEvent.press(screen.getByText("Finalizar"));

    expect(screen.queryByText("Ajustes")).toBeNull();
  });

  it("goes back to the previous step", () => {
    render(<GuidedTour steps={STEPS} translations={TRANSLATIONS} />);

    fireEvent.press(screen.getByText("Siguiente"));
    fireEvent.press(screen.getByText("Atras"));

    expect(screen.getByText("Panel")).toBeTruthy();
  });

  it("skips the tour and closes the dialog", () => {
    render(<GuidedTour steps={STEPS} translations={TRANSLATIONS} />);

    fireEvent.press(screen.getByText("Omitir"));

    expect(screen.queryByText("Panel")).toBeNull();
  });

  it("does not open automatically when disabled", () => {
    render(
      <GuidedTour enabled={false} steps={STEPS} translations={TRANSLATIONS} />,
    );

    expect(screen.queryByText("Panel")).toBeNull();
  });
});
