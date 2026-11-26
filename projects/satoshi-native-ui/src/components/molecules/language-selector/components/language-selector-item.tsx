import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text, View } from "react-native";
import { getLanguageName } from "../utils/filter-languages.util";
import type { LanguageSelectorItemProps } from "../types/language-selector.types";

/**
 * @description Renderiza una opcion individual de idioma.
 * @param props Propiedades de la opcion.
 * @param props.language Codigo del idioma.
 * @param props.isSelected Indica si el idioma esta seleccionado.
 * @param props.onSelect Accion de seleccion.
 * @param props.selectedLabel Etiqueta accesible del estado seleccionado.
 * @returns Opcion de idioma lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const LanguageSelectorItemView = memo(function LanguageSelectorItemView({
  language,
  isSelected,
  onSelect,
  selectedLabel,
}: LanguageSelectorItemProps): JSX.Element {
  const handleSelect = useCallback((): void => {
    onSelect(language);
  }, [language, onSelect]);

  return (
    <Pressable
      accessibilityRole="menuitem"
      accessibilityLabel={`${getLanguageName(language)}${isSelected ? ` (${selectedLabel})` : ""}`}
      accessibilityState={{ selected: isSelected }}
      className={`flex w-full flex-row items-center justify-between gap-3 rounded-lg p-3 ${isSelected ? "bg-primary/10" : ""}`}
      onPress={handleSelect}
    >
      <View className="min-w-0 flex-1">
        <Text numberOfLines={1} className="font-medium">
          {getLanguageName(language)}
        </Text>

        <Text className="text-xs text-base-content/60">{language}</Text>
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
 * @description Opcion accesible de idioma con nombre legible, codigo y
 * marca de seleccion.
 * @param props Propiedades de la opcion.
 * @param props.language Codigo del idioma.
 * @param props.isSelected Indica si el idioma esta seleccionado.
 * @param props.onSelect Accion de seleccion.
 * @param props.selectedLabel Etiqueta accesible del estado seleccionado.
 * @returns Opcion de idioma lista para renderizar.
 * @example
 * <LanguageSelectorItem
 *   language="es"
 *   isSelected={true}
 *   onSelect={setLanguage}
 *   selectedLabel={t("language.selected")}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LanguageSelectorItem: FC<LanguageSelectorItemProps> =
  function LanguageSelectorItem(props): JSX.Element {
    return (
      <LanguageSelectorItemView
        isSelected={props.isSelected}
        language={props.language}
        onSelect={props.onSelect}
        selectedLabel={props.selectedLabel}
      />
    );
  };

export default LanguageSelectorItem;
