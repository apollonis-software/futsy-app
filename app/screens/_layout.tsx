import { Stack } from 'expo-router';

export default function ScreensLayout() {
  return (
    <Stack>
      <Stack.Screen name="onboarding/onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
    </Stack>
  );
} 