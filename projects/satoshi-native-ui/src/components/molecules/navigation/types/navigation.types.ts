/**
 * @description Define un elemento configurable de navegacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface NavigationItem {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

/**
 * @description Define las propiedades de la barra de navegacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface NavigationProps {
  readonly items: readonly NavigationItem[];
  readonly ariaLabel?: string;
  readonly orientation?: "horizontal" | "vertical";
  readonly className?: string;
  readonly onItemPress?: (item: NavigationItem) => void;
}

/**
 * @description Define las propiedades de un enlace de navegacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface NavigationLinkProps {
  readonly item: NavigationItem;
  readonly onPress?: (item: NavigationItem) => void;
}
