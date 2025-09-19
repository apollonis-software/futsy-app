import { useFonts } from 'expo-font';

// Font dosyalarını yüklemek için hook
export const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    'Inter-Thin': require('../assets/fonts/Inter-Thin.otf'),
    'Inter-ThinItalic': require('../assets/fonts/Inter-ThinItalic.otf'),
    'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.otf'),
    'Inter-ExtraLightItalic': require('../assets/fonts/Inter-ExtraLightItalic.otf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.otf'),
    'Inter-LightItalic': require('../assets/fonts/Inter-LightItalic.otf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.otf'),
    'Inter-Italic': require('../assets/fonts/Inter-Italic.otf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.otf'),
    'Inter-MediumItalic': require('../assets/fonts/Inter-MediumItalic.otf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.otf'),
    'Inter-SemiBoldItalic': require('../assets/fonts/Inter-SemiBoldItalic.otf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.otf'),
    'Inter-BoldItalic': require('../assets/fonts/Inter-BoldItalic.otf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.otf'),
    'Inter-ExtraBoldItalic': require('../assets/fonts/Inter-ExtraBoldItalic.otf'),
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
    'Inter-BlackItalic': require('../assets/fonts/Inter-BlackItalic.otf'),
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  return fontsLoaded;
};
