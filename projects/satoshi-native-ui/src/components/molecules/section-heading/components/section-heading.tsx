import { memo } from "react";
import type { FC, JSX } from "react";
import { Text, View } from "react-native";
import { getSectionHeadingClasses } from "../utils/get-section-heading-classes.util";
import {
  SECTION_HEADING_DEFAULT_LEVEL,
  SECTION_HEADING_DEFAULT_SIZE,
  SECTION_HEADING_EYEBROW_CLASS,
  SECTION_HEADING_SIZE_CLASSES,
  SECTION_HEADING_SUBTITLE_CLASS,
} from "../constants/section-heading.constants";
import type { SectionHeadingProps } from "../types/section-heading.types";

/**
 * @description Renderiza el encabezado de seccion con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo de la seccion.
 * @param props.subtitle Subtitulo opcional.
 * @param props.action Accion opcional alineada a la derecha.
 * @param props.level Nivel semantico del titulo.
 * @param props.className Clases adicionales configuradas.
 * @returns Encabezado de seccion listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const SectionHeadingView = memo(function SectionHeadingView({
  title,
  eyebrow,
  subtitle,
  action,
  level,
  size,
  align,
  className,
}: Required<Pick<SectionHeadingProps, "title" | "level" | "className">> &
  Required<Pick<SectionHeadingProps, "size" | "align">> &
  Pick<SectionHeadingProps, "eyebrow" | "subtitle" | "action">): JSX.Element {
  return (
    <View className={getSectionHeadingClasses({ align, className })}>
      <View className="min-w-0 max-w-3xl">
        {eyebrow !== undefined && (
          <Text className={SECTION_HEADING_EYEBROW_CLASS}>{eyebrow}</Text>
        )}
        <Text
          accessibilityRole="header"
          aria-level={level}
          className={`${SECTION_HEADING_SIZE_CLASSES[size]} ${eyebrow === undefined ? "" : "mt-2"}`.trim()}
        >
          {title}
        </Text>

        {subtitle !== undefined && (
          <Text
            className={`${SECTION_HEADING_SUBTITLE_CLASS} ${align === "center" ? "mx-auto" : ""}`.trim()}
          >
            {subtitle}
          </Text>
        )}
      </View>

      {action !== undefined && (
        <View className={`shrink-0 ${align === "center" ? "self-center" : ""}`}>
          {action}
        </View>
      )}
    </View>
  );
});

/**
 * @description Encabezado de seccion con titulo, subtitulo y accion
 * opcional, con niveles semanticos y clases responsive de NativeWind.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo de la seccion.
 * @param props.eyebrow Etiqueta breve opcional sobre el titulo.
 * @param props.subtitle Subtitulo opcional.
 * @param props.action Accion opcional alineada a la derecha.
 * @param props.level Nivel semantico del titulo (1 a 4).
 * @param props.size Tamano visual independiente del nivel semantico.
 * @param props.align Alineacion del contenido del encabezado.
 * @param props.className Clases adicionales configuradas.
 * @returns Encabezado de seccion listo para renderizar.
 * @example
 * <SectionHeading
 *   eyebrow={t("dashboard.eyebrow")}
 *   title={t("dashboard.title")}
 *   subtitle={t("dashboard.subtitle")}
 *   size="lg"
 *   action={<Button size="sm">{t("common.new")}</Button>}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SectionHeading: FC<SectionHeadingProps> = memo(
  function SectionHeading(props): JSX.Element {
    return (
      <SectionHeadingView
        align={props.align ?? "start"}
        action={props.action}
        className={props.className ?? ""}
        eyebrow={props.eyebrow}
        level={props.level ?? SECTION_HEADING_DEFAULT_LEVEL}
        size={props.size ?? SECTION_HEADING_DEFAULT_SIZE}
        subtitle={props.subtitle}
        title={props.title}
      />
    );
  },
);

export default SectionHeading;
