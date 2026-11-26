import { fireEvent, render, screen } from "@testing-library/react-native";
import { describe, expect, it, jest } from "@jest/globals";

import { Input } from "@components";
import { withProviders } from "@test/utils/with-providers";

describe("Input", () => {
  it("renders the placeholder", () => {
    render(withProviders(<Input placeholder="Nombre" ariaLabel="Nombre" />));

    expect(screen.getByPlaceholderText("Nombre")).toBeTruthy();
  });

  it("propagates the typed value through onChange", () => {
    const onChange = jest.fn();

    render(withProviders(<Input onChange={onChange} ariaLabel="Nombre" />));

    fireEvent.changeText(screen.getByLabelText("Nombre"), "Ada");

    expect(onChange).toHaveBeenCalledWith("Ada");
  });
});
