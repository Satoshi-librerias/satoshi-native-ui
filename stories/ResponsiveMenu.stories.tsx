import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Navigation, ResponsiveMenu } from "@components";

/**
 * @description Stories del menu responsive.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/ResponsiveMenu",
  component: ResponsiveMenu,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ResponsiveMenu>;

export default meta;

type Story = StoryObj<typeof ResponsiveMenu>;

/**
 * @description Menu cerrado por defecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Cerrado: Story = {
  args: {
    isOpen: false,
    onToggle: fn(),
    children: (
      <Navigation
        items={[
          { label: "Inicio", href: "/" },
          { label: "Componentes", href: "/components" },
        ]}
        orientation="vertical"
      />
    ),
  },
};

/**
 * @description Menu abierto con navegacion vertical.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Abierto: Story = {
  args: {
    isOpen: true,
    onToggle: fn(),
    children: (
      <Navigation
        items={[
          { label: "Inicio", href: "/" },
          { label: "Componentes", href: "/components" },
          { label: "Documentacion", href: "/docs" },
        ]}
        orientation="vertical"
      />
    ),
  },
};

/**
 * @description Menu no controlado que alterna su estado internamente.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const NoControlado: Story = {
  args: {
    children: (
      <Navigation
        items={[
          { label: "Inicio", href: "/" },
          { label: "Acerca", href: "/about" },
        ]}
        orientation="vertical"
      />
    ),
  },
};
