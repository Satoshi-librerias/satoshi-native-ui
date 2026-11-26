import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CookieConsent } from "@components";

/**
 * @description Stories del consentimiento de cookies.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/CookieConsent",
  component: CookieConsent,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CookieConsent>;

export default meta;

type Story = StoryObj<typeof CookieConsent>;

/**
 * @description Panel de consentimiento con etiquetas traducidas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Predeterminado: Story = {
  args: {
    storageKey: "storybook-cookie-consent-demo",
    onPreferenceSaved: fn(),
    translations: {
      title: "Cookies",
      description: "Usamos cookies para mejorar tu experiencia.",
      details: "Las cookies necesarias siempre estan activas.",
      settings: "Preferencias de cookies",
      necessary: "Necesarias: siempre activas",
      optional: "Cookies opcionales",
      acceptAll: "Aceptar todo",
      necessaryOnly: "Solo necesarias",
      manage: "Configurar",
      save: "Guardar",
    },
  },
};
