import type { FC, JSX } from "react";
import { Image, Text, View } from "react-native";
import type { LogoProps } from "../types/logo.types";

/**
 * @description Define el tamano por defecto del logo en pixeles.
 * @author Steveen Cues
 * @version 1.0.0
 */
const LOGO_DEFAULT_SIZE = 48;

/**
 * @description Logo reutilizable que permite configurar la imagen, el texto
 * alternativo y las dimensiones. En web envuelve la imagen en un enlace
 * cuando se configura href mediante el consumidor.
 * @example
 * <Logo src={logo} alt={t("common.brandAlt")} width={48} />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Logo: FC<LogoProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  imageClassName = "",
}): JSX.Element => {
  return (
    <View
      accessibilityLabel={alt}
      accessibilityRole="image"
      className={className}
    >
      <Image
        className={imageClassName}
        source={{ uri: src }}
        style={{
          width: width ?? LOGO_DEFAULT_SIZE,
          height: height ?? LOGO_DEFAULT_SIZE,
        }}
      />
      <Text className="hidden">{alt}</Text>
    </View>
  );
};

export default Logo;
