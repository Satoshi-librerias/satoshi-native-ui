import type { Meta, StoryObj } from "@storybook/react";
import { LanguageSelector } from "@components";

/**
 * @description Stories del selector de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/LanguageSelector",
  component: LanguageSelector,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LanguageSelector>;

export default meta;

type Story = StoryObj<typeof LanguageSelector>;

/**
 * @description Selector de idiomas con el catalogo de la toolbar.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Predeterminado: Story = {
  args: {
    className: "max-w-xs",
  },
};

/**
 * @description Selector con claves de traduccion personalizadas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConTraducciones: Story = {
  args: {
    className: "max-w-xs",
    translations: {
      select: "common.search",
      listLabel: "navigation.ariaLabel",
      searchPlaceholder: "common.searchPlaceholder",
      empty: "molecules.pagination",
    },
  },
};
