/**
 * @description Declaraciones de tipos para NativeWind. La augmentacion de
 * react-native-css-interop resuelve el react-native anidado de nativewind,
 * por lo que esta declaracion aplica className sobre los tipos del
 * react-native raiz del proyecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
import "react-native";

declare module "react-native" {
  interface ViewProps {
    className?: string | undefined;
  }

  interface TextProps {
    className?: string | undefined;
  }

  interface ImagePropsBase {
    className?: string | undefined;
  }

  interface TextInputProps {
    className?: string | undefined;
  }

  interface PressableProps {
    className?: string | undefined;
  }

  interface ActivityIndicatorProps {
    className?: string | undefined;
  }

  interface SwitchProps {
    className?: string | undefined;
  }

  interface ScrollViewProps {
    className?: string | undefined;
  }
}
