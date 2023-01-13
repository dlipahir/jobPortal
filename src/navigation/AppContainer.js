/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
enableScreens(true);
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import OnBoardNavigator from '../screens/onboard/onBoardNavigation';

function HomeScreen() {
  const {navigate} = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigate('Auth')}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
function AppScreen() {
  const user = auth().currentUser;

  const signOut = async () => {
    auth()
      .signOut()
      .then(async () => {
        await GoogleSignin.signOut();
        // await GoogleSignin.revokeAccess();
      })
      .catch(e => Alert.alert('error', e.message));
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 20,
        }}>
        Welcome
      </Text>
      <Text
        style={{
          fontSize: 20,
        }}>
        {(user && user.name) || user.email || 'hello'}
      </Text>
      <TouchableOpacity
        onPress={signOut}
        style={{backgroundColor: '#aaa', padding: 10, marginTop: 20}}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onBoard">

      
        <Stack.Screen
          name="onBoard"
          component={OnBoardNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Apps"
          component={AppScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
