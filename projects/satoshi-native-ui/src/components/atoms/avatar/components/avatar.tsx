import { memo } from "react";
import type { FC, JSX } from "react";
import { Avatar as PaperAvatar } from "react-native-paper";
import { useTheme } from "@libs/hooks";
import { getVariantColor } from "@libs/utils";
import { getAvatarClasses } from "../utils/get-avatar-classes.util";
import type { AvatarProps } from "../types/avatar.types";

/**
 * @description Renderiza el avatar con las propiedades ya resueltas sobre
 * el nucleo de react-native-paper.
 * @param props Propiedades del avatar.
 * @param props.initials Iniciales mostradas sin imagen.
 * @param props.src Ruta de la imagen del avatar.
 * @param props.alt Texto alternativo de la imagen.
 * @param props.variant Variante visual del avatar.
 * @param props.className Clases adicionales configuradas.
 * @returns Avatar listo para renderizar.
 * @author Steveen Cues
 * @version 2.0.0
 */
const AvatarView = memo(function AvatarView({
  initials,
  src,
  alt,
  variant,
  className,
}: Required<Pick<AvatarProps, "variant" | "className">> &
  Pick<AvatarProps, "initials" | "src" | "alt">): JSX.Element {
  const { paperTheme: theme } = useTheme();

  if (typeof src === "string" && src.length > 0) {
    return (
      <PaperAvatar.Image
        accessibilityLabel={alt}
        className={`${getAvatarClasses({ variant })} ${className}`.trim()}
        size={48}
        source={{ uri: src }}
        theme={theme}
      />
    );
  }

  return (
    <PaperAvatar.Text
      accessibilityLabel={alt}
      className={`${getAvatarClasses({ variant })} ${className}`.trim()}
      label={initials ?? ""}
      size={48}
      style={{ backgroundColor: getVariantColor(theme, variant) }}
      theme={theme}
    />
  );
});

/**
 * @description Imagen o iniciales de usuario construidas sobre el nucleo
 * de react-native-paper con placeholder y variantes.
 * @param props Propiedades del avatar.
 * @param props.initials Iniciales mostradas sin imagen.
 * @param props.src Ruta de la imagen del avatar.
 * @param props.alt Texto alternativo de la imagen.
 * @param props.variant Variante visual del avatar.
 * @param props.className Clases adicionales configuradas.
 * @returns Avatar listo para renderizar.
 * @example
 * <Avatar initials="SC" variant="primary" />
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Avatar: FC<AvatarProps> = memo(
  function Avatar(props): JSX.Element {
    return (
      <AvatarView
        alt={props.alt}
        className={props.className ?? ""}
        initials={props.initials}
        src={props.src}
        variant={props.variant ?? "neutral"}
      />
    );
  },
);

export default Avatar;
