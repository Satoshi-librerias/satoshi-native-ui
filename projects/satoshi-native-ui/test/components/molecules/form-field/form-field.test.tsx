import { render, screen } from "@testing-library/react-native";
import { describe, expect, it } from "@jest/globals";

import { FormField } from "@components";
import { withProviders } from "@test/utils/with-providers";

describe("FormField", () => {
  it("renders the label and the input", () => {
    render(withProviders(<FormField label="Correo" type="email" />));

    expect(screen.getByText("Correo")).toBeTruthy();
    expect(screen.getByLabelText("Correo")).toBeTruthy();
  });

  it("shows the error message when provided", () => {
    render(
      withProviders(
        <FormField label="Correo" errorMessage="Correo invalido" />,
      ),
    );

    expect(screen.getByText("Correo invalido")).toBeTruthy();
  });

  it("shows the hint when there is no error", () => {
    render(
      withProviders(
        <FormField label="Correo" hint="Usa tu correo corporativo" />,
      ),
    );

    expect(screen.getByText("Usa tu correo corporativo")).toBeTruthy();
  });
});
