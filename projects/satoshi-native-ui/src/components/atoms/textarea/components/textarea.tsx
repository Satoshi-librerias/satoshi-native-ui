import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { TextInput as PaperTextInput } from "react-native-paper";
import { useTheme } from "@libs/hooks";
import { TEXTAREA_DEFAULT_ROWS } from "../constants/textarea.constants";
import { getTextareaClasses } from "../utils/get-textarea-classes.util";
import type { TextareaProps } from "../types/textarea.types";

/**
 * @description Define los tamanos de fuente del area por tamano en
 * unidades de densidad.
 * @author Steveen Cues
 * @version 2.0.0
 */
const TEXTAREA_FONT_SIZE_XS = 12;
const TEXTAREA_FONT_SIZE_SM = 14;
const TEXTAREA_FONT_SIZE_MD = 16;
const TEXTAREA_FONT_SIZE_LG = 18;

/**
 * @description Define el tamano de fuente por tamano del area.
 * @author Steveen Cues
 * @version 2.0.0
 */
const TEXTAREA_FONT_SIZE: Record<NonNullable<TextareaProps["size"]>, number> = {
  xs: TEXTAREA_FONT_SIZE_XS,
  sm: TEXTAREA_FONT_SIZE_SM,
  md: TEXTAREA_FONT_SIZE_MD,
  lg: TEXTAREA_FONT_SIZE_LG,
};

/**
 * @description Define el modo de Paper por variante del area.
 * @author Steveen Cues
 * @version 2.0.0
 */
const TEXTAREA_MODE_BY_VARIANT: Record<
  NonNullable<TextareaProps["variant"]>,
  "flat" | "outlined"
> = {
  primary: "outlined",
  secondary: "outlined",
  accent: "outlined",
  neutral: "outlined",
  ghost: "flat",
};

/**
 * @description Renderiza el area de texto con las propiedades resueltas
 * sobre el nucleo de react-native-paper.
 * @param props Propiedades del area de texto.
 * @param props.value Valor controlado del area.
 * @param props.placeholder Texto de ayuda del area.
 * @param props.variant Variante visual del area.
 * @param props.size Tamano del area.
 * @param props.rows Numero de filas visibles.
 * @param props.disabled Indica si el area esta deshabilitada.
 * @param props.required Indica si el area es obligatoria.
 * @param props.ariaLabel Etiqueta accesible del area.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el valor.
 * @returns Area de texto lista para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const TextareaView = memo(function TextareaView({
  value,
  placeholder,
  variant,
  size,
  rows,
  disabled,
  ariaLabel,
  className,
  onChange,
}: Required<
  Pick<TextareaProps, "variant" | "size" | "rows" | "disabled" | "className">
> &
  Pick<
    TextareaProps,
    "value" | "placeholder" | "ariaLabel" | "onChange"
  >): JSX.Element {
  const { paperTheme: theme } = useTheme();

  const handleChange = useCallback(
    (text: string): void => {
      onChange?.(text);
    },
    [onChange],
  );

  const mode = TEXTAREA_MODE_BY_VARIANT[variant];

  return (
    <PaperTextInput
      accessibilityLabel={ariaLabel}
      className={`${getTextareaClasses({ size, variant })} ${className}`.trim()}
      contentStyle={{ fontSize: TEXTAREA_FONT_SIZE[size] }}
      disabled={disabled}
      mode={mode}
      multiline={true}
      numberOfLines={rows}
      onChangeText={handleChange}
      placeholder={placeholder}
      theme={theme}
      value={value}
    />
  );
});

/**
 * @description Area de texto multilinea construida sobre el nucleo de
 * react-native-paper con variantes y tamanos.
 * @param props Propiedades del area de texto.
 * @param props.value Valor controlado del area.
 * @param props.placeholder Texto de ayuda del area.
 * @param props.variant Variante visual del area.
 * @param props.size Tamano del area.
 * @param props.rows Numero de filas visibles.
 * @param props.disabled Indica si el area esta deshabilitada.
 * @param props.required Indica si el area es obligatoria.
 * @param props.ariaLabel Etiqueta accesible del area.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el valor.
 * @returns Area de texto lista para renderizar.
 * @example
 * <Textarea rows={4} placeholder="Comentario" onChange={setValue} />
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Textarea: FC<TextareaProps> = memo(
  function Textarea(props): JSX.Element {
    return (
      <TextareaView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        disabled={props.disabled ?? false}
        onChange={props.onChange}
        placeholder={props.placeholder}
        rows={props.rows ?? TEXTAREA_DEFAULT_ROWS}
        size={props.size ?? "md"}
        value={props.value}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default Textarea;
