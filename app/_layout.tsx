import { Stack } from "expo-router";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "react-native-reanimated";
import { useColorScheme } from "react-native";

declare module "@react-navigation/native" {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      ripple: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  let dark = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ripple: "rgba(255, 255, 255, 0.1)",
    },
  };
  let light = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ripple: "rgba(0,0,0,0.1)",
    },
  };
  const theme = colorScheme === "dark" ? dark : light;
  return (
    <ThemeProvider value={theme}>
      <Stack screenOptions={{ navigationBarColor: theme.colors.card }} />
    </ThemeProvider>
  );
}
