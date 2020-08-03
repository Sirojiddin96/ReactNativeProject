import { DefaultTheme } from "@react-navigation/native";
import colors from "../screens/config/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    bacground: colors.white,
  },
};
