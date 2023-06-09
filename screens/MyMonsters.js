import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Monsters} from '../data/data';
import MonsterItem from '../components/MonsterItem';
import {useSelector, useDispatch} from 'react-redux';
import {addIds} from '../store/favMonster';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyMonsters({navigation}) {
  const monsterFavoriteId = useSelector(state => state.favMonster.ids);
  const monsters = Monsters.filter(item => {
    if (monsterFavoriteId.includes(item.id)) {
      return item;
    }
  });

  const dispatch = useDispatch();

  const handleAddMonsterToFavorites = id => {
    dispatch(addIds({id}));
  };

  useEffect(() => {
    AsyncStorage.getItem('monsterFavorites').then(savedFavorites => {
      const parsedFavorites = JSON.parse(savedFavorites);

      if (parsedFavorites) {
        parsedFavorites.forEach(id => {
          dispatch(addIds({id}));
        });
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('monsterFavorites', JSON.stringify(monsterFavoriteId));
  }, [monsterFavoriteId]);

  return (
    <FlatList
      data={monsters}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        const monsterProps = {
          id: item.id,
          image: item.image,
          title: item.title,
          onAddToFavorites: () => handleAddMonsterToFavorites(item.id),
        };
        return <MonsterItem {...monsterProps} />;
      }}
    />
  );
}

const styles = StyleSheet.create({});
