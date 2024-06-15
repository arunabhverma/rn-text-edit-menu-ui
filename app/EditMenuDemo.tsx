import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MorphIcons from "@/components/MorphIcons";
import { useTheme } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";

const EditMenuDemo = () => {
  const [isVertical, setVertical] = useState(false);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Animated.View
        layout={LinearTransition}
        style={[
          {
            flexDirection: isVertical ? "column" : "row",
            backgroundColor: theme.colors.card,
          },
          styles.editMenuContainer,
        ]}
      >
        {isVertical && (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Pressable
              android_ripple={{ color: theme.colors.ripple }}
              style={[styles.horizontalButton, styles.verticalButton]}
            >
              <Text style={[styles.menuTextItem, { color: theme.colors.text }]}>
                Auto-fill
              </Text>
            </Pressable>
          </Animated.View>
        )}
        {!isVertical && (
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.horizontalWrapper}
          >
            <Pressable
              android_ripple={{ color: theme.colors.ripple }}
              style={styles.horizontalButton}
            >
              <Text style={[styles.menuTextItem, { color: theme.colors.text }]}>
                Paste
              </Text>
            </Pressable>
            <Pressable
              android_ripple={{ color: theme.colors.ripple }}
              style={styles.horizontalButton}
            >
              <Text style={[styles.menuTextItem, { color: theme.colors.text }]}>
                Undo
              </Text>
            </Pressable>
          </Animated.View>
        )}
        <Animated.View
          layout={LinearTransition}
          style={{ backgroundColor: "transparent" }}
        >
          <MorphIcons
            onPress={() => setVertical((prev) => !prev)}
            style={{ padding: 20 }}
          />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default EditMenuDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  editMenuContainer: {
    borderRadius: 10,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  rippleColor: {
    color: "rgba(0, 0, 0, 0.1)",
  },
  menuTextItem: {
    fontSize: 18,
    fontWeight: "500",
  },
  horizontalWrapper: {
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  horizontalButton: {
    backgroundColor: "transparent",
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  verticalButton: {
    paddingHorizontal: 10,
  },
});
