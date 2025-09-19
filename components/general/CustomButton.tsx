import { scaleReturner } from "@/styles/styles";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Colors, Text, TouchableOpacity, View } from "react-native-ui-lib";
import { CustomButtonProps } from "./types/types";

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  func,
  color,
  disabled,
  loading,
  textColor,
  isTablet,
}) => {
  return (
    <TouchableOpacity
      onPress={func}
      disabled={disabled}
      center
      style={[
        localStyles.buttonContainer,
        {
          backgroundColor: !disabled ? color : Colors.grey60,
          ...(isTablet ? {} : { maxWidth: 375, alignSelf: "center" }),
        },
      ]}
    >
      <View row center>
        {loading === true ? (
          <View flex>
            <ActivityIndicator size={"small"} color={textColor} />
          </View>
        ) : (
          <Text center flex h8M color={!disabled ? textColor : Colors.grey40}>
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 12,
    height: scaleReturner(47),
    maxHeight: 55,
  },
});

export default CustomButton;
