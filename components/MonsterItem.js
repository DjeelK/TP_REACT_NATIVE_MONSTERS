import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ButtonFav from './ButtonFav';
import { useNavigation } from '@react-navigation/native';

export default function MonsterItem({id,image, title, description, crush}) {
  const navigation = useNavigation();

  return (
    <View style={styles.monsterItem}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.crush}>{crush}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyMonsters')}>
        <Text style={styles.buttonText}> Your monsters (´･ω･`) </Text>
      </TouchableOpacity>
      <ButtonFav monsterId={id} />
    </View>
  );
}

const styles = StyleSheet.create({
  monsterItem: {
    flex : 1,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 30,
    padding: 10,
    overflow: 'hidden',
    height : 730,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    bottom : 100,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A4A4A',
    textAlign: 'center',
    textTransform: 'uppercase',
    bottom : 450
  },
  description: {
    fontSize: 15,
    color: '#4A4A4A',
    textAlign: 'center',
    bottom : 100
  },
  crush: {
    fontSize: 15,
    color: '#F95FBE',
    textAlign: 'center',
    bottom : 80
  },
  button: {
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
