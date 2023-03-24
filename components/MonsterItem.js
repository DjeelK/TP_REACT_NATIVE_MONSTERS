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

const styles = StyleSheet.create({});
