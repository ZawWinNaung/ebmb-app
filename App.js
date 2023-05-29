import React, { useEffect } from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import RootNavigator from "./src/navigation/RootNavigator";
import { StatusBar } from "react-native";
import {
  NotificationListener,
  requestUserPermission,
} from "./src/utils/PushNotificationHelper";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  myOwnProperty: true,
  colors: {
    primary: "#3498db",
    secondary: "#f1c40f",
    tertiary: "#a1b2c3",
    background: "#ffffff",
  },
};

export default function App() {
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.primary} />
      <RootNavigator />
    </PaperProvider>
  );
}
