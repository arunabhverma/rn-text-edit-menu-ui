import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const Main = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Edit Menu Demo"
        onPress={() => navigation.navigate("EditMenuDemo")}
      />
      <Button
        title="Morph Icon Demo"
        onPress={() => navigation.navigate("MorphIconDemo")}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
