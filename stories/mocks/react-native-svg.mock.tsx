/**
 * @description Mock de react-native-svg para el entorno web de Storybook.
 * Renderiza contenedores simples que conservan las props de prueba.
 * @author Steveen Cues
 * @version 1.0.0
 */
import { forwardRef, type ComponentType, type Ref } from "react";
import { View } from "react-native";

/**
 * @description Crea un componente SVG sustituto para web.
 * @param _testID Identificador de prueba del componente.
 * @returns Componente sustituto.
 * @author Steveen Cues
 * @version 1.0.0
 */
function createSvgComponent(
  _testID: string,
): ComponentType<Record<string, unknown>> {
  return forwardRef(function SvgComponent(
    props: Record<string, unknown>,
    ref: Ref<View>,
  ) {
    return <View {...props} ref={ref} />;
  });
}

export const Svg = createSvgComponent("svg");
export const Path = createSvgComponent("svg-path");
export const Circle = createSvgComponent("svg-circle");
export const Rect = createSvgComponent("svg-rect");
export const G = createSvgComponent("svg-g");
export const Line = createSvgComponent("svg-line");
export const Polygon = createSvgComponent("svg-polygon");
export const Polyline = createSvgComponent("svg-polyline");
export const Ellipse = createSvgComponent("svg-ellipse");
export const Text = createSvgComponent("svg-text");
export const TSpan = createSvgComponent("svg-tspan");
export const TextPath = createSvgComponent("svg-textpath");
export const Use = createSvgComponent("svg-use");
export const Symbol = createSvgComponent("svg-symbol");
export const Defs = createSvgComponent("svg-defs");
export const Stop = createSvgComponent("svg-stop");
export const LinearGradient = createSvgComponent("svg-linear-gradient");
export const RadialGradient = createSvgComponent("svg-radial-gradient");
export const ClipPath = createSvgComponent("svg-clip-path");
export const Mask = createSvgComponent("svg-mask");
export const Pattern = createSvgComponent("svg-pattern");
export const Marker = createSvgComponent("svg-marker");
export const ForeignObject = createSvgComponent("svg-foreign-object");
export const SvgXml = createSvgComponent("svg-xml");
export const SvgUri = createSvgComponent("svg-uri");
export const SvgCss = createSvgComponent("svg-css");
export const SvgCssUri = createSvgComponent("svg-css-uri");

export default Svg;
