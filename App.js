import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen'

import { Routes } from './src/Routes';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Bold': require('./src/assets/Fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./src/assets/Fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./src/assets/Fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('./src/assets/Fonts/Poppins-Light.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  SplashScreen.hideAsync()

  return  <Routes />
}
