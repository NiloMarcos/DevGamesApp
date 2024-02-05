import { Image, Text, View, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export function ListGames({ data }) {
 return (
   <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>
          {data.name}
        </Text>
        
        <View style={styles.contentRatings}>
          <AntDesign name="star" size={24} color="#FABB1E" />

          <Text style={styles.estrelas}>
            {data.estrelas}
          </Text> 
        </View>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginBottom: 14,
    position: 'relative'
  },
  content: {
    position: 'absolute',
    bottom: 10,
    left: 20
  },
  contentRatings: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 10
  },
  name: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#FFF',
    paddingBottom: 8
  },
  estrelas: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#FFF'
  }
});
