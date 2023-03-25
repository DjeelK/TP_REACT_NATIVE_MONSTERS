import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function MonsterItem({id, image, title, description, crush}) {
  const navigation = useNavigation();

  return (
    <View style={styles.monsterStyle}>
      <View style={styles.containerMonster}>
        <Image style={styles.imageMonster} source={image} />
        <Text style={styles.titleMonster}>{title}</Text>
        <Text style={styles.descriptionMonster}>{description}</Text>
        <Text style={styles.crushMonster}>{crush}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonNav}
        onPress={() => navigation.navigate('MyMonsters')}>
        <Text style={styles.buttonText}> Your monsters (´･ω･`) </Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  monsterStyle: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 30,
    padding: 10,
    overflow: 'hidden',
    height: 730,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerMonster: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageMonster: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    bottom: 100,
  },
  titleMonster: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A4A4A',
    textAlign: 'center',
    textTransform: 'uppercase',
    bottom: 450,
  },
  descriptionMonster: {
    fontSize: 15,
    color: '#4A4A4A',
    textAlign: 'center',
    bottom: 100,
  },
  crushMonster: {
    fontSize: 15,
    color: '#F95FBE',
    textAlign: 'center',
    bottom: 80,
  },
  buttonNav: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#F95FBE',
    borderRadius: 20,
    padding: 10,
    width: '50%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
  },
  buttonText: {
    color: '#F95FBE',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
