import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>
        <Text style={styles.title}>
          Dev<Text style={{ color: '#FF455F' }}>Games</Text>
        </Text>

        <TouchableOpacity style={styles.buttonFavorite}>
          <Feather name="bookmark" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentSearch}>
        <TextInput placeholder='Looking for a game?' style={styles.input} placeholderTextColor={'#FFF'} />

        <TouchableOpacity>
          <Feather name="search" size={24} color="#FF455F" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  contentSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 20
  },
  input: {
    backgroundColor: '#1F2430',
    width: '90%',
    borderRadius: 20,
    padding: 15,

    fontSize: 17,
    fontFamily: 'Poppins-Regular'
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: '#FFF'
  },
  buttonFavorite: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F2430',
    width: 40,
    height: 40,
    borderRadius: '50%',
  }
});