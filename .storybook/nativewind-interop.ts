/**
 * @description Habilita la interoperabilidad de NativeWind para que las
 * clases de Tailwind escritas en className se apliquen a los primitivos de
 * react-native-web en el entorno de Storybook. Debe importarse antes de
 * renderizar cualquier componente de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
import type { ComponentType } from "react";
import { cssInterop, StyleSheet } from "nativewind";
import {
  Image as RNImage,
  Pressable as RNPressable,
  Text as RNText,
  TextInput as RNTextInput,
  View as RNView,
} from "react-native";

/**
 * @description Configura el modo de dark mode por clase para que el
 * atributo data-theme del ThemeProvider controle el color scheme. La API
 * setFlag solo existe en el runtime nativo; en web el modo class se
 * detecta automaticamente.
 * @author Steveen Cues
 * @version 1.0.0
 */
const nativeWindStyleSheet = StyleSheet as unknown as {
  setFlag?: (name: "darkMode", value: "class") => void;
};

if (typeof nativeWindStyleSheet.setFlag === "function") {
  nativeWindStyleSheet.setFlag("darkMode", "class");
}

/**
 * @description Registra la interoperabilidad de className sobre cada
 * primitivo de react-native-web usado por la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
function enableNativeWindInterop(): void {
  const primitives: readonly ComponentType<Record<string, unknown>>[] = [
    RNImage as ComponentType<Record<string, unknown>>,
    RNPressable as ComponentType<Record<string, unknown>>,
    RNText as ComponentType<Record<string, unknown>>,
    RNTextInput as ComponentType<Record<string, unknown>>,
    RNView as ComponentType<Record<string, unknown>>,
  ];

  for (const primitive of primitives) {
    cssInterop(primitive, { className: "style" });
  }
}

enableNativeWindInterop();
