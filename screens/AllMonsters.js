import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function AllMonsters({navigation}) {
  return (
    <View>
      <Text>AllMonsters</Text>
      <Button title='Go Details' onPress={() => navigation.navigate("DetailsMonsters")}/>
    </View>
  )
}

const styles = StyleSheet.create({})