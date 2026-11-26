import { memo } from "react";
import type { FC, JSX } from "react";
import { Text, View } from "react-native";
import { LanguageSelectorItem } from "./language-selector-item";
import type { LanguageSelectorListProps } from "../types/language-selector.types";

/**
 * @description Renderiza la lista de idiomas disponibles.
 * @param props Propiedades de la lista.
 * @param props.languages Idiomas disponibles.
 * @param props.selectedLanguage Idioma seleccionado.
 * @param props.onSelect Accion de seleccion.
 * @param props.listLabel Etiqueta accesible de la lista.
 * @param props.emptyMessage Mensaje cuando no hay idiomas.
 * @returns Lista de idiomas lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const LanguageSelectorListView = memo(function LanguageSelectorListView({
  languages,
  selectedLanguage,
  onSelect,
  listLabel,
  emptyMessage,
}: LanguageSelectorListProps): JSX.Element {
  if (languages.length === 0) {
    return (
      <Text
        accessibilityRole="text"
        className="px-4 py-6 text-center text-sm text-base-content/60"
      >
        {emptyMessage}
      </Text>
    );
  }

  return (
    <View accessibilityLabel={listLabel} className="max-h-72 gap-1 p-1">
      {languages.map((availableLanguage: string) => (
        <LanguageSelectorItem
          isSelected={availableLanguage === selectedLanguage}
          key={availableLanguage}
          language={availableLanguage}
          onSelect={onSelect}
          selectedLabel={listLabel}
        />
      ))}
    </View>
  );
});

/**
 * @description Lista accesible de idiomas con estado vacio traducido.
 * @param props Propiedades de la lista.
 * @param props.languages Idiomas disponibles.
 * @param props.selectedLanguage Idioma seleccionado.
 * @param props.onSelect Accion de seleccion.
 * @param props.listLabel Etiqueta accesible de la lista.
 * @param props.emptyMessage Mensaje cuando no hay idiomas.
 * @returns Lista de idiomas lista para renderizar.
 * @example
 * <LanguageSelectorList
 *   languages={["es", "en"]}
 *   selectedLanguage="es"
 *   onSelect={setLanguage}
 *   listLabel={t("language.listLabel")}
 *   emptyMessage={t("language.empty")}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LanguageSelectorList: FC<LanguageSelectorListProps> =
  function LanguageSelectorList(props): JSX.Element {
    return (
      <LanguageSelectorListView
        emptyMessage={props.emptyMessage}
        languages={props.languages}
        listLabel={props.listLabel}
        onSelect={props.onSelect}
        selectedLanguage={props.selectedLanguage}
      />
    );
  };

export default LanguageSelectorList;
