import { Text, View, StyleSheet, Platform } from 'react-native';

import { Header } from '../../Components/Header';
import { ListCategorys } from '../../Components/ListCategorys';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <ListCategorys />

      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050B18',
    paddingTop: Platform.OS === 'ios' ? 50 : 20
  }
});