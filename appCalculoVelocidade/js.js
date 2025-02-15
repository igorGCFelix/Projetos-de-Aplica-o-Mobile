import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [velocidade, setVelocidade] = useState('');
  const [tempo,setTempo] = useState('');
  const [distancia,setDistancia] = useState('');

  function calcularVelocidade(){
    if(tempo > 0 && distancia>0){
      setVelocidade((parseFloat(distancia) * 1000)/ (parseFloat(tempo)* 60));
    }
    else{
      setVelocidade('');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descubra a velocidade</Text>
      <Text style={styles.text}>Digite a distância</Text>
      <TextInput
        placeholder = 'Distância em quilometros'
        style={styles.input1}
        keyboardType={'numeric'}
        onChangeText={distancia => setDistancia(distancia)}
      ></TextInput>
      <Text style={styles.text}>Digite o tempo: </Text>
      <TextInput
        placeholder='tempo em horas'
        style={styles.input2}
        keyboardType={'numeric'}
        onChangeText={tempo => setTempo(tempo)}
      ></TextInput>

      <Button
        title='Calcular Velocidade'
        onPress={calcularVelocidade}
        color={'purple'}
        
      ></Button>
     {/*$ é para concatenar, o resto é ternário */}
     
     <Text style={styles.resultado}>{velocidade ? `A velocidade é: ${velocidade} m/s` : ''}</Text>
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
  title:{
    fontSize:26,
    color:'purple',
    marginBottom:10,
    fontWeight:'bold',
  },

  text:{
    fontSize:18,
    
  },

  input1:{
    fontSize:15,
    borderColor:'purple',
    paddingVertical:2,
    paddingHorizontal:10,
    borderRadius:3,
    borderWidth:2,
    marginBottom:8
  },

  input2:{
    fontSize:15,
    borderColor:'purple',
    paddingVertical:2,
    paddingHorizontal:10,
    borderRadius:3,
    borderWidth:2,
    marginBottom:20
  },

  resultado:{
    fontSize:18,
    marginTop:19,
  }
});
