import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [email,setEmail] = useState('');
  const [mostraEmail,setMostraEmail] = useState('');

  function mostrar(){
    if(email == ''){
      alert("Por favor preencha todos os campos");
    }
    setMostraEmail(email);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Digite seu e-mail: </Text>
      <TextInput
        style= {styles.caixatexto}
        placeholder='Coloque aqui seu e-mail'
        onChangeText={(email) => setEmail(email)}

      >
        
      </TextInput>
    
    <Button 
      title="Exibir E-mail"
      onPress={mostrar}

    ></Button>
    <Text style={styles.textoexibir}>E-mail Digitado: {mostraEmail}</Text>
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
  caixatexto:{
    width: 310,
    borderWidth: 4,
    borderColor: '#c0c0c0',
    padding: 10,
    height: 45,
    fontSize:20,
    borderRadius:2
  },
  textoexibir:
  {
    textAling:'center',
    fontSize:20,
    color: 'grey'
  },
  texto:{
    textAlign: 'center',
    fontSize:20,
    color:'black'
  }
});
