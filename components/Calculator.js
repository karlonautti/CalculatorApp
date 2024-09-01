import React, { useState } from "react";
import { StyleSheet, Text, Pressable, TextInput, View, FlatList } from "react-native";

function Calculator() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [result, setResult] = useState(null);
    const [history, setHistory] = useState([]);

    const handlePlus = () => {
        const sum = Number(firstNumber) + Number(secondNumber);
        setResult(sum);
        setHistory([...history, { key: `${history.length}`, operation: `${firstNumber} + ${secondNumber} = ${sum}` }]);
        setFirstNumber('');
        setSecondNumber('');
    }

    const handleMinus = () => {
        const diff = Number(firstNumber) - Number(secondNumber);
        setResult(diff);
        setHistory([...history, { key: `${history.length}`, operation: `${firstNumber} - ${secondNumber} = ${diff}` }]);
        setFirstNumber('');
        setSecondNumber('');
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
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
            </View>

            {result !== null && (
                <Text style={styles.result}>Result: {result}</Text>

            )}

            <FlatList
                data={history}
                renderItem={({item}) => <Text style={styles.listItem}>{item.operation}</Text>}
                ListHeaderComponent={<Text style={styles.header}>History</Text>}
                ListEmptyComponent={<Text style={styles.emptyComponent}>No data</Text>}
                ItemSeparatorComponent={
                    <View style={styles.itemSeparator}></View>
                }

            >
            </FlatList>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginTop: 50,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 20,
        margin: 5,
        width: 200,
        textAlign: 'center',
        
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
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
    buttonText: {
        color: 'white',
    },
    result: {
        margin: 5,
        fontSize: 24,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: 'blue',
    },
    listItem: {
        textAlign: 'center',
        fontSize: 20,
      },
    emptyComponent: {
        textAlign: 'center',
      },
    itemSeparator: {
        height: 1,
        backgroundColor: 'blue',
    },
});

export default Calculator