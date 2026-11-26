import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  Header,
  HeaderActions,
  HeaderBrand,
  HeaderComposition,
} from "@components";

/**
 * @description Stories del organismo Header por composicion.
 * @author Steveen Cues
 * @version 1.0.0
 */
const compositionMeta = {
  title: "Organismos/HeaderComposition",
  component: HeaderComposition,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderComposition>;

export default compositionMeta;

type CompositionStory = StoryObj<typeof compositionMeta>;

/**
 * @description Header por composicion con marca y acciones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConMarcaYAcciones: CompositionStory = {
  args: {
    children: null,
  },
  render: () => (
    <HeaderComposition>
      <HeaderBrand>
        <span className="font-semibold">Satoshi</span>
      </HeaderBrand>
      <HeaderActions>
        <button type="button">Entrar</button>
      </HeaderActions>
    </HeaderComposition>
  ),
};

/**
 * @description Header por composicion fijo con superficie transparente.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const FijoTransparente: CompositionStory = {
  args: {
    children: null,
  },
  render: () => (
    <HeaderComposition position="sticky" surface="transparent">
      <HeaderBrand>
        <span className="font-semibold">Satoshi</span>
      </HeaderBrand>
      <HeaderActions>
        <button type="button">Entrar</button>
      </HeaderActions>
    </HeaderComposition>
  ),
};

/**
 * @description Coleccion de stories del Header generico.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const HeaderConLogo: StoryObj<Meta<typeof Header>> = {
  args: {
    logo: {
      src: "https://placehold.co/96x96/570df8/ffffff/png?text=S",
      alt: "Satoshi",
      width: 40,
      height: 40,
    },
    navigationItems: [
      { label: "Inicio", href: "/" },
      { label: "Componentes", href: "/components" },
    ],
    onNavigationItemPress: fn(),
  },
};

/**
 * @description Header sin logo, solo navegacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const HeaderSoloNavegacion: StoryObj<Meta<typeof Header>> = {
  args: {
    showLogo: false,
    navigationItems: [
      { label: "Inicio", href: "/" },
      { label: "Acerca", href: "/about" },
      { label: "Contacto", href: "/contact" },
    ],
  },
};
