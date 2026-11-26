/**
 * @description Registra la interoperabilidad de NativeWind sobre los
 * componentes de react-native-paper usados por la libreria para que las
 * clases de Tailwind escritas en className se apliquen a su prop style.
 * @author Steveen Cues
 * @version 1.0.0
 */
import { cssInterop } from "nativewind";
import {
  ActivityIndicator as PaperActivityIndicator,
  Avatar as PaperAvatar,
  Badge as PaperBadge,
  Button as PaperButton,
  Card as PaperCard,
  Checkbox as PaperCheckbox,
  Divider as PaperDivider,
  List as PaperList,
  ProgressBar as PaperProgressBar,
  RadioButton as PaperRadioButton,
  Searchbar as PaperSearchbar,
  Switch as PaperSwitch,
  TextInput as PaperTextInput,
  Tooltip as PaperTooltip,
} from "react-native-paper";

cssInterop(PaperActivityIndicator, { className: "style" });
cssInterop(PaperAvatar.Image, { className: "style" });
cssInterop(PaperAvatar.Text, { className: "style" });
cssInterop(PaperBadge, { className: "style" });
cssInterop(PaperButton, { className: "style" });
cssInterop(PaperCard, { className: "style" });
cssInterop(PaperCheckbox.Android, { className: "style" });
cssInterop(PaperDivider, { className: "style" });
cssInterop(PaperList.Accordion, { className: "style" });
cssInterop(PaperList.Item, { className: "style" });
cssInterop(PaperProgressBar, { className: "style" });
cssInterop(PaperRadioButton.Android, { className: "style" });
cssInterop(PaperSearchbar, { className: "style" });
cssInterop(PaperSwitch, { className: "style" });
cssInterop(PaperTextInput, { className: "style" });
cssInterop(PaperTooltip, { className: "style" });
