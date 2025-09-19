import { KeyboardTypeOptions, ViewStyle } from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";

export interface CustomSafeAreaViewProps extends SafeAreaViewProps {
  children: React.ReactNode;
  backgroundColor?: string;
  barStyle?: "light-content" | "dark-content" | undefined;
}

export interface CustomButtonProps {
  label: string;
  func: () => void;
  color: string;
  disabled?: boolean;
  loading?: boolean;
  textColor: string;
  isTablet?: boolean;
}

export interface CustomTextInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: (e?: any) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  editable?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  style?: ViewStyle;
  error?: string;
  hasError?: boolean;
}

export interface BackButtonProps {
  onPress: () => void;
  color?: string;
  size?: number;
}
