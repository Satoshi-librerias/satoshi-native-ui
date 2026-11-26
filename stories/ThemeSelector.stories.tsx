import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSelector } from "@components";

/**
 * @description Stories del selector de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/ThemeSelector",
  component: ThemeSelector,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSelector>;

export default meta;

type Story = StoryObj<typeof ThemeSelector>;

/**
 * @description Selector de temas con descripciones visibles.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConDescripciones: Story = {
  args: {
    className: "max-w-xs",
    showDescriptions: true,
  },
};

/**
 * @description Selector de temas compacto sin descripciones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Compacto: Story = {
  args: {
    className: "max-w-xs",
    showDescriptions: false,
  },
};
