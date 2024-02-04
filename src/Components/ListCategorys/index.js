import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export function ListCategorys() {

  const category = [
    { id: Math.random(), name: 'All games' },
    { id: Math.random(), name: 'Arcade' },
    { id: Math.random(), name: 'Action' },
    { id: Math.random(), name: 'Sports' },
    { id: Math.random(), name: 'Competitive' },
    { id: Math.random(), name: 'Strategic' }
  ]

  function handleSubmitCategory() {
    console.log('Click')
  }

  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={category}
        keyExtractor={( item ) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <TouchableOpacity onPress={() => handleSubmitCategory()}>
                <Text style={styles.title} >{item.name}</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginTop: 28
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#64748B',
    width: 85,
    height: 35,
    marginRight: 14,
    borderRadius: 8,
  },
  title: {
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    color: '#FFF'
  }
});
