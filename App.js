import React from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import lightTheme from "./src/style/color-scheme/LightTheme.json";
import RootNavigator from "./src/navigation/RootNavigator";
import { StatusBar } from "react-native";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    secondary: "#f1c40f",
    tertiary: "#a1b2c3",
    background: "#ffffff",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.primary} />
      <RootNavigator />
    </PaperProvider>
  );
}
