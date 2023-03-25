import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MonstersList({data}) {
  return (
    <View style={styles.container}>
      {data.map((item, i) => (
        <View key={i} style={styles.listItem}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export const styles = StyleSheet.create({});
