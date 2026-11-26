import type { FC, JSX } from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import {
  getIconClasses,
  resolveIconId,
  resolveIconSize,
} from "../utils/get-icon-href.util";
import type { IconProps } from "../types/icon.types";

/**
 * @description Icono adaptable al sprite de iconografia del proyecto.
 * En web renderiza un SVG con referencia al sprite; en nativo renderiza un
 * contenedor accesible con el identificador del icono para que el proyecto
 * consumidor resuelva el glifo con react-native-svg.
 * @example
 * <Icon name="menu" size={24} title={t("common.openMenu")} />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Icon: FC<IconProps> = ({
  name,
  size,
  className = "",
  title,
}): JSX.Element => {
  const classes = getIconClasses(className);
  const iconSize = resolveIconSize(size);

  return (
    <View
      accessibilityLabel={title}
      accessibilityRole={title === undefined ? undefined : "image"}
      className={classes}
    >
      <Svg height={iconSize} width={iconSize} viewBox="0 0 24 24">
        <Path d="M0 0h24v24H0z" fill="none" testID={resolveIconId(name)} />
      </Svg>
    </View>
  );
};

export default Icon;
