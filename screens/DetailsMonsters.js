import React from 'react';
import { StyleSheet, Text, Image, FlatList } from 'react-native';
import MonsterItem from '../components/MonsterItem';
import { Monsters } from '../data/data';


export default function DetailsMonsters({route}) {
  const monsterId = route.params.monsterId;
  const myMonster = Monsters.find((monster) => monster.id == monsterId);
  console.log(monsterId);

  return (
    <FlatList
      data={[myMonster]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const monsterProps = {
          id: item.id,
          image: item.image,
          title: item.title,
          description: item.description,
          crush: item.crush,
        };
        return <MonsterItem {...monsterProps} />;
        
      }}
    />
  );
}

const styles = StyleSheet.create({});