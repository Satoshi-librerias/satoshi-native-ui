/**
 * @description Mock de react-native/Libraries/Utilities/codegenNativeComponent
 * para el entorno web de Storybook. Los componentes codegen de librerias
 * nativas (safe-area-context, svg) no existen en web; se resuelven a un
 * componente host generico de react-native-web.
 * @author Steveen Cues
 * @version 1.0.0
 */
import { createElement } from "react";
import { View } from "react-native-web";

/**
 * @description Crea un componente sustituto para un componente nativo
 * codegen en web.
 * @param componentName Nombre del componente nativo.
 * @returns Componente sustituto basado en View.
 * @author Steveen Cues
 * @version 1.0.0
 */
function codegenNativeComponent(componentName: string) {
  const WebComponent = (props: Record<string, unknown>) =>
    createElement(View, props);

  WebComponent.displayName = componentName;

  return WebComponent;
}

export default codegenNativeComponent;
