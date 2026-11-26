import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text, View } from "react-native";
import { Input } from "@components/atoms";
import { getSearchBarClasses } from "../utils/get-search-bar-classes.util";
import { SEARCH_BAR_SUBMIT_LABEL } from "../constants/search-bar.constants";
import type { SearchBarProps } from "../types/search-bar.types";

/**
 * @description Renderiza la barra de busqueda con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.value Valor controlado de la busqueda.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.ariaLabel Etiqueta accesible del campo.
 * @param props.disabled Indica si la barra esta deshabilitada.
 * @param props.variant Variante visual del campo.
 * @param props.size Tamano del campo.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el texto.
 * @param props.onSubmit Callback ejecutado al enviar el formulario.
 * @returns Barra de busqueda lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const SearchBarView = memo(function SearchBarView({
  value,
  placeholder,
  ariaLabel,
  disabled,
  variant,
  size,
  className,
  onChange,
  onSubmit,
}: Required<
  Pick<SearchBarProps, "variant" | "size" | "disabled" | "className">
> &
  Pick<
    SearchBarProps,
    "value" | "placeholder" | "ariaLabel" | "onChange" | "onSubmit"
  >): JSX.Element {
  const handleSubmit = useCallback((): void => {
    onSubmit?.(value ?? "");
  }, [onSubmit, value]);

  return (
    <View accessibilityRole="search" className={className}>
      <View className="w-full flex-row items-center gap-2">
        <View className="flex-1">
          <Input
            ariaLabel={ariaLabel}
            className={getSearchBarClasses({ size })}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            type="search"
            value={value}
            variant={variant}
          />
        </View>

        <Pressable
          accessibilityLabel={ariaLabel ?? SEARCH_BAR_SUBMIT_LABEL}
          accessibilityRole="button"
          className="items-center justify-center rounded-xl bg-primary px-4 py-2"
          disabled={disabled}
          onPress={handleSubmit}
        >
          <Text className="text-primary-content">{"\u2315"}</Text>
        </Pressable>
      </View>
    </View>
  );
});

/**
 * @description Barra de busqueda accesible que compone el atomo Input con
 * boton de envio, variantes y tamanos y clases responsive de NativeWind.
 * @param props Propiedades de la molecula.
 * @param props.value Valor controlado de la busqueda.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.ariaLabel Etiqueta accesible del campo.
 * @param props.disabled Indica si la barra esta deshabilitada.
 * @param props.variant Variante visual del campo.
 * @param props.size Tamano del campo.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el texto.
 * @param props.onSubmit Callback ejecutado al enviar el formulario.
 * @returns Barra de busqueda lista para renderizar.
 * @example
 * <SearchBar
 *   placeholder={t("common.searchPlaceholder")}
 *   onChange={setQuery}
 *   onSubmit={search}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SearchBar: FC<SearchBarProps> = memo(
  function SearchBar(props): JSX.Element {
    return (
      <SearchBarView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        disabled={props.disabled ?? false}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        placeholder={props.placeholder}
        size={props.size ?? "md"}
        value={props.value}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default SearchBar;
