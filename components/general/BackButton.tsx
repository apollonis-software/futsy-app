import { scaleReturner } from "@/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors, TouchableOpacity } from "react-native-ui-lib";
import { BackButtonProps } from "./types/types";

const BackButton: React.FC<BackButtonProps> = ({
  onPress,
  color = Colors.grey10,
  size = 26,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={localStyles.container}>
      <Ionicons name="chevron-back" size={scaleReturner(size)} color={color} />
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  container: {
    position: "absolute",
    top: scaleReturner(50),
    left: scaleReturner(20),
    zIndex: 1,
  },
  iconContainer: {
    width: scaleReturner(40),
    height: scaleReturner(40),
    borderRadius: scaleReturner(20),
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.grey20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default BackButton;
