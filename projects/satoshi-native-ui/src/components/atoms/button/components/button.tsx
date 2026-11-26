import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Button as PaperButton, Text } from "react-native-paper";
import { useTheme } from "@libs/hooks";
import { getButtonClasses } from "../utils/get-button-classes.util";
import type { ButtonProps } from "../types/button.types";

/**
 * @description Define los tamanos de fuente del boton por variante de
 * tamano en unidades de densidad.
 * @author Steveen Cues
 * @version 2.0.0
 */
const FONT_SIZE_XS = 12;
const FONT_SIZE_SM = 14;
const FONT_SIZE_MD = 16;
const FONT_SIZE_LG = 18;

/**
 * @description Define el tamano de contenido por variante de tamano.
 * @author Steveen Cues
 * @version 2.0.0
 */
const BUTTON_LABEL_STYLE: Record<
  NonNullable<ButtonProps["size"]>,
  { fontSize: number }
> = {
  xs: { fontSize: FONT_SIZE_XS },
  sm: { fontSize: FONT_SIZE_SM },
  md: { fontSize: FONT_SIZE_MD },
  lg: { fontSize: FONT_SIZE_LG },
};

/**
 * @description Define el modo de Paper por variante del boton.
 * @author Steveen Cues
 * @version 2.0.0
 */
const BUTTON_MODE_BY_VARIANT: Record<
  NonNullable<ButtonProps["variant"]>,
  "contained" | "outlined" | "text"
> = {
  primary: "contained",
  secondary: "contained",
  accent: "contained",
  neutral: "contained",
  ghost: "text",
  link: "text",
};

/**
 * @description Renderiza el boton con las propiedades ya resueltas sobre el
 * nucleo de react-native-paper.
 * @param props Propiedades del boton.
 * @param props.children Contenido del boton.
 * @param props.variant Variante visual del boton.
 * @param props.size Tamano del boton.
 * @param props.disabled Indica si el boton esta deshabilitado.
 * @param props.isLoading Indica si muestra el indicador de carga.
 * @param props.isFullWidth Indica si ocupa todo el ancho disponible.
 * @param props.isOutlined Indica si usa el estilo con borde.
 * @param props.ariaLabel Etiqueta accesible del boton.
 * @param props.className Clases adicionales configuradas.
 * @param props.onClick Callback ejecutado al hacer clic.
 * @returns Boton listo para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const ButtonView = memo(function ButtonView({
  children,
  variant,
  size,
  disabled,
  isLoading,
  isFullWidth,
  isOutlined,
  ariaLabel,
  className,
  onClick,
}: Required<
  Pick<
    ButtonProps,
    | "variant"
    | "size"
    | "disabled"
    | "isLoading"
    | "isFullWidth"
    | "isOutlined"
    | "className"
  >
> &
  Pick<ButtonProps, "children" | "ariaLabel" | "onClick">): JSX.Element {
  const { paperTheme: theme } = useTheme();

  const isDisabled = disabled || isLoading;

  const handleClick = useCallback((): void => {
    onClick?.();
  }, [onClick]);

  const mode = isOutlined ? "outlined" : BUTTON_MODE_BY_VARIANT[variant];

  return (
    <PaperButton
      accessibilityLabel={ariaLabel}
      className={`${getButtonClasses({
        isFullWidth,
        isLoading: isDisabled,
        isOutlined,
        size,
        variant,
      })} ${isFullWidth ? "w-full" : ""} ${className}`.trim()}
      disabled={isDisabled}
      labelStyle={BUTTON_LABEL_STYLE[size]}
      loading={isLoading}
      mode={mode}
      onPress={handleClick}
      theme={theme}
    >
      <Text>{children}</Text>
    </PaperButton>
  );
});

/**
 * @description Boton reutilizable construido sobre el nucleo de
 * react-native-paper con variantes visuales, tamanos, estado de carga y
 * accesibilidad integrada.
 * @param props Propiedades del boton.
 * @param props.children Contenido del boton.
 * @param props.variant Variante visual del boton.
 * @param props.size Tamano del boton.
 * @param props.disabled Indica si el boton esta deshabilitado.
 * @param props.isLoading Indica si muestra el indicador de carga.
 * @param props.isFullWidth Indica si ocupa todo el ancho disponible.
 * @param props.isOutlined Indica si usa el estilo con borde.
 * @param props.ariaLabel Etiqueta accesible del boton.
 * @param props.className Clases adicionales configuradas.
 * @param props.onClick Callback ejecutado al hacer clic.
 * @returns Boton listo para renderizar.
 * @example
 * <Button variant="primary" size="md" onClick={handleSave}>
 *   {t("common.save")}
 * </Button>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Button: FC<ButtonProps> = memo(
  function Button(props): JSX.Element {
    return (
      <ButtonView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        disabled={props.disabled ?? false}
        isLoading={props.isLoading ?? false}
        isFullWidth={props.isFullWidth ?? false}
        isOutlined={props.isOutlined ?? false}
        onClick={props.onClick}
        size={props.size ?? "md"}
        variant={props.variant ?? "primary"}
      >
        {props.children}
      </ButtonView>
    );
  },
);

export default Button;
