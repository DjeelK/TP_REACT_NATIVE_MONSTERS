import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from './store/store';
import {Provider} from 'react-redux';
import AllMonsters from './screens/AllMonsters';
import DetailsMonsters from './screens/DetailsMonsters';
import HomeScreen from './screens/HomeScreen';
import MyMonsters from './screens/MyMonsters';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AllMonsters"
            component={AllMonsters}
            options={{title: 'Famille de monstres'}}
          />
          <Stack.Screen
            name="DetailsMonsters"
            component={DetailsMonsters}
            options={{title: 'Le monstrosor'}}
          />
          <Stack.Screen
            name="MyMonsters"
            component={MyMonsters}
            options={{title: 'Mes monstres'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
