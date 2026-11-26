import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text, View } from "react-native";
import { ThemeSelectorList } from "./theme-selector-list";
import { ThemeSelectorSearch } from "./theme-selector-search";
import type { ThemeSelectorPanelTranslations } from "../types/theme-selector.types";
import type { AppTheme } from "@libs";

/**
 * @description Define las propiedades del panel desplegable de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSelectorPanelProps {
  readonly themes: readonly AppTheme[];
  readonly totalThemes: number;
  readonly selectedTheme: string;
  readonly search: string;
  readonly showSearch: boolean;
  readonly label: string;
  readonly showDescriptions: boolean;
  readonly translations: ThemeSelectorPanelTranslations;
  readonly onSearchChange: (value: string) => void;
  readonly onSelectTheme: (themeName: string) => void;
  readonly onClose: () => void;
}

/**
 * @description Renderiza el panel desplegable para seleccionar temas.
 * @param props Propiedades del panel.
 * @param props.themes Temas visibles.
 * @param props.totalThemes Total de temas disponibles.
 * @param props.selectedTheme Nombre del tema seleccionado.
 * @param props.search Texto de busqueda.
 * @param props.showSearch Indica si muestra la busqueda.
 * @param props.label Etiqueta accesible de la lista.
 * @param props.showDescriptions Indica si muestra descripciones.
 * @param props.translations Mensajes traducidos del panel.
 * @param props.onSearchChange Accion de cambio de busqueda.
 * @param props.onSelectTheme Accion de seleccion de tema.
 * @param props.onClose Accion de cierre del panel.
 * @returns Panel de temas listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ThemeSelectorPanelView = memo(function ThemeSelectorPanelView({
  themes,
  totalThemes,
  selectedTheme,
  search,
  showSearch,
  label,
  showDescriptions,
  translations,
  onSearchChange,
  onSelectTheme,
  onClose,
}: ThemeSelectorPanelProps): JSX.Element {
  const handleClose = useCallback((): void => {
    onClose();
  }, [onClose]);

  return (
    <View className="mt-2 w-full overflow-hidden rounded-2xl border border-base-300 bg-base-100">
      <View className="flex-row shrink-0 items-center justify-between gap-2 border-b border-base-300 p-3">
        <Text className="text-xs font-semibold uppercase tracking-wider text-base-content/60">
          {translations.title}
        </Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={translations.close}
          className="rounded-full p-1"
          onPress={handleClose}
        >
          <Text aria-hidden={true} className="text-sm">
            {"\u00D7"}
          </Text>
        </Pressable>
      </View>

      {showSearch && (
        <View className="shrink-0 p-3 pt-1">
          <ThemeSelectorSearch
            onChange={onSearchChange}
            placeholder={translations.searchPlaceholder}
            value={search}
          />
        </View>
      )}

      <ThemeSelectorList
        emptyMessage={translations.empty}
        label={label}
        onSelect={onSelectTheme}
        selectedTheme={selectedTheme}
        showDescriptions={showDescriptions}
        themes={themes}
      />

      <View className="shrink-0 border-t border-base-300 px-3 py-2">
        <Text className="text-xs text-base-content/50">
          {themes.length.toString()} {translations.of} {totalThemes.toString()}{" "}
          {translations.results}
        </Text>
      </View>
    </View>
  );
});

/**
 * @description Panel accesible de temas con titulo, cierre, busqueda
 * opcional y contador de resultados.
 * @param props Propiedades del panel.
 * @returns Panel de temas listo para renderizar.
 * @example
 * <ThemeSelectorPanel
 *   themes={themes}
 *   totalThemes={themes.length}
 *   selectedTheme={theme.name}
 *   search={search}
 *   showSearch={themes.length > 5}
 *   label={t("theme.title")}
 *   showDescriptions={true}
 *   translations={messages}
 *   onSearchChange={setSearch}
 *   onSelectTheme={setTheme}
 *   onClose={close}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeSelectorPanel: FC<ThemeSelectorPanelProps> =
  function ThemeSelectorPanel(props): JSX.Element {
    return (
      <ThemeSelectorPanelView
        label={props.label}
        onClose={props.onClose}
        onSearchChange={props.onSearchChange}
        onSelectTheme={props.onSelectTheme}
        search={props.search}
        selectedTheme={props.selectedTheme}
        showDescriptions={props.showDescriptions}
        showSearch={props.showSearch}
        themes={props.themes}
        totalThemes={props.totalThemes}
        translations={props.translations}
      />
    );
  };

export default ThemeSelectorPanel;
