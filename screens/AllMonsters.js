import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React from 'react'
import { PosterMonsters } from '../data/data'
import CardGridTitle from '../components/CardGridTitle'

export default function AllMonsters({navigation}) {
  return (
    <FlatList data = {PosterMonsters} keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
      return(
        <CardGridTitle 
        title={itemData.item.title}
        image={itemData.item.image} 
        onPress={() => navigation.navigate('DetailsMonsters', {monsterId: itemData.item.idMonster})}/>
      )
    }}
    numColumns={3}/>
  )
}

const styles = StyleSheet.create({
  
})

