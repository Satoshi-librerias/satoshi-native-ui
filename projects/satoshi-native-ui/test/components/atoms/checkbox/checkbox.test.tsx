import { fireEvent, render, screen } from "@testing-library/react-native";
import { describe, expect, it, jest } from "@jest/globals";

import { Checkbox, Switch } from "@components";
import { withProviders } from "@test/utils/with-providers";

describe("Checkbox", () => {
  it("toggles the checked state through onChange", () => {
    const onChange = jest.fn();

    render(
      withProviders(
        <Checkbox isChecked={false} onChange={onChange} ariaLabel="Aceptar" />,
      ),
    );

    fireEvent.press(screen.getByLabelText("Aceptar"));

    expect(onChange).toHaveBeenCalledWith(true);
  });
});

describe("Switch", () => {
  it("toggles the switch state through onChange", () => {
    const onChange = jest.fn();

    render(
      withProviders(
        <Switch
          isChecked={true}
          onChange={onChange}
          ariaLabel="Notificaciones"
        />,
      ),
    );

    fireEvent.press(screen.getByLabelText("Notificaciones"));

    expect(onChange).toHaveBeenCalledWith(false);
  });
});
