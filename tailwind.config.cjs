/**
 * @description Configuracion de Tailwind para NativeWind.
 * Los tokens semanticos replican la paleta DaisyUI de la libreria React
 * original para mantener la identidad visual de Satoshi UI.
 * @author Steveen Cues
 * @version 1.0.0
 */
module.exports = {
  content: [
    "./projects/satoshi-native-ui/src/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--satoshi-primary)",
        "primary-content": "var(--satoshi-primary-content)",
        secondary: "var(--satoshi-secondary)",
        "secondary-content": "var(--satoshi-secondary-content)",
        accent: "var(--satoshi-accent)",
        "accent-content": "var(--satoshi-accent-content)",
        neutral: "var(--satoshi-neutral)",
        "neutral-content": "var(--satoshi-neutral-content)",
        "base-100": "var(--satoshi-base-100)",
        "base-200": "var(--satoshi-base-200)",
        "base-300": "var(--satoshi-base-300)",
        "base-content": "var(--satoshi-base-content)",
        info: "var(--satoshi-info)",
        "info-content": "var(--satoshi-info-content)",
        success: "var(--satoshi-success)",
        "success-content": "var(--satoshi-success-content)",
        warning: "var(--satoshi-warning)",
        "warning-content": "var(--satoshi-warning-content)",
        error: "var(--satoshi-error)",
        "error-content": "var(--satoshi-error-content)",
      },
      borderRadius: {
        box: "0.5rem",
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
