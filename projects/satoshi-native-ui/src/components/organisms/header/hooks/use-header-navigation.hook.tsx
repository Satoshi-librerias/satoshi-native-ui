import { useMemo } from "react";
import type { JSX } from "react";
import { useLanguage } from "@libs";
import { Navigation } from "@components/molecules";
import type { NavigationItem } from "@components/molecules/navigation/types/navigation.types";
import { translateHeaderLabels } from "../utils/translate-header-labels.util";
import type { HeaderLabels } from "../utils/translate-header-labels.util";
import type { HeaderTranslations } from "../types/header.types";

/**
 * @description Define las propiedades de la vista de navegacion del Header.
 * @author Steveen Cues
 * @version 1.0.0
 */
interface HeaderNavigationProps {
  readonly items: readonly NavigationItem[];
  readonly showNavigation: boolean;
  readonly translations: HeaderTranslations | undefined;
  readonly onItemPress?: (item: NavigationItem) => void;
}

/**
 * @description Define la navegacion resuelta del Header.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface HeaderNavigationResult {
  readonly navigation: JSX.Element | null;
  readonly labels: HeaderLabels;
}

/**
 * @description Resuelve la navegacion del Header.
 * Devuelve null cuando la navegacion esta oculta.
 * @param props Configuracion de la navegacion.
 * @param props.items Elementos de navegacion configurados.
 * @param props.showNavigation Indica si la navegacion esta visible.
 * @param props.translations Claves de traduccion configuradas.
 * @param props.onItemPress Callback ejecutado al pulsar un elemento.
 * @returns Navegacion resuelta o null.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useHeaderNavigation({
  items,
  showNavigation,
  translations,
  onItemPress,
}: HeaderNavigationProps): HeaderNavigationResult {
  const { t } = useLanguage();
  const labels = translateHeaderLabels(translations, t);

  return useMemo((): HeaderNavigationResult => {
    if (!showNavigation || items.length === 0) {
      return { navigation: null, labels };
    }

    const navigation: JSX.Element = (
      <Navigation
        items={items}
        ariaLabel={labels.navigationLabel}
        onItemPress={onItemPress}
      />
    );

    return { navigation, labels };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, labels.navigationLabel, onItemPress, showNavigation]);
}
