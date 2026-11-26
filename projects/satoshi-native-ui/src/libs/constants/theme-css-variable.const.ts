/**
 * @description Define los nombres de las variables CSS de los tokens de
 * tema compartidos entre web y nativo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CSS_THEME_TOKENS = {
  primary: "--satoshi-primary",
  primaryContent: "--satoshi-primary-content",
  secondary: "--satoshi-secondary",
  secondaryContent: "--satoshi-secondary-content",
  accent: "--satoshi-accent",
  accentContent: "--satoshi-accent-content",
  neutral: "--satoshi-neutral",
  neutralContent: "--satoshi-neutral-content",
  base100: "--satoshi-base-100",
  base200: "--satoshi-base-200",
  base300: "--satoshi-base-300",
  baseContent: "--satoshi-base-content",
  info: "--satoshi-info",
  infoContent: "--satoshi-info-content",
  success: "--satoshi-success",
  successContent: "--satoshi-success-content",
  warning: "--satoshi-warning",
  warningContent: "--satoshi-warning-content",
  error: "--satoshi-error",
  errorContent: "--satoshi-error-content",
} as const;

/**
 * @description Define la coleccion de claves y variables CSS de los tokens.
 * Cada entrada relaciona una clave de color con su variable CSS.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CSS_THEME_TOKEN_ENTRIES: readonly [
  keyof typeof CSS_THEME_TOKENS,
  (typeof CSS_THEME_TOKENS)[keyof typeof CSS_THEME_TOKENS],
][] = [
  ["primary", CSS_THEME_TOKENS.primary],
  ["primaryContent", CSS_THEME_TOKENS.primaryContent],
  ["secondary", CSS_THEME_TOKENS.secondary],
  ["secondaryContent", CSS_THEME_TOKENS.secondaryContent],
  ["accent", CSS_THEME_TOKENS.accent],
  ["accentContent", CSS_THEME_TOKENS.accentContent],
  ["neutral", CSS_THEME_TOKENS.neutral],
  ["neutralContent", CSS_THEME_TOKENS.neutralContent],
  ["base100", CSS_THEME_TOKENS.base100],
  ["base200", CSS_THEME_TOKENS.base200],
  ["base300", CSS_THEME_TOKENS.base300],
  ["baseContent", CSS_THEME_TOKENS.baseContent],
  ["info", CSS_THEME_TOKENS.info],
  ["infoContent", CSS_THEME_TOKENS.infoContent],
  ["success", CSS_THEME_TOKENS.success],
  ["successContent", CSS_THEME_TOKENS.successContent],
  ["warning", CSS_THEME_TOKENS.warning],
  ["warningContent", CSS_THEME_TOKENS.warningContent],
  ["error", CSS_THEME_TOKENS.error],
  ["errorContent", CSS_THEME_TOKENS.errorContent],
];
