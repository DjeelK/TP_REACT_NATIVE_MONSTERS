import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleStyle}>Monster Letter</Text>
      <Image source={require('../assets/images/PagedaccueilOff.jpg')} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AllMonsters")}>
        <Text style={styles.buttonText}> Découvre-nous ici ♡ </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  titleStyle: {
    position: 'absolute',
    top: 60,
    left: 30,
    color: 'white',
    fontSize: 50,
    zIndex: 1,
    color: "white",
    fontFamily: ""
  },
  image: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    top : 120,
    right : 52,
    marginTop: 20,
  },
  buttonText: {
    color: '#F68BC7',
    fontSize: 16,
    fontWeight: 'bold',
  },
})