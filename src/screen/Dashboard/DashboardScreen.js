import { View, Text } from "react-native";
import CardView from "../../component/card-view/CardView";
import styles from "./styles";

export default function DashboardScreen() {
  return (
    <View style={styles.mainContainer}>
      <CardView style={styles.card}>
        <View>
          <Text>Card View</Text>
        </View>
      </CardView>
    </View>
  );
}
