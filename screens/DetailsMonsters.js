import React, {useLayoutEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonFav from '../components/ButtonFav';
import MonsterItem from '../components/MonsterItem';
import {Monsters} from '../data/data';
import {addIds, removeIds} from '../store/favMonster';

export default function DetailsMonsters({navigation, route}) {
  const monsterId = route.params.monsterId;
  const myMonster = Monsters.find(monster => monster.id == monsterId);
  const dispatch = useDispatch();
  const favoriteMonsters = useSelector(state => state.favMonster.ids);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <ButtonFav
            isfav={favoriteMonsters.includes(monsterId)}
            onPress={addOrRemove}
          />
        );
      },
    });
  }, [navigation, favoriteMonsters, monsterId]);

  function addOrRemove() {
    dispatch(
      favoriteMonsters.includes(monsterId)
        ? removeIds({id: monsterId})
        : addIds({id: monsterId}),
    );
  }

  const monsterProps = {
    id: myMonster.id,
    image: myMonster.image,
    title: myMonster.title,
    description: myMonster.description,
    crush: myMonster.crush,
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={[monsterProps]}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <MonsterItem {...item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
