import { memo } from "react";
import type { FC, JSX } from "react";
import { View } from "react-native";
import type { ResponsiveMenuPanelProps } from "../types/responsive-menu.types";

/**
 * @description Renderiza el panel colapsable del menu movil.
 * @param props Propiedades del panel.
 * @param props.isOpen Indica si el panel esta visible.
 * @param props.children Contenido del panel.
 * @param props.id Identificador accesible del panel.
 * @returns Panel listo para renderizar o null.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ResponsiveMenuPanelView = memo(function ResponsiveMenuPanelView({
  isOpen,
  children,
  id,
}: ResponsiveMenuPanelProps): JSX.Element | null {
  if (!isOpen) {
    return null;
  }

  return (
    <View className="w-full border-t border-base-300 bg-base-100" testID={id}>
      <View className="flex-col gap-2 p-4">{children}</View>
    </View>
  );
});

/**
 * @description Panel colapsable que muestra el contenido del menu en
 * pantallas pequenas.
 * @param props Propiedades del panel.
 * @param props.isOpen Indica si el panel esta visible.
 * @param props.children Contenido del panel.
 * @param props.id Identificador accesible del panel.
 * @returns Panel listo para renderizar o null.
 * @example
 * <ResponsiveMenuPanel id={panelId} isOpen={isOpen}>
 *   <Navigation items={items} orientation="vertical" />
 * </ResponsiveMenuPanel>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ResponsiveMenuPanel: FC<ResponsiveMenuPanelProps> =
  function ResponsiveMenuPanel(props): JSX.Element | null {
    return (
      <ResponsiveMenuPanelView id={props.id} isOpen={props.isOpen}>
        {props.children}
      </ResponsiveMenuPanelView>
    );
  };

export default ResponsiveMenuPanel;
