import React, { useState } from "react";
import { StyleSheet, Text, Pressable, TextInput, View } from "react-native";

function Calculator() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [result, setResult] = useState(null);

    const handlePlus = () => {
        const sum = Number(firstNumber) + Number(secondNumber);
        setResult(sum);
    }

    const handleMinus = () => {
        const diff = Number(firstNumber) - Number(secondNumber);
        setResult(diff);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Give first number"
                value={firstNumber}
                onChangeText={text => setFirstNumber(text)}>
            </TextInput>

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Give second number"
                value={secondNumber}
                onChangeText={text => setSecondNumber(text)}>
            </TextInput>
        

            <View style={styles.buttonContainer}>
            <Pressable
                style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed
                    ]}
                    onPress={handlePlus}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed
                    ]}
                    onPress={handleMinus}
                >
                </Pressable>
            </View>

                {result !== null && (
                    <Text style={styles.result}>Result: {result}</Text>

                )}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        width: '80%',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        marginHorizontal: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'blue',
        alignItems: 'center',
    },
    buttonPressed: {
        backgroundColor: 'darkgrey'
    },
    result: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Calculator