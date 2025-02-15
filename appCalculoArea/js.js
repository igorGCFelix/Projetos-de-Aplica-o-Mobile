import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [base,setBase] = useState(0);
  const [altura,setAltura] = useState(0);
  const [area,setArea] = useState(0);

  function calcularArea(){
    if (base > 0 && altura >0)
    {
      // o parseFloat(variavel) faz a conversão de string para real
      setArea((parseFloat(base) * parseFloat(altura) ) / 2);
    }
    else{
      setArea('');
    }

  }

  //dentro do return é XML
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculo da área do triângulo</Text>

      <Text style={styles.texto}>Digite a base do triângulo: </Text>

      <TextInput
        placeholder='Digite aqui o valor da base'
        style={styles.caixa}
        keyboardType={'numeric'}
        onChangeText={base => setBase(base)}
      ></TextInput>

      <Text style={styles.texto}>Digite a altura do triângulo: </Text>
      <TextInput
        placeholder='Digite aqui o valor da altura'
        style={styles.caixa}
        keyboardType={'numeric'}
        onChangeText={altura => setAltura(altura)}
      ></TextInput>

      <Button
        style={styles.botao}
        title='Calcular Área'
        onPress={calcularArea}
        color={"#c07"}
      ></Button>

      {/* usa-se crase (``) para colocar o Texto junto com a variavel, sendo o ($) para concatenar (como o (+) do c#) */}
      <Text
        style={styles.resultado}
      >{ area ? `Área do triângulo é: ${area}` : ''}</Text>
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

  titulo:{
    color:'#c05',
    fontSize: 28,
    textAlign: 'center'
  },

  texto:{
    color:'#c09',
    fontSize: 20,
    textAlign: "center"
  },

  caixa:{
    padding: 3,
    paddingHorizontal:10,
    borderWidth:2,
    borderColor: '#000',
    borderRadius:3,
    fontSize:18
  },

  botao:{
    padding: 4
  },
});
