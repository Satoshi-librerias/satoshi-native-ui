import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text, View } from "react-native";
import { getListItemClasses } from "../utils/get-list-item-classes.util";
import {
  LIST_ITEM_DESCRIPTION_CLASS,
  LIST_ITEM_TITLE_CLASS,
} from "../constants/list-item.constants";
import type { ListItemProps } from "../types/list-item.types";

/**
 * @description Renderiza el elemento de lista con las propiedades
 * resueltas.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo del elemento.
 * @param props.description Descripcion opcional.
 * @param props.start Contenido inicial, normalmente un Avatar o Icono.
 * @param props.end Contenido final, normalmente una accion o Badge.
 * @param props.isDisabled Indica si el elemento esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del elemento.
 * @param props.className Clases adicionales configuradas.
 * @param props.isInteractive Indica si el elemento responde al clic.
 * @param props.handleClick Accion ejecutada al activar el elemento.
 * @returns Elemento de lista listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ListItemView = memo(function ListItemView({
  title,
  description,
  start,
  end,
  isDisabled,
  ariaLabel,
  className,
  isInteractive,
  handleClick,
}: {
  readonly title: string;
  readonly description: string | undefined;
  readonly start: React.ReactNode;
  readonly end: React.ReactNode;
  readonly isDisabled: boolean;
  readonly ariaLabel: string | undefined;
  readonly className: string;
  readonly isInteractive: boolean;
  readonly handleClick: () => void;
}): JSX.Element {
  const content = (
    <>
      {start !== undefined && <View className="shrink-0">{start}</View>}

      <View className="min-w-0 flex-1">
        <Text className={LIST_ITEM_TITLE_CLASS}>{title}</Text>

        {description !== undefined && (
          <Text className={LIST_ITEM_DESCRIPTION_CLASS}>{description}</Text>
        )}
      </View>

      {end !== undefined && <View className="shrink-0">{end}</View>}
    </>
  );

  if (isInteractive && !isDisabled) {
    return (
      <Pressable
        accessibilityLabel={ariaLabel}
        accessibilityRole="button"
        className={`${getListItemClasses({ isDisabled, isInteractive })} ${className}`.trim()}
        onPress={handleClick}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <View
      accessibilityLabel={ariaLabel}
      aria-disabled={isDisabled || undefined}
      className={`${getListItemClasses({ isDisabled, isInteractive })} ${className}`.trim()}
    >
      {content}
    </View>
  );
});

/**
 * @description Fila generica de lista accesible con titulo, descripcion y
 * ranuras para contenido inicial y final; compone atoms como Avatar,
 * Badge o Button en sus ranuras. Incluye clases responsive de NativeWind.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo del elemento.
 * @param props.description Descripcion opcional bajo el titulo.
 * @param props.start Contenido inicial, normalmente un Avatar o Icono.
 * @param props.end Contenido final, normalmente una accion o Badge.
 * @param props.isDisabled Indica si el elemento esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del elemento.
 * @param props.className Clases adicionales configuradas.
 * @param props.onClick Callback ejecutado al hacer clic; su presencia
 * hace el elemento interactivo.
 * @returns Elemento de lista listo para renderizar.
 * @example
 * <ListItem
 *   title={t("users.name")}
 *   description={t("users.lastSeen")}
 *   start={<Avatar initials="SC" />}
 *   end={<Badge variant="success">{t("users.active")}</Badge>}
 *   onClick={openProfile}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ListItem: FC<ListItemProps> = memo(
  function ListItem(props): JSX.Element {
    const { onClick } = props;
    const isInteractive = onClick !== undefined;

    const handleClick = useCallback((): void => {
      onClick?.();
    }, [onClick]);

    return (
      <ListItemView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        description={props.description}
        end={props.end}
        handleClick={handleClick}
        isDisabled={props.isDisabled ?? false}
        isInteractive={isInteractive}
        start={props.start}
        title={props.title}
      />
    );
  },
);

export default ListItem;
