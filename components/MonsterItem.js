import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function MonsterItem({image, title, description, crush }) {
  return (
    <View style={styles.monsterItem}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.crush}>{crush}</Text>
      </View>
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
  cardContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A4A4A',
    textAlign: 'center',
    textTransform: 'uppercase',
    top : 20,
  },
  description: {
    fontSize: 15,
    color: '#4A4A4A',
    textAlign: 'center',
    top : 30,
  },
  crush: {
    fontSize: 15,
    color: '#F95FBE',
    textAlign: 'center',
    top:70,
  },
});