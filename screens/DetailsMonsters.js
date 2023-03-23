import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function DetailsMonsters({navigation}) {
  return (
    <View>
      <Text>DetailsMonsters</Text>
      <Button title='Go Home' onPress={() => navigation.navigate("HomeScreen")}/>
    </View>
  )
}

const styles = StyleSheet.create({})