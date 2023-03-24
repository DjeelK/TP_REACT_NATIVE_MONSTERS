import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { PosterMonsters } from '../data/data';

export default function DetailsMonsters({ route }) {
  const { monsterId } = route.params;
  const selectedMonster = PosterMonsters.find((monster) => monster.id === monsterId);

  return (
    <View style={styles.container}>
      <Image source={selectedMonster.image} style={styles.image} />
      <Text style={styles.title}>{selectedMonster.title}</Text>
      <View>
      <Text style={styles.description}>{selectedMonster.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color : "black"
  },
});