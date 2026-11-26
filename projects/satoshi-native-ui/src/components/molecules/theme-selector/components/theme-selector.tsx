import { useMemo } from "react";
import type { FC, JSX } from "react";
import { View } from "react-native";
import { useLanguage, useTheme } from "@libs";
import { ThemeSelectorPanel } from "./theme-selector-panel";
import { ThemeSelectorTrigger } from "./theme-selector-trigger";
import { SEARCH_THRESHOLD } from "../constants/theme-selector.constants";
import {
  filterThemes,
  prioritizeSelectedTheme,
  translateThemeSelectorMessages,
} from "../utils";
import { useThemeSelectorState } from "../hook/use-theme-selector-state.hook";
import type { ThemeSelectorProps } from "../types/theme-selector.types";

/**
 * @description Permite buscar, visualizar y seleccionar temas disponibles.
 * Prioriza el tema seleccionado sin perder los demas temas filtrados.
 * @param props Propiedades de la molecula.
 * @param props.label Clave del titulo del panel.
 * @param props.placeholder Clave del placeholder de busqueda.
 * @param props.className Clases adicionales configuradas.
 * @param props.showDescriptions Indica si muestra descripciones.
 * @param props.translations Claves de traduccion configurables.
 * @returns Selector de temas listo para renderizar.
 * @example
 * <ThemeSelector
 *   label="theme.title"
 *   placeholder="theme.searchPlaceholder"
 *   showDescriptions={true}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeSelector: FC<ThemeSelectorProps> = ({
  label = "theme.title",
  placeholder = "theme.searchPlaceholder",
  className = "",
  showDescriptions = true,
  translations,
}): JSX.Element => {
  const { theme, themes, setTheme } = useTheme();
  const { t } = useLanguage();

  const { isOpen, search, handleToggle, handleClose, handleSearchChange } =
    useThemeSelectorState();

  const messages = translateThemeSelectorMessages(
    translations,
    label,
    placeholder,
    t,
  );

  const visibleThemes = useMemo(
    (): readonly (typeof themes)[number][] =>
      prioritizeSelectedTheme(filterThemes(themes, search, t), theme),
    [search, t, theme, themes],
  );

  return (
    <View className={`w-full ${className}`.trim()}>
      <ThemeSelectorTrigger
        ariaLabel={messages.select}
        isOpen={isOpen}
        onToggle={handleToggle}
        selectedLabel={messages.selected}
        theme={theme}
      />

      {isOpen && (
        <ThemeSelectorPanel
          label={messages.title}
          onClose={handleClose}
          onSearchChange={handleSearchChange}
          onSelectTheme={setTheme}
          search={search}
          selectedTheme={theme.name}
          showDescriptions={showDescriptions}
          showSearch={themes.length > SEARCH_THRESHOLD}
          themes={visibleThemes}
          totalThemes={themes.length}
          translations={messages}
        />
      )}
    </View>
  );
};

export default ThemeSelector;
