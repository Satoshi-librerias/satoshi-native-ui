import type { AppTheme } from "@libs";

/**
 * @description Define las claves de traduccion configurables del selector
 * de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorTranslations {
  readonly title?: string;
  readonly select?: string;
  readonly selected?: string;
  readonly searchPlaceholder?: string;
  readonly empty?: string;
  readonly of?: string;
  readonly results?: string;
  readonly close?: string;
}

/**
 * @description Define los textos traducidos que recibe el panel.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorPanelTranslations {
  readonly title: string;
  readonly searchPlaceholder: string;
  readonly empty: string;
  readonly of: string;
  readonly results: string;
  readonly close: string;
}

/**
 * @description Define las propiedades del selector de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorProps {
  readonly label?: string;
  readonly placeholder?: string;
  readonly className?: string;
  readonly showDescriptions?: boolean;
  readonly translations?: ThemeSelectorTranslations;
}

/**
 * @description Define las propiedades del boton que abre el selector.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorTriggerProps {
  readonly theme: AppTheme;
  readonly isOpen: boolean;
  readonly ariaLabel?: string;
  readonly selectedLabel?: string;
  readonly onToggle: () => void;
}

/**
 * @description Define las propiedades del campo de busqueda de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorSearchProps {
  readonly value: string;
  readonly placeholder: string;
  readonly onChange: (value: string) => void;
}

/**
 * @description Define las propiedades de la lista de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorListProps {
  readonly themes: readonly AppTheme[];
  readonly selectedTheme: string;
  readonly showDescriptions: boolean;
  readonly label: string;
  readonly emptyMessage: string;
  readonly onSelect: (themeName: string) => void;
}

/**
 * @description Define las propiedades de una opcion de tema.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorOptionProps {
  readonly theme: AppTheme;
  readonly isSelected: boolean;
  readonly showDescription: boolean;
  readonly onSelect: (themeName: string) => void;
}

/**
 * @description Define los mensajes traducidos del selector de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorMessages extends ThemeSelectorPanelTranslations {
  readonly select: string;
  readonly selected: string;
}

/**
 * @description Define el estado y las acciones del selector de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface UseThemeSelectorResult {
  readonly isOpen: boolean;
  readonly search: string;
  readonly handleToggle: () => void;
  readonly handleClose: () => void;
  readonly handleSearchChange: (value: string) => void;
}
