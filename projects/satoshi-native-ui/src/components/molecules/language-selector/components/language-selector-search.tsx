import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { TextInput } from "react-native";
import type { LanguageSelectorSearchProps } from "../types/language-selector.types";

/**
 * @description Renderiza el campo de busqueda de idiomas.
 * @param props Propiedades del buscador.
 * @param props.value Valor controlado de la busqueda.
 * @param props.onChange Accion de cambio.
 * @param props.placeholder Texto de ayuda del campo.
 * @returns Buscador listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const LanguageSelectorSearchView = memo(function LanguageSelectorSearchView({
  value,
  onChange,
  placeholder,
}: LanguageSelectorSearchProps): JSX.Element {
  const handleChange = useCallback(
    (text: string): void => {
      onChange(text);
    },
    [onChange],
  );

  return (
    <TextInput
      accessibilityLabel={placeholder}
      className="w-full rounded-xl border border-base-300 bg-base-100 px-3 py-2 text-sm"
      onChangeText={handleChange}
      placeholder={placeholder}
      value={value}
    />
  );
});

/**
 * @description Buscador accesible de idiomas por codigo o nombre.
 * @param props Propiedades del buscador.
 * @param props.value Valor controlado de la busqueda.
 * @param props.onChange Accion de cambio.
 * @param props.placeholder Texto de ayuda del campo.
 * @returns Buscador listo para renderizar.
 * @example
 * <LanguageSelectorSearch
 *   value={query}
 *   onChange={setQuery}
 *   placeholder={t("language.searchPlaceholder")}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LanguageSelectorSearch: FC<LanguageSelectorSearchProps> =
  function LanguageSelectorSearch(props): JSX.Element {
    return (
      <LanguageSelectorSearchView
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
    );
  };

export default LanguageSelectorSearch;
