import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { RadioButton as PaperRadioButton } from "react-native-paper";
import { useTheme } from "@libs/hooks";
import { getVariantColor } from "@libs/utils";
import { getRadioClasses } from "../utils/get-radio-classes.util";
import type { RadioProps } from "../types/radio.types";

/**
 * @description Renderiza el boton de opcion con las propiedades resueltas
 * sobre el nucleo de react-native-paper.
 * @param props Propiedades del radio.
 * @param props.name Nombre del grupo de opciones.
 * @param props.value Valor de la opcion.
 * @param props.variant Variante visual del radio.
 * @param props.size Tamano del radio.
 * @param props.isChecked Estado marcado del radio.
 * @param props.disabled Indica si el radio esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del radio.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar la seleccion.
 * @returns Radio listo para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const RadioView = memo(function RadioView({
  name,
  value,
  variant,
  size,
  isChecked,
  disabled,
  ariaLabel,
  className,
  onChange,
}: Required<
  Pick<
    RadioProps,
    "name" | "variant" | "size" | "isChecked" | "disabled" | "className"
  >
> &
  Pick<RadioProps, "value" | "ariaLabel" | "onChange">): JSX.Element {
  const { paperTheme: theme } = useTheme();

  const handleChange = useCallback((): void => {
    onChange?.(value ?? "");
  }, [onChange, value]);

  return (
    <PaperRadioButton.Android
      accessibilityLabel={ariaLabel}
      className={`${getRadioClasses({ size, variant })} ${className}`.trim()}
      color={getVariantColor(theme, variant)}
      disabled={disabled}
      onPress={handleChange}
      status={isChecked ? "checked" : "unchecked"}
      testID={`radio-${name}`}
      theme={theme}
      value={value ?? ""}
    />
  );
});

/**
 * @description Boton de opcion construido sobre el nucleo de
 * react-native-paper con variantes y tamanos.
 * @param props Propiedades del radio.
 * @param props.name Nombre del grupo de opciones.
 * @param props.value Valor de la opcion.
 * @param props.isChecked Estado marcado del radio.
 * @param props.disabled Indica si el radio esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del radio.
 * @param props.onChange Callback ejecutado al cambiar la seleccion.
 * @param props.variant Variante visual del radio.
 * @param props.size Tamano del radio.
 * @param props.className Clases adicionales configuradas.
 * @returns Radio listo para renderizar.
 * @example
 * <Radio name="plan" value="pro" ariaLabel="Plan pro" onChange={setPlan} />
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Radio: FC<RadioProps> = memo(function Radio(props): JSX.Element {
  return (
    <RadioView
      ariaLabel={props.ariaLabel}
      className={props.className ?? ""}
      disabled={props.disabled ?? false}
      isChecked={props.isChecked ?? false}
      name={props.name}
      onChange={props.onChange}
      size={props.size ?? "md"}
      value={props.value}
      variant={props.variant ?? "primary"}
    />
  );
});

export default Radio;
