import { fireEvent, render, screen } from "@testing-library/react-native";
import { describe, expect, it, jest } from "@jest/globals";

import { Button } from "@components";
import { withProviders } from "@test/utils/with-providers";

describe("Button", () => {
  it("renders its children", () => {
    render(withProviders(<Button>Guardar</Button>));

    expect(screen.getByText("Guardar")).toBeTruthy();
  });

  it("invokes onClick when pressed", () => {
    const onClick = jest.fn();

    render(withProviders(<Button onClick={onClick}>Guardar</Button>));

    fireEvent.press(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not invoke onClick when disabled", () => {
    const onClick = jest.fn();

    render(
      withProviders(
        <Button disabled={true} onClick={onClick}>
          Guardar
        </Button>,
      ),
    );

    fireEvent.press(screen.getByRole("button"));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("shows a loading indicator instead of children when loading", () => {
    render(withProviders(<Button isLoading={true}>Guardando</Button>));

    expect(screen.getByRole("button").props.loading).toBe(true);
  });
});
