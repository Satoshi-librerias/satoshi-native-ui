import { cleanup } from "@testing-library/react-native";
import { afterEach } from "@jest/globals";

/**
 * @description Limpia el arbol de componentes y el almacenamiento despues
 * de cada prueba.
 * @author Steveen Cues
 * @version 1.0.0
 */
afterEach((): void => {
  cleanup();
  window.localStorage.clear();
});
