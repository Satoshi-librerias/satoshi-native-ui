import { fireEvent, render, screen } from "@testing-library/react-native";
import { describe, expect, it, jest } from "@jest/globals";

import { Tabs } from "@components";

const ITEMS = [
  { id: "general", label: "General" },
  { id: "security", label: "Seguridad" },
];

describe("Tabs", () => {
  it("renders every tab item", () => {
    render(<Tabs items={ITEMS} />);

    expect(screen.getByText("General")).toBeTruthy();
    expect(screen.getByText("Seguridad")).toBeTruthy();
  });

  it("marks the active tab as selected", () => {
    render(<Tabs activeId="security" items={ITEMS} />);

    expect(
      screen.getByRole("tab", { name: "Seguridad" }).props.accessibilityState,
    ).toMatchObject({ selected: true });
  });

  it("invokes onChange when a tab is pressed", () => {
    const onChange = jest.fn();

    render(<Tabs items={ITEMS} onChange={onChange} />);

    fireEvent.press(screen.getByText("Seguridad"));

    expect(onChange).toHaveBeenCalledWith("security");
  });
});
