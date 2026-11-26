/**
 * @description Mock de react-native-paper para el entorno de pruebas jsdom.
 * Expone componentes sustitutos que conservan las props de prueba y delegan
 * el render a primitivos de react-native.
 * @author Steveen Cues
 * @version 1.0.0
 */
const React = require("react");
const { Pressable, Text, TextInput, View } = require("react-native");

const createComponent = (testID, role) =>
  React.forwardRef(function PaperMock(props, ref) {
    const { children, ...restProps } = props;

    return React.createElement(
      View,
      {
        ...restProps,
        ref,
        accessibilityRole: restProps.accessibilityRole ?? role,
        testID: restProps.testID ?? testID,
      },
      children,
    );
  });

const createPressable = (testID, role) =>
  React.forwardRef(function PaperPressableMock(props, ref) {
    const { children, ...restProps } = props;

    return React.createElement(
      Pressable,
      {
        ...restProps,
        ref,
        accessibilityRole: restProps.accessibilityRole ?? role,
        testID: restProps.testID ?? testID,
      },
      children,
    );
  });

const MD3LightTheme = {
  dark: false,
  colors: {
    primary: "#570df8",
    onPrimary: "#ffffff",
    secondary: "#f000b8",
    onSecondary: "#ffffff",
    tertiary: "#37cdbe",
    onTertiary: "#16302d",
    error: "#ff6f70",
    onError: "#1d2939",
    background: "#ffffff",
    onBackground: "#1d2939",
    surface: "#ffffff",
    onSurface: "#1d2939",
    surfaceVariant: "#f2f2f2",
    onSurfaceVariant: "#1d2939",
    outline: "#e5e6e6",
    outlineVariant: "#e5e6e6",
    inverseSurface: "#3d4451",
    inverseOnSurface: "#ffffff",
  },
};

const MD3DarkTheme = {
  ...MD3LightTheme,
  dark: true,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#8b5cf6",
    background: "#1d232a",
    onBackground: "#cbd5e1",
    surface: "#1d232a",
    onSurface: "#cbd5e1",
    surfaceVariant: "#191e24",
    onSurfaceVariant: "#cbd5e1",
    outline: "#15191e",
    outlineVariant: "#15191e",
    inverseSurface: "#ffffff",
    inverseOnSurface: "#1d2939",
  },
};

const Button = createPressable("paper-button", "button");
const Card = createComponent("paper-card");
Card.Content = createComponent("paper-card-content");
const Checkbox = { Android: createPressable("paper-checkbox", "checkbox") };
const RadioButton = { Android: createPressable("paper-radio", "radio") };
const List = {
  Accordion: createComponent("paper-list-accordion"),
  Item: createComponent("paper-list-item"),
};
const Avatar = {
  Image: createComponent("paper-avatar-image", "image"),
  Text: createComponent("paper-avatar-text", "text"),
};

const Switch = React.forwardRef(function PaperSwitchMock(props, ref) {
  const { onValueChange, value, ...restProps } = props;

  return React.createElement(Pressable, {
    ...restProps,
    ref,
    accessibilityRole: restProps.accessibilityRole ?? "switch",
    accessibilityState: { checked: value },
    onPress: function () {
      onValueChange?.(!value);
    },
    testID: restProps.testID ?? "paper-switch",
  });
});

module.exports = {
  ActivityIndicator: createComponent("paper-activity-indicator", "progressbar"),
  Avatar,
  Badge: React.forwardRef(function PaperBadgeMock(props, ref) {
    const { children, ...restProps } = props;

    return React.createElement(
      View,
      {
        ...restProps,
        ref,
        accessibilityRole: restProps.accessibilityRole ?? "text",
        testID: restProps.testID ?? "paper-badge",
      },
      React.createElement(Text, null, children),
    );
  }),
  Banner: createComponent("paper-banner", "alert"),
  Button,
  Card,
  Checkbox,
  Divider: createComponent("paper-divider"),
  Icon: createComponent("paper-icon"),
  List,
  ProgressBar: createComponent("paper-progress-bar"),
  RadioButton,
  Searchbar: createComponent("paper-searchbar"),
  Surface: createComponent("paper-surface"),
  Switch,
  TextInput: React.forwardRef(function PaperTextInputMock(props, ref) {
    const restProps = { ...props };

    return React.createElement(TextInput, {
      ...restProps,
      ref,
      testID: restProps.testID ?? "paper-text-input",
    });
  }),
  Text: React.forwardRef(function PaperText(props, ref) {
    return React.createElement(Text, { ...props, ref });
  }),
  Tooltip: createComponent("paper-tooltip"),
  MD3LightTheme,
  MD3DarkTheme,
  PaperProvider: function PaperProvider(props) {
    return React.createElement(View, null, props.children);
  },
  default: { MD3LightTheme, MD3DarkTheme },
};
