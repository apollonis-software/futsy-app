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
