import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Text, TextInput, View } from "react-native";
import type { ThemeSelectorSearchProps } from "../types/theme-selector.types";

/**
 * @description Renderiza el campo de busqueda de temas.
 * @param props Propiedades del buscador.
 * @param props.value Valor controlado de la busqueda.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.onChange Accion de cambio.
 * @returns Buscador listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ThemeSelectorSearchView = memo(function ThemeSelectorSearchView({
  value,
  placeholder,
  onChange,
}: ThemeSelectorSearchProps): JSX.Element {
  const handleChange = useCallback(
    (text: string): void => {
      onChange(text);
    },
    [onChange],
  );

  return (
    <View className="w-full flex-row items-center gap-2 rounded-xl border border-base-300 bg-base-100 px-3 py-2">
      <Text aria-hidden={true} className="text-sm opacity-60">
        {"\u2315"}
      </Text>

      <TextInput
        accessibilityLabel={placeholder}
        className="min-w-0 flex-1 text-sm"
        onChangeText={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
});

/**
 * @description Buscador accesible de temas por nombre o descripcion.
 * @param props Propiedades del buscador.
 * @param props.value Valor controlado de la busqueda.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.onChange Accion de cambio.
 * @returns Buscador listo para renderizar.
 * @example
 * <ThemeSelectorSearch
 *   value={search}
 *   placeholder={t("theme.searchPlaceholder")}
 *   onChange={setSearch}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeSelectorSearch: FC<ThemeSelectorSearchProps> =
  function ThemeSelectorSearch(props): JSX.Element {
    return (
      <ThemeSelectorSearchView
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
    );
  };

export default ThemeSelectorSearch;
