import { useCallback } from 'react';

import { StatusBar } from 'expo-status-bar';

import { Platform, StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen'

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

  return (
    <View style={styles.container} >
      <Text style={{ fontFamily: 'Poppins-Bold' }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 70 : 10
  }
})
