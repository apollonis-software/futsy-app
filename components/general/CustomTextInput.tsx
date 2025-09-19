import { scaleReturner } from "@/styles/styles";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors, Text, TextField, View } from "react-native-ui-lib";
import { CustomTextInputProps } from "./types/types";

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  editable = true,
  multiline = false,
  numberOfLines = 1,
  style,
  error,
  hasError = false,
  ...props
}) => {
  return (
    <View style={[localStyles.container, style]}>
      <TextField
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        editable={editable}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={localStyles.textInput}
        placeholderTextColor={Colors.grey40}
        fieldStyle={[
          localStyles.fieldStyle,
          hasError && localStyles.errorFieldStyle
        ]}
        {...props}
      />
      {error && (
        <Text style={localStyles.errorText}>
          {error}
        </Text>
      )}
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    marginBottom: scaleReturner(16),
  },
  fieldStyle: {
    borderWidth: 0.5,
    borderColor: "#0000001A",
    borderRadius: 12,
    paddingHorizontal: scaleReturner(16),
    paddingVertical: scaleReturner(14),
    backgroundColor: Colors.white,
  },
  errorFieldStyle: {
    borderColor: Colors.red500,
    borderWidth: 1,
  },
  textInput: {
    fontSize: scaleReturner(16),
    fontFamily: "Inter-Regular",
    color: Colors.grey10,
  },
  errorText: {
    fontSize: scaleReturner(12),
    fontFamily: "Inter-Regular",
    color: Colors.red500,
    marginTop: scaleReturner(4),
    marginLeft: scaleReturner(4),
  },
});

export default CustomTextInput;
