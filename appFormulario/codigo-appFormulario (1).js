import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {Switch} from 'react-native';
import {RadioButton, TextInput} from 'react-native-paper';

export default function App() {

  const[nome,setNome] = useState('');
  const[carro,setCarro] = useState('');
  const[placa,setPlaca] = useState('');
  //valor 0 porque começa no 0
  const[modelo,setModelo] = useState(0);
  //valor minimo do carro
  const[valor,setValor] = useState(15000);
  // valor boleano, sim ou nao
  const[utilitario,setUtilitario] = useState(false);
  const[checked,setChecked] = useState('Masculino');
  
  const modelos=[
    {modeloNome:'Hatch' , valor:1},
    {modeloNome:'Pickup' , valor:2},
    {modeloNome:'Sedan' , valor:3},
    {modeloNome:'SUV' , valor:4}
  ]

  function enviarDados(){
    if(nome == '' || carro == '')
    {
      alert('Preencha todos os campos corretamente');
    }
    else{
      alert('Informações do Carro: \n\n'+
    'Nome Proprietário: '+ nome + '\n' + 
    'Sexo: '+ checked + '\n'+
    'Placa: '+ placa+ ' Carro: '+carro+'\n' +
    'Modelo: ' + modelos[modelo].modeloNome + '\n' +
    'Valor: ' + valor.toFixed(2) + '\n' +
    'Carro Utilitário: ' + (utilitario ? 'Sim' : 'Nâo'))
    }
  }
  let modeloItems = modelos.map((v,k) => {
    return <Picker.Item key={k} value={k} label={v.modeloNome}></Picker.Item>
  })
  return (
    <View style={styles.container}>
      {/* <Text style={styles.titulo}>Formulário</Text> */}
      <Text style={styles.titulo}>Informações do Carro Particular</Text>
      <View style={styles.areaFormulario}>
        <Text style={styles.textoNome}>Nome Proprietário:</Text>
        <TextInput
            style={styles.input}
            onChangeText={nome => setNome(nome)}
            placeholder='Digite aqui o nome do proprietário'
        >
        </TextInput>

        <View style={styles.areaRadio}>
          <RadioButton
            value="Masculino"
            status={checked == "Masculino" ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Masculino')}
          >  
          </RadioButton>
          <Text style={styles.textoNome}>Masculino</Text>
          <RadioButton
            value="Feminino"
            status={checked == "Feminino" ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Feminino')}
          >  
          </RadioButton>
          <Text style={styles.textoNome}>Feminino</Text>
        </View>

        <Text style={styles.textoNome}>Carro:</Text>
        <TextInput
            style={styles.input}
            onChangeText={carro => setCarro(carro)}
            placeholder='Digite aqui o nome do carro'
        >
        </TextInput>

        <Text style={styles.textoNome}>Placa do carro:</Text>
        <TextInput
            style={styles.input}
            onChangeText={placa => setPlaca(placa)}
            placeholder='Digite aqui a placa do carro'
        >
        </TextInput>

        <View style={styles.areaModelo}>
          <Text style={styles.textoNome}>Modelo:</Text>
          <Picker
            style={styles.pickerModelo}
            selectedValue={modelo}
            onValueChange={(itemValue, itemIndex) => setModelo(itemValue)}
          >
            {modeloItems}
          </Picker>
        </View>

        <View style={styles.valorCarro}>
          <Text style={styles.textoNome}>Valor do Carro:</Text>
          <Text style={styles.carroTexto}>R${valor.toFixed(0)}</Text>
        </View>

        <View style={styles.areaSlider}>
          <Slider
            minimumTrackTintColor='purple'
            thumbTintColor='purple'
            minimumValue={15000}
            maximumValue={300000}
            value={valor}
            onValueChange={(valor) => setValor(valor)}
          >            
          </Slider>
        </View>

        <View style={styles.areaUtilitario}>
          <Text style={styles.textoNome}>Utilitário</Text>
          <Switch
            trackColor={{true: 'violet'}}
            thumbColor={'purple'}
            style={{paddingTop:15}}
            value={utilitario}
            onValueChange={utilitario => setUtilitario(utilitario)}
          >
          </Switch>
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={enviarDados}
        >
          <Text style={styles.botaoTexto}>Mostrar Dados Carro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    padding:28
  },
  areaformulario:
  {
    flexDirection: 'column',
    margin: 10
  },
  textoNome:{
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
    textAlign:'left'
  },

  areaModelo:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  pickerModelo:{
    flex:1
  },
  valorArea:{
    flexDirection:'row',
    paddingBottom: 5,
  },
  areaUtilitario:{
    flexDirection: 'column', 
    alignItems: 'center'
  },
  areaRadio:{
    flexDirection: 'row', 
    alignItems: 'center',
  
  },
  botao:{
    backgroundColor: 'purple',
    width: '70%',
    alignSelf: "center",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginTop: 20,
    marginBottom: 20,
  },
  botaoTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  input:{
  borderWidth: 0.5,
  borderColor: '#000',
  width: '90%',
  borderRadius: 5,
  padding: 10,
  marginBottom: 5,
  justifyContent: "center",
  marginHorizontal: 5,
  alignSelf: "start",
  backgroundColor: '#fff',
  height: 45,
  },
  titulo:
  {
    fontSize: 25,
    color: "",
    marginTop:35,
    marginBottom: 20,
    fontWeight: 'bold'
  }
  });


// fontWeight:'bold', para colocar a letra em negrito