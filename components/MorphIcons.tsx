import { Pressable, ViewStyle } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";

const MorphIcons = ({
  size = 30,
  onPress,
  style,
}: {
  size?: number;
  onPress?: () => void;
  style?: ViewStyle;
}) => {
  const active = useSharedValue(false);
  const theme = useTheme();
  const width = size;
  const iconWidth = width / 2.5;
  const iconHeight = iconWidth / 4;
  const iconItemWidth = iconHeight;
  const initialSize = 1.5;
  //   const iconInitialSize = 1.2 * iconHeight;
  const iconInitialSize = iconHeight;
  const topMiddle = iconWidth / 2 - iconHeight / 2;
  const hypotenuse = Math.sqrt(Math.pow(iconWidth, 2) + Math.pow(iconWidth, 2));
  const leftMiddle = iconWidth / 2 - iconItemWidth / 2;
  const leftAdjust = (iconWidth - hypotenuse) / 2;

  const wrapperAnimatedStyle = useAnimatedStyle(() => {
    return {
      left: active.value ? withTiming(leftAdjust) : withTiming(0),
    };
  });

  const topBarAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: active.value ? withTiming(iconWidth) : withTiming(iconInitialSize),
      height: active.value
        ? withTiming(iconHeight)
        : withTiming(iconInitialSize),
      top: active.value
        ? withTiming(topMiddle)
        : withTiming(-iconItemWidth / 2),
      left: active.value ? withTiming(0) : withTiming(leftMiddle),
      transform: [
        { rotate: active.value ? withTiming("-45deg") : withTiming("0deg") },
        { scale: active.value ? withTiming(1) : withTiming(initialSize) },
      ],
      transformOrigin: [iconHeight / 2, iconHeight / 2, 0],
      //   borderRadius: active.value ? withTiming(0) : withTiming(100),
      borderRadius: active.value ? withTiming(100) : withTiming(100),
    };
  });

  const middleBarAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: active.value
        ? withTiming(hypotenuse)
        : withTiming(iconInitialSize),
      height: active.value
        ? withTiming(iconHeight)
        : withTiming(iconInitialSize),
      left: active.value ? withTiming(0) : withTiming(leftMiddle),
      transform: [
        { scale: active.value ? withTiming(1) : withTiming(initialSize) },
      ],
      //   borderRadius: active.value ? withTiming(0) : withTiming(100),
      borderRadius: active.value ? withTiming(100) : withTiming(100),
      borderTopLeftRadius: 100,
      borderBottomLeftRadius: 100,
    };
  });

  const bottomBarAnimatedStyle = useAnimatedStyle(() => ({
    width: active.value ? withTiming(iconWidth) : withTiming(iconInitialSize),
    height: active.value ? withTiming(iconHeight) : withTiming(iconInitialSize),
    bottom: active.value
      ? withTiming(topMiddle)
      : withTiming(-iconItemWidth / 2),
    left: active.value ? withTiming(0) : withTiming(leftMiddle),
    transform: [
      { rotate: active.value ? withTiming("45deg") : withTiming("0deg") },
      { scale: active.value ? withTiming(1) : withTiming(initialSize) },
    ],
    transformOrigin: [iconHeight / 2, iconHeight / 2, 0],
    // borderRadius: active.value ? withTiming(0) : withTiming(100),
    borderRadius: active.value ? withTiming(100) : withTiming(100),
  }));

  return (
    <Pressable
      onPress={() => {
        active.value = !active.value;
        onPress && onPress();
      }}
      android_ripple={{
        color: theme.colors.ripple,
        foreground: true,
        borderless: true,
      }}
      style={[
        {
          // backgroundColor: theme.colors.border,
          // backgroundColor: "red",
          width: width,
          aspectRatio: 1,
          borderRadius: size,
          justifyContent: "center",
          alignItems: "center",
          // overflow: "hidden",
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          {
            width: iconWidth,
            aspectRatio: 1,
            // backgroundColor: "transparent",
            // backgroundColor: "green",
          },
          wrapperAnimatedStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              width: iconItemWidth,
              height: iconHeight,
              backgroundColor: theme.colors.text,
              position: "absolute",
              top: 0,
            },
            topBarAnimatedStyle,
          ]}
        />
        <Animated.View
          style={[
            {
              width: iconItemWidth,
              height: iconHeight,
              top: topMiddle,
              backgroundColor: theme.colors.text,
              position: "absolute",
            },
            middleBarAnimatedStyle,
          ]}
        />
        <Animated.View
          style={[
            {
              width: iconItemWidth,
              height: iconHeight,
              backgroundColor: theme.colors.text,
              position: "absolute",
              bottom: 0,
            },
            bottomBarAnimatedStyle,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

export default MorphIcons;
