/**
 * @description Identificador del algoritmo AES-GCM.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AES_GCM_ALGORITHM = "AES-GCM";

/**
 * @description Longitud del vector de inicializacion en bytes para AES-GCM.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AES_GCM_IV_LENGTH = 12;

/**
 * @description Identificador del algoritmo de resumen SHA-256.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SHA_256_ALGORITHM = "SHA-256";

/**
 * @description Identificador del formato de importacion de clave cruda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RAW_KEY_FORMAT = "raw";

/**
 * @description Separador que une los segmentos IV y texto cifrado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STORAGE_VALUE_SEPARATOR = ".";

/**
 * @description Usos permitidos para la clave AES-GCM derivada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const KEY_USAGES: KeyUsage[] = ["encrypt", "decrypt"];

/**
 * @description Numero de segmentos esperado en un valor cifrado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ENCRYPTED_VALUE_PART_COUNT = 2;

/**
 * @description Bandera global aplicada a los patrones de traduccion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const GLOBAL_REGEX_FLAG = "g";
