import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { TextInput as PaperTextInput } from "react-native-paper";
import { useTheme } from "@libs/hooks";
import { getInputClasses } from "../utils/get-input-classes.util";
import type { InputProps } from "../types/input.types";

/**
 * @description Define los tamanos de fuente del campo por tamano en
 * unidades de densidad.
 * @author Steveen Cues
 * @version 2.0.0
 */
const INPUT_FONT_SIZE_XS = 12;
const INPUT_FONT_SIZE_SM = 14;
const INPUT_FONT_SIZE_MD = 16;
const INPUT_FONT_SIZE_LG = 18;

/**
 * @description Define el tamano de fuente por tamano del campo.
 * @author Steveen Cues
 * @version 2.0.0
 */
const INPUT_FONT_SIZE: Record<NonNullable<InputProps["size"]>, number> = {
  xs: INPUT_FONT_SIZE_XS,
  sm: INPUT_FONT_SIZE_SM,
  md: INPUT_FONT_SIZE_MD,
  lg: INPUT_FONT_SIZE_LG,
};

/**
 * @description Define el tipo de teclado por tipo de campo.
 * @author Steveen Cues
 * @version 2.0.0
 */
const INPUT_KEYBOARD_TYPE: Record<
  string,
  "default" | "email-address" | "number-pad"
> = {
  text: "default",
  email: "email-address",
  number: "number-pad",
  password: "default",
  search: "default",
};

/**
 * @description Define el modo de Paper por variante del campo.
 * @author Steveen Cues
 * @version 2.0.0
 */
const INPUT_MODE_BY_VARIANT: Record<
  NonNullable<InputProps["variant"]>,
  "flat" | "outlined"
> = {
  primary: "outlined",
  secondary: "outlined",
  accent: "outlined",
  neutral: "outlined",
  ghost: "flat",
};

/**
 * @description Renderiza el campo de texto con las propiedades resueltas
 * sobre el nucleo de react-native-paper.
 * @param props Propiedades del campo.
 * @param props.value Valor controlado del campo.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.type Tipo del campo.
 * @param props.variant Variante visual del campo.
 * @param props.size Tamano del campo.
 * @param props.disabled Indica si el campo esta deshabilitado.
 * @param props.required Indica si el campo es obligatorio.
 * @param props.ariaLabel Etiqueta accesible del campo.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el valor.
 * @returns Campo listo para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const InputView = memo(function InputView({
  value,
  placeholder,
  type,
  variant,
  size,
  disabled,
  ariaLabel,
  className,
  onChange,
}: Required<
  Pick<InputProps, "type" | "variant" | "size" | "disabled" | "className">
> &
  Pick<
    InputProps,
    "value" | "placeholder" | "ariaLabel" | "onChange"
  >): JSX.Element {
  const { paperTheme: theme } = useTheme();

  const handleChange = useCallback(
    (text: string): void => {
      onChange?.(text);
    },
    [onChange],
  );

  const mode = INPUT_MODE_BY_VARIANT[variant];

  return (
    <PaperTextInput
      accessibilityLabel={ariaLabel}
      className={`${getInputClasses({ size, variant })} ${className}`.trim()}
      contentStyle={{ fontSize: INPUT_FONT_SIZE[size] }}
      disabled={disabled}
      keyboardType={INPUT_KEYBOARD_TYPE[type] ?? "default"}
      mode={mode}
      onChangeText={handleChange}
      placeholder={placeholder}
      secureTextEntry={type === "password"}
      theme={theme}
      value={value}
    />
  );
});

/**
 * @description Campo de texto construido sobre el nucleo de
 * react-native-paper con variantes y tamanos.
 * @param props Propiedades del campo.
 * @param props.value Valor controlado del campo.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.type Tipo del campo (text, email, password, number).
 * @param props.variant Variante visual del campo.
 * @param props.size Tamano del campo.
 * @param props.disabled Indica si el campo esta deshabilitado.
 * @param props.required Indica si el campo es obligatorio.
 * @param props.ariaLabel Etiqueta accesible del campo.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el valor.
 * @returns Campo listo para renderizar.
 * @example
 * <Input placeholder="Nombre" variant="primary" onChange={setValue} />
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Input: FC<InputProps> = memo(function Input(props): JSX.Element {
  return (
    <InputView
      ariaLabel={props.ariaLabel}
      className={props.className ?? ""}
      disabled={props.disabled ?? false}
      onChange={props.onChange}
      placeholder={props.placeholder}
      size={props.size ?? "md"}
      type={props.type ?? "text"}
      value={props.value}
      variant={props.variant ?? "primary"}
    />
  );
});

export default Input;
