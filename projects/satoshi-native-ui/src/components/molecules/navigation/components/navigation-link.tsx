import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Linking, Pressable, Text } from "react-native";
import { isExternalLink } from "../utils/is-external-link.util";
import type { NavigationLinkProps } from "../types/navigation.types";

/**
 * @description Renderiza un enlace individual de navegacion con soporte
 * para enlaces externos y atributos de seguridad.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const NavigationLink: FC<NavigationLinkProps> = memo(
  function NavigationLink({ item, onPress }): JSX.Element {
    const external = isExternalLink(item);

    const handlePress = useCallback((): void => {
      if (onPress !== undefined) {
        onPress(item);
        return;
      }

      if (external) {
        void Linking.openURL(item.href);
      }
    }, [external, item, onPress]);

    return (
      <Pressable
        accessibilityRole="link"
        className="rounded-lg px-3 py-2"
        onPress={handlePress}
      >
        <Text className="text-sm font-medium">{item.label}</Text>
      </Pressable>
    );
  },
);

export default NavigationLink;
