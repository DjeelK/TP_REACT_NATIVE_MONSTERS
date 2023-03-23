import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'

export default function CardGridTitle({title,image, onPress}) {
  return (
    <View style={styles.gridItem}>
      <Pressable onPress={onPress} style={({pressed}) =>  [ styles.button, pressed ? styles.buttonPressed : null] }>
        <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
            <Image style={styles.image} source={image} />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    gridItem : {
        flex : 1,
        margin : 8,
        height : 140,
        borderRadius : 8,
        backgroundColor : "white",
        elevation : 4,

    },
    button : {
        flex : 1,
    },
    buttonPressed : {
        opacity : 0.6,
    },
    innerContainer : {
        flex : 1,
        padding : 16,
        borderRadius : 8,
        justifyContent : "center",
        alignItems : "center",
    },
    title : {
        fontWeight : 'bold',
        fontSize : Platform.OS === 'android' ? 15 : 25,
        color : '#F68BC7',
        bottom : 55
    },
    image : {
       flex : 1,
       height : 100,
       width : 100,
       bottom : 10,
       position : 'absolute',
       borderRadius : 8
    }
})