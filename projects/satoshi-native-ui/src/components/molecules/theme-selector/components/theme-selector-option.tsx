import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text, View } from "react-native";
import { useLanguage } from "@libs";
import type { ThemeSelectorOptionProps } from "../types/theme-selector.types";

/**
 * @description Representa una opcion individual del selector de temas.
 * @param props Propiedades de la opcion.
 * @param props.theme Tema representado.
 * @param props.isSelected Indica si el tema esta seleccionado.
 * @param props.showDescription Indica si muestra la descripcion.
 * @param props.onSelect Accion de seleccion.
 * @returns Opcion de tema lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ThemeSelectorOptionView = memo(function ThemeSelectorOptionView({
  theme,
  isSelected,
  showDescription,
  onSelect,
}: ThemeSelectorOptionProps): JSX.Element {
  const { t } = useLanguage();

  const themeName = t(theme.manifest.name);
  const themeDescription = t(theme.manifest.description);

  const handleSelect = useCallback((): void => {
    onSelect(theme.name);
  }, [onSelect, theme.name]);

  return (
    <Pressable
      accessibilityRole="menuitem"
      accessibilityLabel={themeName}
      accessibilityState={{ selected: isSelected }}
      className={`flex w-full flex-row items-center gap-3 rounded-xl p-2.5 sm:p-3 ${isSelected ? "bg-primary/10" : ""}`}
      onPress={handleSelect}
    >
      <View
        aria-hidden={true}
        className="h-9 w-9 shrink-0 flex-row items-center justify-center gap-1 overflow-hidden rounded-xl border border-base-300 bg-base-100 p-1 sm:h-10 sm:w-10"
      >
        <View className="h-full w-2 rounded-full bg-primary" />
        <View className="h-full w-2 rounded-full bg-secondary" />
        <View className="h-full w-2 rounded-full bg-accent" />
      </View>

      <View className="min-w-0 flex-1">
        <Text numberOfLines={1} className="text-sm font-semibold">
          {themeName}
        </Text>

        {showDescription && (
          <Text
            numberOfLines={1}
            className="mt-0.5 text-xs text-base-content/60"
          >
            {themeDescription}
          </Text>
        )}
      </View>

      {isSelected && (
        <Text aria-hidden={true} className="shrink-0 text-primary">
          {"\u2713"}
        </Text>
      )}
    </Pressable>
  );
});

/**
 * @description Opcion accesible de tema con paleta de muestra, nombre y
 * descripcion traducidos.
 * @param props Propiedades de la opcion.
 * @param props.theme Tema representado.
 * @param props.isSelected Indica si el tema esta seleccionado.
 * @param props.showDescription Indica si muestra la descripcion.
 * @param props.onSelect Accion de seleccion.
 * @returns Opcion de tema lista para renderizar.
 * @example
 * <ThemeSelectorOption
 *   theme={theme}
 *   isSelected={theme.name === "light"}
 *   showDescription={true}
 *   onSelect={setTheme}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeSelectorOption: FC<ThemeSelectorOptionProps> =
  function ThemeSelectorOption(props): JSX.Element {
    return (
      <ThemeSelectorOptionView
        isSelected={props.isSelected}
        onSelect={props.onSelect}
        showDescription={props.showDescription}
        theme={props.theme}
      />
    );
  };

export default ThemeSelectorOption;
