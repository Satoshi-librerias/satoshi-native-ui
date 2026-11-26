/**
 * @description Mock de react-native-web para el entorno de tipos de la
 * libreria. El paquete no publica declaraciones propias.
 * @author Steveen Cues
 * @version 1.0.0
 */
declare module "react-native-web" {
  import type { ComponentType } from "react";

  export const View: ComponentType<Record<string, unknown>>;
  export const Text: ComponentType<Record<string, unknown>>;
  export const Image: ComponentType<Record<string, unknown>>;
  export const Pressable: ComponentType<Record<string, unknown>>;
  export const TextInput: ComponentType<Record<string, unknown>>;

  export function createElement(
    type: unknown,
    props?: Record<string, unknown>,
  ): unknown;
}
