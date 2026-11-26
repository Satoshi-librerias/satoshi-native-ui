import { useCallback, useState } from "react";
import type {
  ThemeSelectorProps,
  UseThemeSelectorResult,
} from "../types/theme-selector.types";

/**
 * @description Define el estado interno del selector de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
interface ThemeSelectorState {
  readonly isOpen: boolean;
  readonly search: string;
}

/**
 * @description Administra el estado abierto/cerrado y la busqueda del
 * selector de temas.
 * @returns Estado y acciones del selector.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useThemeSelectorState(): UseThemeSelectorResult {
  const [state, setState] = useState<ThemeSelectorState>({
    isOpen: false,
    search: "",
  });

  const handleToggle = useCallback((): void => {
    setState((previousState: ThemeSelectorState): ThemeSelectorState => ({
      isOpen: !previousState.isOpen,
      search: "",
    }));
  }, []);

  const handleClose = useCallback((): void => {
    setState({ isOpen: false, search: "" });
  }, []);

  const handleSearchChange = useCallback((value: string): void => {
    setState((previousState: ThemeSelectorState): ThemeSelectorState => ({
      ...previousState,
      search: value,
    }));
  }, []);

  return {
    isOpen: state.isOpen,
    search: state.search,
    handleToggle,
    handleClose,
    handleSearchChange,
  };
}

/**
 * @description Tipo de props reexportado para el consumidor del hook.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type { ThemeSelectorProps };
