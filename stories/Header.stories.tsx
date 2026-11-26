import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@components";

/**
 * @description Stories del encabezado de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Organismos/Header",
  component: Header,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Header con logo y navegacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConLogoYNavegacion: Story = {
  args: {
    logo: {
      src: "https://placehold.co/96x96/2563eb/ffffff/png?text=S",
      alt: "Satoshi",
      width: 40,
      height: 40,
    },
    navigationItems: [
      { label: "Inicio", href: "/" },
      { label: "Componentes", href: "/components" },
      { label: "Documentacion", href: "/docs" },
    ],
  },
};

/**
 * @description Header con logo a la derecha.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LogoDerecha: Story = {
  args: {
    logo: {
      src: "https://placehold.co/96x96/7c3aed/ffffff/png?text=S",
      alt: "Satoshi",
      width: 40,
      height: 40,
    },
    navigationItems: [
      { label: "Inicio", href: "/" },
      { label: "Acerca", href: "/about" },
    ],
    logoPosition: "right",
  },
};

/**
 * @description Header fijo con superficie transparente.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const FijoTransparente: Story = {
  args: {
    logo: {
      src: "https://placehold.co/96x96/059669/ffffff/png?text=S",
      alt: "Satoshi",
      width: 40,
      height: 40,
    },
    navigationItems: [{ label: "Inicio", href: "/" }],
    position: "sticky",
    surface: "transparent",
  },
};

/**
 * @description Header sin logo, solo navegacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SoloNavegacion: Story = {
  args: {
    showLogo: false,
    navigationItems: [
      { label: "Inicio", href: "/" },
      { label: "Acerca", href: "/about" },
      { label: "Contacto", href: "/contact" },
    ],
  },
};
