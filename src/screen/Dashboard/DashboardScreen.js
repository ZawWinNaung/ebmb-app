import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import Fonts from "../../style/Fonts";

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
      <Text style={{ fontFamily: Fonts.bold }}>Dashboard</Text>
    </View>
  );
}
