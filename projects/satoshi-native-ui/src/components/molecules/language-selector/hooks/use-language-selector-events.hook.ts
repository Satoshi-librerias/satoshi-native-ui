import { useEffect } from "react";
import type { RefObject } from "react";
import type { View } from "react-native";

/**
 * @description Hook de eventos externos del selector de idiomas. En React
 * Native no existe document, por lo que el cierre externo se delega al
 * consumidor; el hook mantiene la firma multiplataforma de la libreria web.
 * @param containerRef Referencia del contenedor del selector.
 * @param closeSelector Accion de cierre del selector.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useLanguageSelectorEvents(
  containerRef: RefObject<View | null>,
  closeSelector: () => void,
): void {
  useEffect((): void => {
    void containerRef;
    void closeSelector;
  }, [closeSelector, containerRef]);
}
