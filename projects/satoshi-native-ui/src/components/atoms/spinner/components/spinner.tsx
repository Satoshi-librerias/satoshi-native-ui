import { memo } from "react";
import type { FC, JSX } from "react";
import { ActivityIndicator as PaperActivityIndicator } from "react-native-paper";
import { useTheme } from "@libs/hooks";
import { getVariantColor } from "@libs/utils";
import type { SpinnerProps } from "../types/spinner.types";

/**
 * @description Renderiza el indicador de carga con las propiedades
 * resueltas sobre el nucleo de react-native-paper.
 * @param props Propiedades del spinner.
 * @param props.variant Variante visual del spinner.
 * @param props.size Tamano del spinner.
 * @param props.ariaLabel Etiqueta accesible del spinner.
 * @param props.className Clases adicionales configuradas.
 * @returns Spinner listo para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const SpinnerView = memo(function SpinnerView({
  variant,
  size,
  ariaLabel,
  className,
}: Required<Pick<SpinnerProps, "variant" | "size" | "className">> &
  Pick<SpinnerProps, "ariaLabel">): JSX.Element {
  const { paperTheme: theme } = useTheme();

  return (
    <PaperActivityIndicator
      accessibilityLabel={ariaLabel}
      animating={true}
      className={className}
      color={getVariantColor(theme, variant)}
      size={size === "lg" ? "large" : "small"}
      theme={theme}
    />
  );
});

/**
 * @description Indicador de carga construido sobre el nucleo de
 * react-native-paper con variantes y tamanos.
 * @param props Propiedades del spinner.
 * @param props.variant Variante visual del spinner.
 * @param props.size Tamano del spinner.
 * @param props.ariaLabel Etiqueta accesible del spinner.
 * @param props.className Clases adicionales configuradas.
 * @returns Spinner listo para renderizar.
 * @example
 * <Spinner size="lg" ariaLabel="Cargando" />
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Spinner: FC<SpinnerProps> = memo(
  function Spinner(props): JSX.Element {
    return (
      <SpinnerView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        size={props.size ?? "md"}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default Spinner;
