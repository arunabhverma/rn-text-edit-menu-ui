import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MorphIcons from "@/components/MorphIcons";

const MorphIconDemo = () => {
  return (
    <View style={styles.container}>
      <MorphIcons size={200} />
    </View>
  );
};

export default MorphIconDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
