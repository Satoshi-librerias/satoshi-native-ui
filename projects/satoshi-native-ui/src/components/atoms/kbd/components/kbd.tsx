import { memo } from "react";
import type { FC, JSX } from "react";
import { Text, View } from "react-native";
import { getKbdClasses } from "../utils/get-kbd-classes.util";
import type { KbdProps } from "../types/kbd.types";

/**
 * @description Renderiza la tecla con las propiedades resueltas.
 * @param props Propiedades del kbd.
 * @param props.children Contenido del kbd.
 * @param props.variant Variante visual del kbd.
 * @param props.size Tamano del kbd.
 * @param props.className Clases adicionales configuradas.
 * @returns Tecla lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const KbdView = memo(function KbdView({
  children,
  variant,
  size,
  className,
}: Required<Pick<KbdProps, "variant" | "size" | "className">> &
  Pick<KbdProps, "children">): JSX.Element {
  const classes = getKbdClasses({ variant, size });

  return (
    <View className={`${classes} ${className}`.trim()}>
      <Text>{children}</Text>
    </View>
  );
});

/**
 * @description Tecla de atajo con variantes y tamanos y clases responsive
 * de NativeWind.
 * @param props Propiedades del kbd.
 * @param props.children Contenido del kbd.
 * @param props.variant Variante visual del kbd.
 * @param props.size Tamano del kbd.
 * @param props.className Clases adicionales configuradas.
 * @returns Tecla lista para renderizar.
 * @example
 * <Kbd size="sm">Ctrl + S</Kbd>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Kbd: FC<KbdProps> = memo(function Kbd(props): JSX.Element {
  return (
    <KbdView
      className={props.className ?? ""}
      size={props.size ?? "md"}
      variant={props.variant ?? "neutral"}
    >
      {props.children}
    </KbdView>
  );
});

export default Kbd;
