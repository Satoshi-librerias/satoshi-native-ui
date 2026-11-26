/**
 * @description Contrato de almacenamiento clave-valor multiplataforma.
 * Permite desacoplar los servicios de localStorage (web) o AsyncStorage
 * (nativo) sin cambiar la API compartida.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface KeyValueStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

/**
 * @description Obtiene el almacenamiento disponible en el entorno actual.
 * En web devuelve localStorage; en React Native devuelve undefined y el
 * consumidor debe registrar un adaptador con setKeyValueStorage.
 * @returns Almacenamiento disponible o undefined.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getLocalStorage(): KeyValueStorage | undefined {
  try {
    const candidate = globalThis.localStorage;

    if (
      candidate !== undefined &&
      typeof candidate.getItem === "function" &&
      typeof candidate.setItem === "function"
    ) {
      return candidate;
    }

    return undefined;
  } catch {
    return undefined;
  }
}

/**
 * @description Adaptador de almacenamiento registrado por el consumidor.
 * @author Steveen Cues
 * @version 1.0.0
 */
let registeredStorage: KeyValueStorage | undefined;

/**
 * @description Registra un adaptador de almacenamiento multiplataforma.
 * @param storage Adaptador que implementa el contrato KeyValueStorage.
 * @returns void.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function setKeyValueStorage(storage: KeyValueStorage): void {
  registeredStorage = storage;
}

/**
 * @description Resuelve el almacenamiento activo: primero el adaptador
 * registrado y despues el almacenamiento nativo del entorno.
 * @returns Almacenamiento activo o undefined si no existe.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function resolveStorage(): KeyValueStorage | undefined {
  if (registeredStorage !== undefined) {
    return registeredStorage;
  }

  return getLocalStorage();
}
