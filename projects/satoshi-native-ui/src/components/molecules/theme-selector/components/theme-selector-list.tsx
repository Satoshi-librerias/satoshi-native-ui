import { memo } from "react";
import type { FC, JSX } from "react";
import { Text, View } from "react-native";
import { ThemeSelectorOption } from "./theme-selector-option";
import type { ThemeSelectorListProps } from "../types/theme-selector.types";

/**
 * @description Renderiza la lista desplazable de temas disponibles.
 * @param props Propiedades de la lista.
 * @param props.themes Temas disponibles.
 * @param props.selectedTheme Nombre del tema seleccionado.
 * @param props.showDescriptions Indica si muestra descripciones.
 * @param props.label Etiqueta accesible de la lista.
 * @param props.emptyMessage Mensaje cuando no hay temas.
 * @param props.onSelect Accion de seleccion.
 * @returns Lista de temas lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ThemeSelectorListView = memo(function ThemeSelectorListView({
  themes,
  selectedTheme,
  showDescriptions,
  label,
  emptyMessage,
  onSelect,
}: ThemeSelectorListProps): JSX.Element {
  if (themes.length === 0) {
    return (
      <Text className="p-3 py-8 text-center text-sm text-base-content/60">
        {emptyMessage}
      </Text>
    );
  }

  return (
    <View accessibilityLabel={label} className="gap-1 p-2">
      {themes.map((availableTheme) => (
        <ThemeSelectorOption
          isSelected={availableTheme.name === selectedTheme}
          key={availableTheme.name}
          onSelect={onSelect}
          showDescription={showDescriptions}
          theme={availableTheme}
        />
      ))}
    </View>
  );
});

/**
 * @description Lista accesible de temas con estado vacio traducido.
 * @param props Propiedades de la lista.
 * @param props.themes Temas disponibles.
 * @param props.selectedTheme Nombre del tema seleccionado.
 * @param props.showDescriptions Indica si muestra descripciones.
 * @param props.label Etiqueta accesible de la lista.
 * @param props.emptyMessage Mensaje cuando no hay temas.
 * @param props.onSelect Accion de seleccion.
 * @returns Lista de temas lista para renderizar.
 * @example
 * <ThemeSelectorList
 *   themes={themes}
 *   selectedTheme={theme.name}
 *   showDescriptions={true}
 *   label={t("theme.title")}
 *   emptyMessage={t("theme.empty")}
 *   onSelect={setTheme}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeSelectorList: FC<ThemeSelectorListProps> =
  function ThemeSelectorList(props): JSX.Element {
    return (
      <ThemeSelectorListView
        emptyMessage={props.emptyMessage}
        label={props.label}
        onSelect={props.onSelect}
        selectedTheme={props.selectedTheme}
        showDescriptions={props.showDescriptions}
        themes={props.themes}
      />
    );
  };

export default ThemeSelectorList;
