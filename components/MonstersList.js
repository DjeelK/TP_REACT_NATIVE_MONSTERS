import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MonstersList({ data }) {
  return data.map((item, i) => (
    <View key={i} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({

});