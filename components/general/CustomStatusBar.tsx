import React from "react";
import { StatusBar, StatusBarProps } from "react-native";

const CustomStatusBar: React.FC<StatusBarProps> = ({
  barStyle,
  backgroundColor,
}) => {
  return <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />;
};
export default CustomStatusBar;
