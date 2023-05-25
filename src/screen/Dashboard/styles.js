import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    padding: wp(5),
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default styles;
