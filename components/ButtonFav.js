    import React, {useState} from 'react';
    import {StyleSheet, Text, Pressable} from 'react-native';

    export default function ButtonFav({onPress}) {
    const [messageVisible, setMessageVisible] = useState(false);

    const handlePress = () => {
        setMessageVisible(true);
        setTimeout(() => {
        setMessageVisible(false);
        }, 2000);
    };

    return (
        <>
        <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.text}> + </Text>
        </Pressable>
        {messageVisible && <Text style={styles.message}>Adopté ♡</Text>}
        </>
    );
    }

    const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFCFF1',
        padding: 5,
        borderRadius: 5,
        width: 30,
        height: 30,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'absolute',
        top: 320,
        right: 20,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    message: {
        position: 'absolute',
        top: 280,
        right: 20,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        zIndex: 1,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'black',
    },
    });