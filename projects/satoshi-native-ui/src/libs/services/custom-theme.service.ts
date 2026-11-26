import { CSS_THEME_TOKEN_ENTRIES } from "@libs/constants";
import type { CustomThemeDefinition } from "@libs/interface";

/**
 * @description Registro en memoria de los temas personalizados aplicados.
 * En web tambien inyecta las variables CSS del tema; en nativo solo
 * mantiene el registro para que el provider resuelva los tokens.
 * @author Steveen Cues
 * @version 1.0.0
 */
export class CustomThemeService {
  private static readonly STYLE_ID_PREFIX = "satoshi-custom-theme-";

  private readonly registeredNames = new Set<string>();

  /**
   * @description Registra o actualiza un tema personalizado.
   * @param theme Definicion del tema personalizado.
   * @returns void.
   * @author Steveen Cues
   * @version 1.0.0
   */
  public register(theme: CustomThemeDefinition): void {
    this.validateThemeName(theme.name);
    this.registeredNames.add(theme.name);
    this.applyThemeVariables(theme);
  }

  /**
   * @description Elimina el registro de un tema personalizado.
   * @param themeName Nombre del tema.
   * @returns void.
   * @author Steveen Cues
   * @version 1.0.0
   */
  public unregister(themeName: string): void {
    this.validateThemeName(themeName);

    this.registeredNames.delete(themeName);

    const styleElement = document.getElementById(
      this.getStyleElementId(themeName),
    );

    styleElement?.remove();
  }

  /**
   * @description Comprueba si un tema tiene registro activo.
   * @param themeName Nombre del tema.
   * @returns Indica si el tema esta registrado.
   * @author Steveen Cues
   * @version 1.0.0
   */
  public isRegistered(themeName: string): boolean {
    this.validateThemeName(themeName);

    return this.registeredNames.has(themeName);
  }

  /**
   * @description Valida el nombre del tema.
   * @param themeName Nombre del tema.
   * @returns void.
   * @author Steveen Cues
   * @version 1.0.0
   */
  private validateThemeName(themeName: string): void {
    const validThemeName = /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(themeName);

    if (!validThemeName) {
      throw new Error(`Invalid theme name: ${themeName}`);
    }
  }

  /**
   * @description Aplica las variables CSS del tema en web. En nativo el
   * metodo no realiza acciones porque no existe document.
   * @param theme Definicion del tema personalizado.
   * @returns void.
   * @author Steveen Cues
   * @version 1.0.0
   */
  private applyThemeVariables(theme: CustomThemeDefinition): void {
    if (typeof document === "undefined") {
      return;
    }

    const styleElement = this.getOrCreateStyleElement(theme.name);
    const declarations = this.createColorDeclarations(theme);

    styleElement.textContent = this.createThemeStylesheet(theme, declarations);
  }

  /**
   * @description Genera las declaraciones CSS de los colores del tema.
   * @param theme Definicion del tema.
   * @returns Declaraciones CSS.
   * @author Steveen Cues
   * @version 1.0.0
   */
  private createColorDeclarations(theme: CustomThemeDefinition): string {
    return CSS_THEME_TOKEN_ENTRIES.map(([token, variable]) => {
      const color = theme.colors[token];

      return `${variable}: ${color};`;
    }).join("\n");
  }

  /**
   * @description Genera las reglas CSS del tema.
   * @param theme Definicion del tema.
   * @param declarations Declaraciones CSS de los colores.
   * @returns Hoja de estilos CSS.
   * @author Steveen Cues
   * @version 1.0.0
   */
  private createThemeStylesheet(
    theme: CustomThemeDefinition,
    declarations: string,
  ): string {
    return `
      [data-theme="${theme.name}"] {
        color-scheme: ${theme.colors.colorScheme};
        ${declarations}
      }
    `;
  }

  /**
   * @description Obtiene el elemento de estilos o lo crea si no existe.
   * @param themeName Nombre del tema.
   * @returns Elemento de estilos CSS.
   * @author Steveen Cues
   * @version 1.0.0
   */
  private getOrCreateStyleElement(themeName: string): HTMLStyleElement {
    const styleId = this.getStyleElementId(themeName);
    const existingElement = document.getElementById(styleId);

    if (existingElement instanceof HTMLStyleElement) {
      return existingElement;
    }

    existingElement?.remove();

    const styleElement = document.createElement("style");
    styleElement.id = styleId;

    document.head.appendChild(styleElement);

    return styleElement;
  }

  /**
   * @description Construye el identificador del elemento de estilos.
   * @param themeName Nombre del tema.
   * @returns Identificador HTML.
   * @author Steveen Cues
   * @version 1.0.0
   */
  private getStyleElementId(themeName: string): string {
    return `${CustomThemeService.STYLE_ID_PREFIX}${themeName}`;
  }
}

/**
 * @description Instancia compartida del servicio de temas personalizados.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const customThemeService = new CustomThemeService();
