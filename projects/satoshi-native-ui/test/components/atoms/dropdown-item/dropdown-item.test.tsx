import { fireEvent, render, screen } from "@testing-library/react-native";
import { describe, expect, it, jest } from "@jest/globals";

import { DropdownItem } from "@components";

const ITEM = { id: "copy", label: "Copiar", shortcut: "Ctrl+C" };

describe("DropdownItem", () => {
  it("renders the label and the keyboard shortcut", () => {
    render(<DropdownItem item={ITEM} />);

    expect(screen.getByText("Copiar")).toBeTruthy();
    expect(screen.getByText("Ctrl+C")).toBeTruthy();
  });

  it("invokes onSelect with the item id when pressed", () => {
    const onSelect = jest.fn();

    render(<DropdownItem item={ITEM} onSelect={onSelect} />);

    fireEvent.press(screen.getByRole("menuitem"));

    expect(onSelect).toHaveBeenCalledWith("copy");
  });

  it("marks the selected state through accessibilityState", () => {
    render(<DropdownItem isSelected={true} item={ITEM} />);

    expect(screen.getByRole("menuitem").props.accessibilityState).toMatchObject(
      { selected: true },
    );
  });
});
