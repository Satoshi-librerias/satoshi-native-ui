import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text } from "react-native";
import { RESPONSIVE_MENU_PANEL_ID_PREFIX } from "../constants/responsive-menu.constants";
import type { ResponsiveMenuToggleProps } from "../types/responsive-menu.types";

/**
 * @description Renderiza el boton que alterna el menu movil.
 * @param props Propiedades del boton.
 * @param props.isOpen Indica si el menu esta abierto.
 * @param props.openLabel Etiqueta accesible al abrir.
 * @param props.closeLabel Etiqueta accesible al cerrar.
 * @param props.onToggle Accion de alternado.
 * @param props.panelId Identificador del panel asociado.
 * @returns Boton de alternado listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ResponsiveMenuToggleView = memo(function ResponsiveMenuToggleView({
  isOpen,
  openLabel,
  closeLabel,
  onToggle,
  panelId = RESPONSIVE_MENU_PANEL_ID_PREFIX,
}: ResponsiveMenuToggleProps): JSX.Element {
  const label = isOpen ? closeLabel : openLabel;

  const handlePress = useCallback((): void => {
    onToggle();
  }, [onToggle]);

  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      accessibilityState={{ expanded: isOpen }}
      className="h-10 w-10 shrink-0 items-center justify-center rounded-full border border-base-300 bg-base-100/80"
      onPress={handlePress}
      testID={panelId}
    >
      <Text aria-hidden={true} className="text-lg">
        {isOpen ? "\u00D7" : "\u2261"}
      </Text>
    </Pressable>
  );
});

/**
 * @description Boton accesible que alterna la visibilidad del menu movil
 * con icono animado y objetivo tactil generoso.
 * @param props Propiedades del boton.
 * @param props.isOpen Indica si el menu esta abierto.
 * @param props.openLabel Etiqueta accesible al abrir.
 * @param props.closeLabel Etiqueta accesible al cerrar.
 * @param props.onToggle Accion de alternado.
 * @param props.panelId Identificador del panel asociado.
 * @returns Boton de alternado listo para renderizar.
 * @example
 * <ResponsiveMenuToggle
 *   isOpen={false}
 *   openLabel={t("menu.open")}
 *   closeLabel={t("menu.close")}
 *   onToggle={toggle}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ResponsiveMenuToggle: FC<ResponsiveMenuToggleProps> =
  function ResponsiveMenuToggle(props): JSX.Element {
    return (
      <ResponsiveMenuToggleView
        closeLabel={props.closeLabel}
        isOpen={props.isOpen}
        onToggle={props.onToggle}
        openLabel={props.openLabel}
        panelId={props.panelId}
      />
    );
  };

export default ResponsiveMenuToggle;
