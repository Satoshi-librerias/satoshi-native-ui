import { useCallback } from "react";
import type { FC, JSX } from "react";
import { View } from "react-native";
import { useLanguage } from "@libs";
import { ResponsiveMenuPanel } from "./responsive-menu-panel";
import { ResponsiveMenuToggle } from "./responsive-menu-toggle";
import { useResponsiveMenu } from "../hooks/use-responsive-menu.hook";
import { translateResponsiveMenuLabels } from "../utils/translate-responsive-menu-labels.util";
import type { ResponsiveMenuProps } from "../types/responsive-menu.types";

/**
 * @description Menu responsive que gestiona la navegacion en pantallas
 * pequenas y grandes. El contenido se muestra dentro de un panel
 * colapsable controlado desde fuera con las propiedades isOpen y onToggle.
 * @param props Propiedades de la molecula.
 * @param props.children Contenido del panel del menu.
 * @param props.labels Claves de traduccion configurables.
 * @param props.className Clases adicionales configuradas.
 * @param props.isOpen Estado controlado del panel.
 * @param props.onToggle Accion de alternado en modo controlado.
 * @returns Menu responsive listo para renderizar.
 * @example
 * <ResponsiveMenu
 *   isOpen={isOpen}
 *   onToggle={(): void => setIsOpen((open): boolean => !open)}
 * >
 *   <Navigation items={items} orientation="vertical" />
 * </ResponsiveMenu>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ResponsiveMenu: FC<ResponsiveMenuProps> = ({
  children,
  labels,
  className = "",
  isOpen: controlledIsOpen,
  onToggle,
}): JSX.Element => {
  const { t } = useLanguage();
  const { isOpen: internalIsOpen, panelId, toggleMenu } = useResponsiveMenu();
  const menuLabels = translateResponsiveMenuLabels(labels, t);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleToggle = useCallback((): void => {
    if (isControlled) {
      onToggle?.();
      return;
    }

    toggleMenu();
  }, [isControlled, onToggle, toggleMenu]);

  return (
    <View className={`w-full ${className}`.trim()}>
      <ResponsiveMenuToggle
        closeLabel={menuLabels.close}
        isOpen={isOpen}
        onToggle={handleToggle}
        openLabel={menuLabels.open}
        panelId={panelId}
      />

      <ResponsiveMenuPanel id={panelId} isOpen={isOpen}>
        {children}
      </ResponsiveMenuPanel>
    </View>
  );
};

export default ResponsiveMenu;
