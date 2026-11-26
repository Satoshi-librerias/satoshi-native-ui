import { memo } from "react";
import type { FC, JSX } from "react";
import { Text, View } from "react-native";
import { getStatClasses } from "../utils/get-stat-classes.util";
import {
  STAT_DESCRIPTION_CLASS,
  STAT_TITLE_CLASS,
  STAT_VALUE_CLASS,
} from "../constants/stat.constants";
import type { StatProps } from "../types/stat.types";

/**
 * @description Renderiza la estadistica con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo de la estadistica.
 * @param props.value Valor principal.
 * @param props.description Descripcion adicional.
 * @param props.icon Icono opcional junto al valor.
 * @param props.variant Variante de color.
 * @param props.className Clases adicionales configuradas.
 * @returns Estadistica lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const StatView = memo(function StatView({
  title,
  value,
  description,
  icon,
  variant,
  className,
}: Required<Pick<StatProps, "title" | "value" | "variant" | "className">> &
  Pick<StatProps, "description" | "icon">): JSX.Element {
  return (
    <View className={getStatClasses({ className, variant })}>
      <Text className={STAT_TITLE_CLASS}>{title}</Text>

      <View className="flex-row items-center gap-2">
        {icon !== undefined && <View aria-hidden={true}>{icon}</View>}
        <Text className={STAT_VALUE_CLASS}>{value}</Text>
      </View>

      {description !== undefined && (
        <Text className={STAT_DESCRIPTION_CLASS}>{description}</Text>
      )}
    </View>
  );
});

/**
 * @description Tarjeta de estadistica con titulo, valor y descripcion,
 * variantes de color y clases responsive de NativeWind.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo de la estadistica.
 * @param props.value Valor principal.
 * @param props.description Descripcion adicional.
 * @param props.icon Icono opcional junto al valor.
 * @param props.variant Variante de color del valor.
 * @param props.className Clases adicionales configuradas.
 * @returns Estadistica lista para renderizar.
 * @example
 * <Stat
 *   title={t("stats.users")}
 *   value="1,204"
 *   description={t("stats.thisMonth")}
 *   variant="success"
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Stat: FC<StatProps> = memo(function Stat(props): JSX.Element {
  return (
    <StatView
      className={props.className ?? ""}
      description={props.description}
      icon={props.icon}
      title={props.title}
      value={props.value}
      variant={props.variant ?? "neutral"}
    />
  );
});

export default Stat;
