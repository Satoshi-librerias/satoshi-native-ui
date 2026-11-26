import type { FC, JSX } from "react";
import { View } from "react-native";
import { NavigationLink } from "./navigation-link";
import type { NavigationProps } from "../types/navigation.types";

/**
 * @description Barra de navegacion configurable con enlaces traducidos.
 * Se renderiza en horizontal en escritorio y en vertical en menus moviles.
 * @example
 * <Navigation
 *   items={[
 *     { label: t("navigation.home"), href: "/" },
 *     { label: t("navigation.about"), href: "/about" },
 *   ]}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Navigation: FC<NavigationProps> = ({
  items,
  ariaLabel = "Main navigation",
  orientation = "horizontal",
  className = "",
  onItemPress,
}): JSX.Element => {
  if (items.length === 0) {
    return <View accessibilityLabel={ariaLabel} className={className} />;
  }

  return (
    <View accessibilityLabel={ariaLabel} className={className}>
      <View
        className={
          orientation === "horizontal"
            ? "flex-row items-center gap-1"
            : "flex-col items-stretch gap-1"
        }
      >
        {items.map((item) => (
          <NavigationLink
            item={item}
            key={`${item.label}-${item.href}`}
            onPress={onItemPress}
          />
        ))}
      </View>
    </View>
  );
};

export default Navigation;
