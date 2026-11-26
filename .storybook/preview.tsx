import type { Preview } from "@storybook/react";
import {
  ThemeProvider,
  TranslateProvider,
} from "../projects/satoshi-native-ui/src/libs";
import { STORY_THEMES } from "../stories/fixtures";
import { STORY_TRANSLATIONS } from "../stories/translations";
import "./nativewind-interop";
// @ts-expect-error CSS is loaded by Vite; TypeScript has no declaration for this side-effect import.
import "../projects/satoshi-native-ui/src/libs/styles/global.css";

/**
 * @description Envuelve todas las stories con los providers publicos de la
 * libreria y sincroniza el tema seleccionado en la toolbar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  globalTypes: {
    theme: {
      description: "Tema activo de la libreria",
      toolbar: {
        title: "Tema",
        icon: "paintbrush",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
    language: {
      description: "Idioma activo de la libreria",
      toolbar: {
        title: "Idioma",
        icon: "globe",
        items: ["es", "en"],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: "light",
    language: "es",
  },

  decorators: [
    (Story, context) => {
      const themeName = context.globals.theme ?? "light";
      const language = context.globals.language ?? "es";

      return (
        <TranslateProvider
          translations={STORY_TRANSLATIONS}
          initialLanguage={language}
          fallbackLanguage="en"
          languageEncryptionKey="storybook-demo-key"
        >
          <ThemeProvider themes={STORY_THEMES} initialTheme={themeName}>
            <Story />
          </ThemeProvider>
        </TranslateProvider>
      );
    },
  ],
};

export default preview;
