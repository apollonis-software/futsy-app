import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const { width, height } = Dimensions.get("window");
      const aspectRatio = width / height;
      const minDimension = Math.min(width, height);

      setIsTablet(minDimension >= 600 && aspectRatio > 0.6);
    };

    updateLayout();

    const subscription = Dimensions.addEventListener("change", updateLayout);

    return () => subscription?.remove();
  }, []);

  return isTablet;
};
