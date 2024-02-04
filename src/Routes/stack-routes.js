import React from "react";

import { Home } from '../Screens/Home';

import { Search } from '../Screens/Search';

import { Category } from '../Screens/Category';

import { Details } from '../Screens/Details';

import { Favorites } from '../Screens/Favorites';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function StackRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}