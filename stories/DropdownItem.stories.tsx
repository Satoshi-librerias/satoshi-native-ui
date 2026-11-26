import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DropdownItem } from "@components";

/**
 * @description Stories del elemento de menu desplegable.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/DropdownItem",
  component: DropdownItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownItem>;

export default meta;

type Story = StoryObj<typeof DropdownItem>;

/**
 * @description Elemento de menu basico.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Basico: Story = {
  args: {
    item: { id: "copy", label: "Copiar" },
    onSelect: fn(),
  },
};

/**
 * @description Elemento con atajo de teclado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConAtajo: Story = {
  args: {
    item: { id: "copy", label: "Copiar", shortcut: "Ctrl+C" },
    onSelect: fn(),
  },
};

/**
 * @description Elemento seleccionado con variantes de color.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-1">
      <DropdownItem
        isSelected={true}
        item={{ id: "primary", label: "Primario" }}
        variant="primary"
      />
      <DropdownItem
        item={{ id: "secondary", label: "Secundario" }}
        variant="secondary"
      />
      <DropdownItem item={{ id: "accent", label: "Acento" }} variant="accent" />
      <DropdownItem item={{ id: "neutral", label: "Neutral" }} />
    </div>
  ),
};
