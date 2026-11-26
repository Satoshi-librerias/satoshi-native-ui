import type { AppTheme, CustomThemeDefinition } from "@libs";

/**
 * @description Construye un tema base con su manifiesto.
 * @param name Nombre del tema y clave de traduccion.
 * @param isDefault Indica si es el tema predeterminado.
 * @returns Tema base para las pruebas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const createTheme = (name: string, isDefault = false): AppTheme => ({
  name,
  manifest: {
    id: name,
    name: `${name}.name`,
    description: `${name}.description`,
    version: "1.0.0",
    author: "Satoshi",
    tags: [],
    supportedFeatures: [],
    isDefault,
    isExperimental: false,
  },
});

/**
 * @description Tema claro base para las pruebas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LIGHT_THEME: AppTheme = createTheme("light", true);

/**
 * @description Tema oscuro base para las pruebas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DARK_THEME: AppTheme = createTheme("dark");

/**
 * @description Tema personalizado de ejemplo para las pruebas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CUSTOM_THEME: CustomThemeDefinition = {
  ...createTheme("brand"),
  colors: {
    colorScheme: "light",
    primary: "#2563eb",
    primaryContent: "#ffffff",
    secondary: "#7c3aed",
    secondaryContent: "#ffffff",
    accent: "#f59e0b",
    accentContent: "#ffffff",
    neutral: "#1f2937",
    neutralContent: "#ffffff",
    base100: "#ffffff",
    base200: "#f4f4f5",
    base300: "#e4e4e7",
    baseContent: "#18181b",
    info: "#0ea5e9",
    infoContent: "#ffffff",
    success: "#22c55e",
    successContent: "#ffffff",
    warning: "#eab308",
    warningContent: "#ffffff",
    error: "#ef4444",
    errorContent: "#ffffff",
  },
};

/**
 * @description Coleccion de temas disponible para las pruebas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const THEMES: readonly AppTheme[] = [
  LIGHT_THEME,
  DARK_THEME,
  CUSTOM_THEME,
];
