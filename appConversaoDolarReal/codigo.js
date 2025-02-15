import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [valor, setValor] = useState('');
  const [valorR, setValorR] = useState('');
  

  function converter() {
    if (valor == '' ) {

      alert("Certifique-se de preencher todas as informações.");

    }
    else {
      setValorR(valor*4.98);
    }

  }


  return (
    <View style={styles.container}>

      <Text style={styles.title1}>Conversão cambial</Text>
      <Text style={styles.txtInformacoes}>Preencha a informação a seguir: </Text>


      <TextInput
        placeholder = 'Digite o valor em dólares.'
        style = {styles.txtInput}
        onChangeText = {(valor) => setValor(valor)}
        >
      </TextInput>


      <Button
        color={"purple"}
        title="Converter"
        onPress={converter}
        
        > </Button>

      
      <Text style={styles.textoResultado}>Valor em reais: {valorR} reais</Text>
      
      
      
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

  title1:
  {
    color: 'purple',
    fontSize: 25,
    textoAling: 'center',
    paddingRight: 10,
  },

  txtInformacoes:
  {
    color: 'black',
    fontSize: 17,
    textoAling: 'center',
    paddingRight: 10,
    paddingBottom:15,
  },

  txtInput:
  {
    width: 250,
    height: 45,
    padding:13,
    fontSize: 14,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'grey',
    
  },

  
  textoResultado:
  {
    textoAlign: 'center',
    color: '',
    fontSize: 17,
    paddingTop:5,
  },

  

  
});



