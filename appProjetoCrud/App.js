// Tema: carros
// tem que fazer tela login
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView } from 'react-native';
import axios from 'axios';

import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const api = 'http://192.168.1.64/2mtec/api_projeto_crud/';
  const [lista, setLista] = useState([]);
  const [buscar, setBuscar] = useState('');
  const [abrir, setAbrir] = useState(false);
  const [abrirLogin, setAbrirLogin] = useState(true);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [id, setId] = useState('');
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [marca, setMarca] = useState('');
  const [tipoCarro, setTipoCarro] = useState('');

  function mensagemDelete(id) {
    Alert.alert(
      "Excluir Registro",
      "Deseja Excluir este Registro?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancelado"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => deleteItem(id) }
      ],
      { cancelable: true }
    )
  }

  const mensagemDuplicidade = () =>
    Alert.alert(
      "Erro ao Salvar",
      "Email Já Cadastrado",
      [
        { text: "OK", onPress: () => setAbrir(true) }
      ],
      { cancelable: true }
    );

  async function listarDados() {
    const res = await axios.get(api + 'listar.php?busca=' + buscar);
    setLista(res.data.result);
  }

  function buscarDados() {
    listarDados();
  }

  useEffect(() => {
    listarDados();
  }, [])

  const mensagemDadosIncorretos = () =>
    Alert.alert(
      "Erro ao fazer o Login",
      "Dados Incorretos",
      [
        { text: "OK", onPress: () => setAbrirLogin(true) }
      ],
      { cancelable: true }
    );

  async function login() {
    const obj = { email, senha };
    const res = await axios.post(api + 'login.php', obj);
    if (res.data.success == "Dados Incorretos!") {
      mensagemDadosIncorretos();
    }
    else {
      setAbrirLogin(false);
    }
  }

  async function add() {
    const obj = { modelo, placa, marca, tipoCarro, id };
    if (id > 0) {
      const res = await axios.post(api + 'editar.php', obj);
      if (res.data.success == true) {
        limparCampos();
      }
    }

    else {
      const res = await axios.post(api + 'add.php', obj);

      if (res.data.success === true) {
        limparCampos();
      }
      if (res.data.success === 'Email jã Cadastrado!') {
        mensagemDuplicidade();
      }
    }
    listarDados();
    setAbrir(false);
  }

  async function getItem(id) {
    const res = await axios.get(api + 'buscarId.php?id=' + id);
    setId(res.data.id);
    setModelo(res.data.modelo);
    setPlaca(res.data.placa);
    setMarca(res.data.marca);
    setTipoCarro(res.data.tipoCarro);
    setAbrir(true);
  }

  async function deleteItem(id) {
    const res = await axios.get(api + "excluir.php?id=" + id);
    listarDados();
  }

  function limparCampos() {
    setModelo('');
    setPlaca('');
    setMarca('');
    setTipoCarro('');
    setId('0');
  }

  return (
    <View>
      <View style={styles.navbar}>

        <Text style={styles.textonavbar}>Lista de Usuários</Text>

        <TouchableOpacity

          style={styles.botao}
          onPress={() => setAbrir(true)}
        >
          <Ionicons name="add-outline" size={30} color="#FFF"></Ionicons>

        </TouchableOpacity>
      </View>

      <View style={styles.ViewinputBuscar}>
        <TextInput
          style={styles.inputBuscar}
          placeholder='Buscar pelo Id'
          value={buscar}
          onChangeText={(buscar) => setBuscar(buscar)}
          onChange={buscarDados()}
        >
        </TextInput>
        <Ionicons style={styles.iconeBuscar} name="search-outline" size={25} color="#4b4a49"></Ionicons>
      </View>

      <ScrollView>
        <View style={styles.grid}>

          {lista.map(item => (
            <View style={styles.griditem} key={item.id}><Text style={{ color: '#585858' }}>{item.id} - {item.modelo} - {item.placa} - {item.marca} - {item.tipoCarro} - {item.email} - {item.senha}</Text>
              <TouchableOpacity
                style={styles.gridbotaoEditar}
                onPress={() => getItem(item.id)}
              >
                <Ionicons name="create-outline" size={30} color="#50b9e1"></Ionicons>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridbotaoExcluir}
                onPress={() => mensagemDelete(item.id)}
              >
                <Ionicons name="trash" size={30} color="#e15f50"></Ionicons>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* tela login */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={abrirLogin}
      >
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <Text style={styles.textoModal}>Faça Seu Login</Text>
          </View>
          <Animatable.View
            animation="bounceInUp"
            useNativeDriver
          >

            <TextInput
              type="email"
              style={styles.input}
              placeholder="Insira seu e-mail"
              value={email}
              onChangeText={(email) => setEmail(email)}
            >
            </TextInput>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Insira sua senha"
              value={senha}
              onChangeText={(senha) => setSenha(senha)}
            >
            </TextInput>

            <TouchableOpacity
              style={styles.botaoModal}
              onPress={login}
            >
              <Text style={styles.textoBotaoModal}>Login</Text>
            </TouchableOpacity>

          </Animatable.View>
        </SafeAreaView>
      </Modal>


      {/*tela cadastro usuario */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={abrir}
      >
        <SafeAreaView style={styles.modal}>

          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => setAbrir(false)}
            >
              <Ionicons style={{ marginLeft: 5, marginRight: 5 }} name="arrow-back-outline" size={35} color="#FFF"></Ionicons>
            </TouchableOpacity>
            <Text style={styles.textoModal}>Insirir um Carro</Text>
          </View>

          {/*Animação cadastro usuario */}
          <Animatable.View
            animation="bounceInUp"
            useNativeDriver  >


            <TextInput
              type="text"
              style={styles.input}
              placeholder="Insira o modelo do carro"
              value={modelo}
              onChangeText={(modelo) => setModelo(modelo)}
            />

            <TextInput
              style={styles.input}
              placeholder="Insira a placa do Carro"
              value={placa}
              onChangeText={(placa) => setPlaca(placa)}
            />

            <TextInput
              style={styles.input}
              placeholder="Insira a marca do carro"
              value={marca}
              onChangeText={(marca) => setMarca(marca)}
            />

            <TextInput
              style={styles.input}
              placeholder="Insira o tipo do carro"
              value={tipoCarro}
              onChangeText={(tipoCarro) => setTipoCarro(tipoCarro)}
            />


            <TouchableOpacity
              style={styles.botaoModal}
              onPress={add}
            >
              <Text style={styles.textoBotaoModal}>Salvar</Text>
            </TouchableOpacity>



          </Animatable.View>

        </SafeAreaView>

      </Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#b2b2b2'

  },

  textoModal: {

    color: '#FFF',
    marginLeft: 15,
    fontSize: 25,


  },

  modalHeader: {

    marginLeft: 10,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,

  },


  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize: 13
  },
  botaoModal: {
    backgroundColor: '#00335c',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textoBotaoModal: {
    fontSize: 16,
    color: '#FFF',

  },

  navbar: {
    backgroundColor: '#00335c',
    padding: 12,
    color: '#FFF',
    flexDirection: 'row',
    marginTop: 35,

  },

  textonavbar: {
    fontSize: 20,
    color: '#FFF',
    marginTop: 4,
    marginBottom: 2,
  },

  botao: {
    position: 'absolute',
    right: 13,
    marginTop: 11,
  },


  grid: {
    marginTop: 8,

  },

  griditem: {
    padding: 11,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  gridbotaoEditar: {
    position: 'absolute',
    right: 40,
    color: '#5c7ef6',
  },

  gridbotaoExcluir: {
    position: 'absolute',
    right: 15,
    color: '#cc1414',
  },

  inputBuscar: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize: 15,
    borderBottomColor: "#767676",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
    position: 'relative',
  },

  ViewinputBuscar: {
    flexDirection: 'row',
  },

  iconeBuscar: {
    position: 'absolute',
    right: 20,
    top: 15,
  }
});
