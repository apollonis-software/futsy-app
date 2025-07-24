import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomStatusBar from "./CustomStatusBar";
import { CustomSafeAreaViewProps } from "./types/types";

const GeneralBackground: React.FC<CustomSafeAreaViewProps> = ({
  children,
  backgroundColor,
  barStyle,
  ...props
}) => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: backgroundColor ?? "#EAF2E5" }}
      {...props}
    >
      <CustomStatusBar
        barStyle={
          barStyle !== undefined
            ? barStyle
            : colorScheme === "dark"
            ? "light-content"
            : "dark-content"
        }
        backgroundColor={backgroundColor ?? "#EAF2E5"}
      />
      {children}
    </SafeAreaView>
  );
};

export default GeneralBackground;
