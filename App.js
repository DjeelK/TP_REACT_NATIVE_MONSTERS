import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { store } from './store/store'
import { Provider } from 'react-redux'
import AllMonsters from './screens/AllMonsters'
import DetailsMonsters from './screens/DetailsMonsters'
import HomeScreen from './screens/HomeScreen'
import MyMonsters from './screens/MyMonsters'

const Stack = createNativeStackNavigator

export default function App() {
  return (
    <Provider store = {store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen/>
                <Stack.Screen/>
                <Stack.Screen/>
                <Stack.Screen/>
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})