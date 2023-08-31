import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleAddition = () => {
    const calculatedResult = parseFloat(num1) + parseFloat(num2);
    const operation = `${num1} + ${num2} = ${calculatedResult}`;
    setResult(calculatedResult);
    setHistory([...history, operation]);
  };

  const handleSubtraction = () => {
    const calculatedResult = parseFloat(num1) - parseFloat(num2);
    const operation = `${num1} - ${num2} = ${calculatedResult}`;
    setResult(calculatedResult);
    setHistory([...history, operation]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Syötä 1. numero"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Syötä 2. numero"
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={handleAddition} />
        <Button title="-" onPress={handleSubtraction} />
      </View>
      {result !== null && <Text style={styles.resultText}>Tulos: {result}</Text>}
      <View style={styles.container}>
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
        />
        </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 70
  },
  input: {
    height: 30, // Pienennetty korkeus 40:stä 30:een
    width: 150, // Määritetty kiinteä leveys
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center'
  },
  historyItem: {
    padding: 10,
    fontSize: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});

export default App;
