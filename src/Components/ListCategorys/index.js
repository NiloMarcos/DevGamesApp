import { FlatList, Text, View } from 'react-native';

export function ListCategorys() {

  const category = [
    { id: Math.random(), name: 'All games' },
    { id: Math.random(), name: 'Arcade' },
    { id: Math.random(), name: 'Action' },
    { id: Math.random(), name: 'Sports' },
    { id: Math.random(), name: 'Competitive' },
    { id: Math.random(), name: 'Strategic' }
  ]

  return (
    <View>
      <FlatList 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={category}
        keyExtractor={( item ) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={{ color: '#FFF' }} >{item.name}</Text>
            </View>
          )
        }}
      />
    </View>
  );
}
