import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');

  const checkGuess = () => {
    const intGuess = parseInt(guess);
    setAttempts(prevAttempts => prevAttempts + 1);

    if (intGuess < randomNumber) {
      setMessage('Arvauksesi on liian pieni!');
    } else if (intGuess > randomNumber) {
      setMessage('Arvauksesi on liian suuri!');
    } else {
      Alert.alert(`Onneksi olkoon! Arvasit oikein ${attempts} yrityksellä!`);
      resetGame();
    }
  };

  const resetGame = () => {
    setGuess('');
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts(0);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number guessing game</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={guess}
        onChangeText={(text) => setGuess(text)}
        placeholder="Anna arvauksesi"
      />
      <Button title="Make guess" onPress={checkGuess} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 5
  },
  message: {
    fontSize: 18,
    marginTop: 20,
    color: 'red'
  }
});
