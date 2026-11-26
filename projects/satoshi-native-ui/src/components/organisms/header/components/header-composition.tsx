import type { FC, JSX } from "react";
import { View } from "react-native";
import { Container } from "@components/atoms";
import { getHeaderSurfaceClasses } from "../utils/get-header-surface-classes.util";
import type {
  HeaderActionsProps,
  HeaderBrandProps,
  HeaderCompositionProps,
} from "../types/header.types";

/**
 * @description Seccion principal del Header por composicion. Agrupa el
 * logo, la navegacion y otros elementos de marca.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const HeaderBrand: FC<HeaderBrandProps> = ({
  children,
  className = "",
}): JSX.Element => {
  return (
    <View className={`flex flex-row items-center gap-2 ${className}`.trim()}>
      {children}
    </View>
  );
};

/**
 * @description Seccion de acciones del Header por composicion. Agrupa los
 * selectores y acciones personalizadas alineados a la derecha.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const HeaderActions: FC<HeaderActionsProps> = ({
  children,
  className = "",
}): JSX.Element => {
  return (
    <View className={`flex flex-row items-center gap-2 ${className}`.trim()}>
      {children}
    </View>
  );
};

/**
 * @description Encabezado alternativo basado en composicion. Permite
 * combinar libremente el logo, la navegacion y otros componentes sin
 * duplicar la logica del Header generico.
 * @example
 * <HeaderComposition>
 *   <HeaderBrand>
 *     <Logo src={logo} alt={t("common.brandAlt")} />
 *     <Navigation items={items} />
 *   </HeaderBrand>
 *   <HeaderActions>{actions}</HeaderActions>
 * </HeaderComposition>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const HeaderComposition: FC<HeaderCompositionProps> = ({
  children,
  className = "",
  position = "static",
  surface = "solid",
}): JSX.Element => {
  return (
    <View
      className={`${getHeaderSurfaceClasses(position, surface)} ${className}`.trim()}
    >
      <Container
        maxWidth="xl"
        align="between"
        padding="md"
        gap="sm"
        className="flex-wrap"
      >
        {children}
      </Container>
    </View>
  );
};
