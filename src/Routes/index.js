import React from 'react';

import { StackRoutes } from './stack-routes';

import { NavigationContainer } from '@react-navigation/native';

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}