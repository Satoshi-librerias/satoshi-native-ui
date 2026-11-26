import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Switch as PaperSwitch } from "react-native-paper";
import { useTheme } from "@libs/hooks";
import { getVariantColor } from "@libs/utils";
import { getSwitchClasses } from "../utils/get-switch-classes.util";
import type { SwitchProps } from "../types/switch.types";

/**
 * @description Define las escalas visuales del switch por tamano.
 * @author Steveen Cues
 * @version 2.0.0
 */
const SWITCH_SCALE_XS = 0.7;
const SWITCH_SCALE_SM = 0.85;
const SWITCH_SCALE_MD = 1;
const SWITCH_SCALE_LG = 1.2;

/**
 * @description Define la escala visual por tamano del switch.
 * @author Steveen Cues
 * @version 2.0.0
 */
const SWITCH_SCALE: Record<NonNullable<SwitchProps["size"]>, number> = {
  xs: SWITCH_SCALE_XS,
  sm: SWITCH_SCALE_SM,
  md: SWITCH_SCALE_MD,
  lg: SWITCH_SCALE_LG,
};

/**
 * @description Renderiza el interruptor con las propiedades resueltas
 * sobre el nucleo de react-native-paper.
 * @param props Propiedades del switch.
 * @param props.variant Variante visual del switch.
 * @param props.size Tamano del switch.
 * @param props.isChecked Estado activado del switch.
 * @param props.disabled Indica si el switch esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del switch.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el estado.
 * @returns Switch listo para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const SwitchView = memo(function SwitchView({
  variant,
  size,
  isChecked,
  disabled,
  ariaLabel,
  className,
  onChange,
}: Required<
  Pick<SwitchProps, "variant" | "size" | "isChecked" | "disabled" | "className">
> &
  Pick<SwitchProps, "ariaLabel" | "onChange">): JSX.Element {
  const { paperTheme: theme } = useTheme();

  const handleChange = useCallback(
    (nextValue: boolean): void => {
      onChange?.(nextValue);
    },
    [onChange],
  );

  return (
    <PaperSwitch
      accessibilityLabel={ariaLabel}
      className={`${getSwitchClasses({ size, variant })} ${className}`.trim()}
      color={getVariantColor(theme, variant)}
      disabled={disabled}
      onValueChange={handleChange}
      style={{ transform: [{ scale: SWITCH_SCALE[size] }] }}
      theme={theme}
      value={isChecked}
    />
  );
});

/**
 * @description Interruptor de dos estados construido sobre el nucleo de
 * react-native-paper con variantes y tamanos.
 * @param props Propiedades del switch.
 * @param props.isChecked Estado activado del switch.
 * @param props.disabled Indica si el switch esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del switch.
 * @param props.onChange Callback ejecutado al cambiar el estado.
 * @param props.variant Variante visual del switch.
 * @param props.size Tamano del switch.
 * @param props.className Clases adicionales configuradas.
 * @returns Switch listo para renderizar.
 * @example
 * <Switch isChecked={true} onChange={setEnabled} ariaLabel="Notificaciones" />
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Switch: FC<SwitchProps> = memo(
  function Switch(props): JSX.Element {
    return (
      <SwitchView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        disabled={props.disabled ?? false}
        isChecked={props.isChecked ?? false}
        onChange={props.onChange}
        size={props.size ?? "md"}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default Switch;
