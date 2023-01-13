import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import OnBoard1 from './OnBoard1';
import OnBoard2 from './OnBoard2';
import OnBoard3 from './OnBoard3';
import OnBoard4 from './OnBoard4';

const OnBoardNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="OnBoard1">
      <Stack.Screen
        name="OnBoard1"
        component={OnBoard1}
        options={{
          animation: 'none',
          animationDuration: 0,
        }}
      />
      <Stack.Screen
        name="OnBoard2"
        component={OnBoard2}
        options={{
          animation: 'none',
          animationDuration: 0,
        }}
      />
      <Stack.Screen
        name="OnBoard3"
        component={OnBoard3}
        options={{
          animation: 'none',
          animationDuration: 0,
        }}
      />
      <Stack.Screen
        name="OnBoard4"
        component={OnBoard4}
        options={{
          animation: 'none',
          animationDuration: 0,
        }}
      />
    </Stack.Navigator>
  );
};
export default OnBoardNavigator;
