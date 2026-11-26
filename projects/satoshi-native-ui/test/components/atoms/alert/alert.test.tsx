import { render, screen } from "@testing-library/react-native";
import { describe, expect, it } from "@jest/globals";

import { Alert, Badge, Card } from "@components";
import { withProviders } from "@test/utils/with-providers";

describe("Alert", () => {
  it("renders its content with the default variant", () => {
    render(withProviders(<Alert>Operacion exitosa</Alert>));

    expect(screen.getByText("Operacion exitosa")).toBeTruthy();
  });
});

describe("Badge", () => {
  it("renders its content", () => {
    render(withProviders(<Badge variant="success">Activo</Badge>));

    expect(screen.getByText("Activo")).toBeTruthy();
  });
});

describe("Card", () => {
  it("renders its children", () => {
    render(withProviders(<Card variant="base">Contenido</Card>));

    expect(screen.getByText("Contenido")).toBeTruthy();
  });
});
