import {
  Pressable,
  TextInput,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';

export default Form = (props) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Término de búsqueda: {text}</Text>
      <View style={{ padding: 2 }}>
        <TextInput
          onChangeText={(text) => setText(text)}
          style={styles.textInput}
          value={text}
        />
      </View>
      <Pressable
        onPress={() => {
          props.onSubmit(text);
          setText('');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Buscar</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    width: '70%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
  },
  textInput: {
    width: 385,
    color: 'white',
    fontSize: 30,
    backgroundColor: 'blue',
    textAlign: 'center',
    height: 55,
  }
});
