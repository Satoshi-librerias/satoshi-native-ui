import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text, View } from "react-native";
import { useLanguage } from "@libs";
import type { ThemeSelectorTriggerProps } from "../types/theme-selector.types";

/**
 * @description Renderiza el activador del selector de temas.
 * @param props Propiedades del activador.
 * @param props.theme Tema activo.
 * @param props.isOpen Indica si el panel esta abierto.
 * @param props.ariaLabel Etiqueta accesible del activador.
 * @param props.onToggle Accion de alternado.
 * @returns Activador listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ThemeSelectorTriggerView = memo(function ThemeSelectorTriggerView({
  theme,
  isOpen,
  ariaLabel,
  onToggle,
}: ThemeSelectorTriggerProps): JSX.Element {
  const { t } = useLanguage();
  const themeName = t(theme.manifest.name);

  const handlePress = useCallback((): void => {
    onToggle();
  }, [onToggle]);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={ariaLabel ?? themeName}
      accessibilityState={{ expanded: isOpen }}
      className="flex w-full flex-row items-center justify-between gap-3 rounded-full border border-base-300 bg-base-100/80 px-3 py-2"
      onPress={handlePress}
    >
      <View className="min-w-0 flex-row items-center gap-3">
        <View
          aria-hidden={true}
          className="h-5 w-5 shrink-0 items-center justify-center rounded-full border border-base-300 bg-base-100"
        >
          <View className="h-3 w-3 rounded-full bg-primary" />
        </View>

        <Text numberOfLines={1} className="min-w-0 flex-1 text-sm">
          {themeName}
        </Text>
      </View>

      <Text aria-hidden={true} className="shrink-0 text-xs opacity-60">
        {isOpen ? "\u25B4" : "\u25BE"}
      </Text>
    </Pressable>
  );
});

/**
 * @description Activador accesible del selector de temas con muestra del
 * color primario del tema activo.
 * @param props Propiedades del activador.
 * @param props.theme Tema activo.
 * @param props.isOpen Indica si el panel esta abierto.
 * @param props.ariaLabel Etiqueta accesible del activador.
 * @param props.selectedLabel Etiqueta del estado seleccionado.
 * @param props.onToggle Accion de alternado.
 * @returns Activador listo para renderizar.
 * @example
 * <ThemeSelectorTrigger
 *   theme={theme}
 *   isOpen={false}
 *   onToggle={toggle}
 *   ariaLabel={t("theme.select")}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeSelectorTrigger: FC<ThemeSelectorTriggerProps> =
  function ThemeSelectorTrigger(props): JSX.Element {
    return (
      <ThemeSelectorTriggerView
        ariaLabel={props.ariaLabel}
        isOpen={props.isOpen}
        onToggle={props.onToggle}
        selectedLabel={props.selectedLabel}
        theme={props.theme}
      />
    );
  };

export default ThemeSelectorTrigger;
