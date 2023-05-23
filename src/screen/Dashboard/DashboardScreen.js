import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function DashboardScreen() {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.background,
      }}
    >
      <Text>Dashboard</Text>
    </View>
  );
}
