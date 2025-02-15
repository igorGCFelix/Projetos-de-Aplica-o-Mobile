import React,{useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

export default function App() {
  const [largParede, setLargParede] = useState('');
  const [altParede, setAltParede] = useState('');

  const [largAzulejo, setLargAzulejo] = useState('');
  const[altAzulejo, setAltAzulejo] = useState('');

  const [resultado, setResultado] = useState('');

  function calcular(){
    setResultado((largParede * altParede) / (largAzulejo * altAzulejo));
  }

  return (
    <View style={styles.container}>
      <Text
        style = {styles.Text1}
      >Veja quantos azulejos você precisa!!</Text>

      <TextInput
        placeholder="Digite a largura da parede: "
        style = {styles.TextInput}
        onChangeText={(largParede) => setLargParede(largParede)}
      ></TextInput>

      <TextInput
        placeholder="Digite a altura da parede: "
        style = {styles.TextInput}
        onChangeText={(altParede) => setAltParede(altParede)}
      ></TextInput>

      <TextInput
        placeholder="Digite a largura do azulejo: "
        style = {styles.TextInput}
        onChangeText={(largAzulejo) => setLargAzulejo(largAzulejo)}
      ></TextInput>

      <TextInput
        placeholder="Digite a altura do azulejo: "
        style = {styles.TextInput}
        onChangeText={(altAzulejo) => setAltAzulejo(altAzulejo)}
      ></TextInput>

      <Button
        title="Calcular"
        onPress={calcular}
        color = {'purple'}
      ></Button>

      <Text 
        style = {styles.Text2}
      >Você irá precisar de: {resultado} azulejo(s)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text1:{
    fontSize: 23,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    margin: 10,
  },

  Text2:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    margin: 10,
  },

  TextInput: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 10,
    margin: 10,
  },
});
