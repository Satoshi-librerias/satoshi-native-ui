import { memo } from "react";
import type { FC, JSX } from "react";
import { ProgressBar as PaperProgressBar } from "react-native-paper";
import { useTheme } from "@libs/hooks";
import { getVariantColor } from "@libs/utils";
import { PROGRESS_DEFAULT_MAX } from "../constants/progress.constants";
import type { ProgressProps } from "../types/progress.types";

/**
 * @description Renderiza la barra de progreso con las propiedades
 * resueltas sobre el nucleo de react-native-paper.
 * @param props Propiedades del progress.
 * @param props.value Valor actual de progreso.
 * @param props.max Valor maximo de progreso.
 * @param props.variant Variante visual del progress.
 * @param props.ariaLabel Etiqueta accesible del progress.
 * @param props.className Clases adicionales configuradas.
 * @returns Barra de progreso lista para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const ProgressView = memo(function ProgressView({
  value,
  max,
  variant,
  ariaLabel,
  className,
}: Required<Pick<ProgressProps, "max" | "variant" | "className">> &
  Pick<ProgressProps, "value" | "ariaLabel">): JSX.Element {
  const { paperTheme: theme } = useTheme();

  const progress =
    value === undefined ? 0 : Math.min(1, Math.max(0, value / max));

  return (
    <PaperProgressBar
      accessibilityLabel={ariaLabel}
      className={className}
      color={getVariantColor(theme, variant)}
      progress={progress}
      theme={theme}
    />
  );
});

/**
 * @description Barra de progreso construida sobre el nucleo de
 * react-native-paper con variantes semanticas.
 * @param props Propiedades del progress.
 * @param props.value Valor actual de progreso.
 * @param props.max Valor maximo de progreso.
 * @param props.variant Variante visual del progress.
 * @param props.ariaLabel Etiqueta accesible del progress.
 * @param props.className Clases adicionales configuradas.
 * @returns Barra de progreso lista para renderizar.
 * @example
 * <Progress value={60} max={100} variant="success" ariaLabel="Carga" />
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Progress: FC<ProgressProps> = memo(
  function Progress(props): JSX.Element {
    return (
      <ProgressView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        max={props.max ?? PROGRESS_DEFAULT_MAX}
        value={props.value}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default Progress;
