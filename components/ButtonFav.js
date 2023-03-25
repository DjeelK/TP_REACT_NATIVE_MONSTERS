    import React, { useState } from 'react';
    import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

    export default function ButtonFav({ isfav, onPress }) {
    const [showMessage, setShowMessage] = useState(false);
    const buttonLabel = isfav ? "Unlike" : "Like";

    const handlePress = () => {
        onPress();
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
    }

    return (
        <View style={styles.container}>
        {showMessage && <Text style={styles.message}>Adopté ♡</Text>}
        <TouchableOpacity style={[styles.button, isfav && styles.likedButton]} onPress={handlePress}>
            <Text style={styles.text}>{buttonLabel}</Text>
        </TouchableOpacity>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FFCFF1',
        padding: 5,
        borderRadius: 5,
        bottom: 2,
        width: 70,
        height: 30,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    likedButton: {
        backgroundColor: '#8BE5CC',
    },
    message: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 5,
        marginRight: 10,
        right : 10,
        fontSize: 14,
        borderWidth: 1,
        borderColor: 'black',

    },
    }); 