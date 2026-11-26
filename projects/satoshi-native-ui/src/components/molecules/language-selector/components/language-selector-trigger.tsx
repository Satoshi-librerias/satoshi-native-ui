import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text } from "react-native";
import { getLanguageName } from "../utils/filter-languages.util";
import type { LanguageSelectorTriggerProps } from "../types/language-selector.types";

/**
 * @description Renderiza el activador del selector de idiomas.
 * @param props Propiedades del activador.
 * @param props.language Codigo del idioma activo.
 * @param props.isOpen Indica si el panel esta abierto.
 * @param props.onClick Accion de alternado.
 * @param props.ariaLabel Etiqueta accesible del activador.
 * @returns Activador listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const LanguageSelectorTriggerView = memo(function LanguageSelectorTriggerView({
  language,
  isOpen,
  onClick,
  ariaLabel,
}: LanguageSelectorTriggerProps): JSX.Element {
  const handlePress = useCallback((): void => {
    onClick();
  }, [onClick]);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={ariaLabel}
      accessibilityState={{ expanded: isOpen }}
      className="flex w-full flex-row items-center justify-between gap-3 rounded-full border border-base-300 bg-base-100/80 px-3 py-2"
      onPress={handlePress}
    >
      <Text numberOfLines={1} className="min-w-0 flex-1 text-sm">
        {getLanguageName(language)}
      </Text>

      <Text aria-hidden={true} className="shrink-0 text-xs opacity-60">
        {isOpen ? "\u25B4" : "\u25BE"}
      </Text>
    </Pressable>
  );
});

/**
 * @description Activador accesible del selector de idiomas con el nombre
 * legible del idioma activo y estado expandido.
 * @param props Propiedades del activador.
 * @param props.language Codigo del idioma activo.
 * @param props.isOpen Indica si el panel esta abierto.
 * @param props.onClick Accion de alternado.
 * @param props.ariaLabel Etiqueta accesible del activador.
 * @returns Activador listo para renderizar.
 * @example
 * <LanguageSelectorTrigger
 *   language="es"
 *   isOpen={false}
 *   onClick={toggle}
 *   ariaLabel={t("language.select")}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LanguageSelectorTrigger: FC<LanguageSelectorTriggerProps> =
  function LanguageSelectorTrigger(props): JSX.Element {
    return (
      <LanguageSelectorTriggerView
        ariaLabel={props.ariaLabel}
        isOpen={props.isOpen}
        language={props.language}
        onClick={props.onClick}
      />
    );
  };

export default LanguageSelectorTrigger;
