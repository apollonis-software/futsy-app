import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const isAuthenticated = false;
    if (isAuthenticated) {
      router.replace("/screens/onboarding/onboarding");
    } else {
      router.replace("/screens/onboarding/onboarding");
    }
  }, []);

  return null;
}
