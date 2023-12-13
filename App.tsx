import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { Home } from "./src/screens/Home";
import { styles } from './styles';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle(Platform.OS === 'ios'? 'light-content': 'default')
  }, []);

  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter/static/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter/static/Inter-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Home/>
    </View>
  );
}
