import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text, View } from "react-native";
import { useLanguage } from "@libs";
import {
  getPaginationClasses,
  getPaginationPageClasses,
} from "../utils/get-pagination-classes.util";
import { getPaginationPages } from "../utils/get-pagination-pages.util";
import type { PaginationProps } from "../types/pagination.types";

/**
 * @description Renderiza la paginacion con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.page Pagina actual.
 * @param props.totalPages Total de paginas.
 * @param props.siblingCount Paginas hermanas visibles.
 * @param props.ariaLabel Etiqueta accesible de la paginacion.
 * @param props.previousLabel Etiqueta del boton anterior.
 * @param props.nextLabel Etiqueta del boton siguiente.
 * @param props.variant Variante visual.
 * @param props.size Tamano de los botones.
 * @param props.className Clases adicionales configuradas.
 * @param props.onPageChange Callback ejecutado al cambiar de pagina.
 * @returns Paginacion lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const PaginationView = memo(function PaginationView({
  page,
  totalPages,
  siblingCount,
  ariaLabel,
  previousLabel,
  nextLabel,
  variant,
  size,
  className,
  onPageChange,
}: Required<
  Pick<
    PaginationProps,
    "page" | "totalPages" | "variant" | "size" | "className"
  >
> &
  Pick<
    PaginationProps,
    | "siblingCount"
    | "ariaLabel"
    | "previousLabel"
    | "nextLabel"
    | "onPageChange"
  >): JSX.Element {
  const pages = getPaginationPages(page, totalPages, siblingCount);

  const handlePageClick = useCallback(
    (targetPage: number): void => {
      onPageChange?.(targetPage);
    },
    [onPageChange],
  );

  return (
    <View accessibilityLabel={ariaLabel} className={className}>
      <View className={getPaginationClasses({ variant, size })}>
        <Pressable
          accessibilityLabel={previousLabel}
          accessibilityRole="button"
          className={getPaginationPageClasses({
            isActive: false,
            size,
          })}
          disabled={page <= 1}
          onPress={(): void => handlePageClick(page - 1)}
        >
          <Text>{"\u00AB"}</Text>
        </Pressable>

        {pages.map((entry, index) =>
          entry === "ellipsis" ? (
            <Text
              aria-hidden={true}
              className={getPaginationPageClasses({
                isActive: false,
                size,
              })}
              key={`ellipsis-${index.toString()}`}
            >
              {"\u2026"}
            </Text>
          ) : (
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected: entry === page }}
              className={getPaginationPageClasses({
                isActive: entry === page,
                size,
              })}
              key={entry}
              onPress={(): void => handlePageClick(entry)}
            >
              <Text>{entry}</Text>
            </Pressable>
          ),
        )}

        <Pressable
          accessibilityLabel={nextLabel}
          accessibilityRole="button"
          className={getPaginationPageClasses({
            isActive: false,
            size,
          })}
          disabled={page >= totalPages}
          onPress={(): void => handlePageClick(page + 1)}
        >
          <Text>{"\u00BB"}</Text>
        </Pressable>
      </View>
    </View>
  );
});

/**
 * @description Paginacion accesible con elipsis automatica, variantes y
 * tamanos. Los textos por defecto se resuelven con TranslateProvider.
 * @param props Propiedades de la molecula.
 * @param props.page Pagina actual.
 * @param props.totalPages Total de paginas.
 * @param props.siblingCount Paginas hermanas visibles alrededor de la actual.
 * @param props.ariaLabel Etiqueta accesible de la paginacion.
 * @param props.previousLabel Etiqueta accesible del boton anterior.
 * @param props.nextLabel Etiqueta accesible del boton siguiente.
 * @param props.variant Variante visual.
 * @param props.size Tamano de los botones.
 * @param props.className Clases adicionales configuradas.
 * @param props.onPageChange Callback ejecutado al cambiar de pagina.
 * @returns Paginacion lista para renderizar.
 * @example
 * <Pagination
 *   page={page}
 *   totalPages={12}
 *   onPageChange={setPage}
 *   ariaLabel={t("common.pagination")}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Pagination: FC<PaginationProps> = memo(
  function Pagination(props): JSX.Element {
    const { t } = useLanguage();

    return (
      <PaginationView
        ariaLabel={props.ariaLabel ?? t("molecules.pagination")}
        className={props.className ?? ""}
        nextLabel={props.nextLabel ?? t("molecules.nextPage")}
        onPageChange={props.onPageChange}
        page={props.page}
        previousLabel={props.previousLabel ?? t("molecules.previousPage")}
        siblingCount={props.siblingCount}
        size={props.size ?? "md"}
        totalPages={props.totalPages}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default Pagination;
