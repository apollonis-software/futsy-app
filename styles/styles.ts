import { Dimensions, StyleSheet } from "react-native";

export const phoneSizes = Dimensions.get("window");
export const scaleReturner = (px: number) => {
  const { width, height } = phoneSizes;
  const aspectRatio = width / height;
  const minDimension = Math.min(width, height);

  if (minDimension >= 600 && aspectRatio > 0.6) {
    return px * 1.15;
  } else {
    const hypotenuse = Math.sqrt(
      Math.pow(phoneSizes.width, 2) + Math.pow(phoneSizes.height, 2)
    );
    const scale = 987 / px;
    const result = hypotenuse / scale;
    return result;
  }
};
export const styles = StyleSheet.create({
  generalSafeArea: {
    flex: 1,
  },
});
