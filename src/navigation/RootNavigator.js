import { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import DashboardScreen from "../screen/Dashboard/DashboardScreen";

const Stack = createStackNavigator();

export default function RootNavigator() {
  const routeNameRef = useRef();
  const navigationRef = useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
        }
        routeNameRef.current = currentRouteName;
      }}
    >
      <Stack.Navigator
        initialRouteName="dashboard"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          gestureDirection: "horizontal",
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white",
          headerTitleStyle: {
            textTransform: "uppercase",
            fontSize: hp(2.2),
          },
        }}
      >
        <Stack.Screen name={"dashboard"} component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
