import { SafeAreaViewProps } from "react-native-safe-area-context";

export interface CustomSafeAreaViewProps extends SafeAreaViewProps {
  children: React.ReactNode;
  backgroundColor?: string;
  barStyle?: "light-content" | "dark-content" | undefined;
}
