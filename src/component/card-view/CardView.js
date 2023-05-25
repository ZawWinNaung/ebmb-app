import React from "react";
import { View, StyleSheet } from "react-native";

export default function CardView({ children, style, isShadow = true }) {
  return (
    <View style={[isShadow ? styles.container : null, { ...style }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    zIndex: 99,
  },
});
