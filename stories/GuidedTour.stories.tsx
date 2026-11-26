import type { Meta, StoryObj } from "@storybook/react";
import { GuidedTour } from "@components";

/**
 * @description Stories de la guia de inicio.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/GuidedTour",
  component: GuidedTour,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GuidedTour>;

export default meta;

type Story = StoryObj<typeof GuidedTour>;

/**
 * @description Guia con dos pasos que se abre automaticamente.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DosPasos: Story = {
  args: {
    storageKey: "storybook-guided-tour-demo",
    steps: [
      {
        targetId: "dashboard",
        title: "Panel",
        description: "Aqui ves el resumen de tu actividad reciente.",
      },
      {
        targetId: "settings",
        title: "Ajustes",
        description: "Configura tu cuenta y tus preferencias.",
      },
    ],
    translations: {
      openGuide: "Abrir guia",
      stepOf: "Paso {current} de {total}",
      back: "Atras",
      next: "Siguiente",
      skip: "Omitir",
      finish: "Finalizar",
    },
  },
};

/**
 * @description Guia deshabilitada que solo muestra el boton de inicio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Deshabilitada: Story = {
  args: {
    enabled: false,
    storageKey: "storybook-guided-tour-disabled",
    steps: [
      {
        targetId: "dashboard",
        title: "Panel",
        description: "Aqui ves el resumen de tu actividad reciente.",
      },
    ],
    translations: {
      openGuide: "Abrir guia",
      stepOf: "Paso {current} de {total}",
      back: "Atras",
      next: "Siguiente",
      skip: "Omitir",
      finish: "Finalizar",
    },
  },
};
