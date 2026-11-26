/**
 * @description Mock de react-native-svg para el entorno de pruebas jsdom.
 * Renderiza contenedores simples que conservan las props de prueba.
 * @author Steveen Cues
 * @version 1.0.0
 */
const React = require("react");
const { View } = require("react-native");

const createSvgComponent = () =>
  React.forwardRef(function SvgComponent(props, ref) {
    return React.createElement(View, { ...props, ref });
  });

const Svg = createSvgComponent("svg");
const Path = createSvgComponent("svg-path");
const Circle = createSvgComponent("svg-circle");
const Rect = createSvgComponent("svg-rect");
const G = createSvgComponent("svg-g");
const Line = createSvgComponent("svg-line");
const Polygon = createSvgComponent("svg-polygon");
const Polyline = createSvgComponent("svg-polyline");
const Ellipse = createSvgComponent("svg-ellipse");
const Text = createSvgComponent("svg-text");
const TSpan = createSvgComponent("svg-tspan");
const TextPath = createSvgComponent("svg-textpath");
const Use = createSvgComponent("svg-use");
const Symbol = createSvgComponent("svg-symbol");
const Defs = createSvgComponent("svg-defs");
const Stop = createSvgComponent("svg-stop");
const LinearGradient = createSvgComponent("svg-linear-gradient");
const RadialGradient = createSvgComponent("svg-radial-gradient");
const ClipPath = createSvgComponent("svg-clip-path");
const Mask = createSvgComponent("svg-mask");
const Pattern = createSvgComponent("svg-pattern");
const Marker = createSvgComponent("svg-marker");
const ForeignObject = createSvgComponent("svg-foreign-object");

module.exports = {
  Svg,
  Path,
  Circle,
  Rect,
  G,
  Line,
  Polygon,
  Polyline,
  Ellipse,
  Text,
  TSpan,
  TextPath,
  Use,
  Symbol,
  Defs,
  Stop,
  LinearGradient,
  RadialGradient,
  ClipPath,
  Mask,
  Pattern,
  Marker,
  ForeignObject,
  SvgXml: createSvgComponent("svg-xml"),
  SvgUri: createSvgComponent("svg-uri"),
  SvgCss: createSvgComponent("svg-css"),
  SvgCssUri: createSvgComponent("svg-css-uri"),
  default: Svg,
};
