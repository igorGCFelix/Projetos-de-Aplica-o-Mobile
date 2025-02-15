import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Contas({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Imagem no topo */}
      <Image source={require('../../assets/logo_stain.png')} style={styles.logo} />

      {/* Conteúdo centralizado (Texto e Botões) */}
      <View style={styles.content}>
        <View style={styles.containerTexto}>
          <Text style={styles.title}>Já tem uma conta?</Text>
          <Text style={styles.text}>Faça o Login ou o Cadastro</Text>
        </View>

        {/* Botões */}
        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.textLogin}>Cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'flex-start', // Deixa o conteúdo começar do topo
    paddingTop: 50, // Espaçamento entre a borda superior e a imagem
  },

  logo: {
    width: 120, // Define a largura da imagem
    height: 120, // Define a altura da imagem
    resizeMode: 'contain', // Garante que a proporção da imagem seja mantida
    marginBottom: 20, // Espaço entre a imagem e o conteúdo abaixo
  },

  content: {
    flex: 1,
    justifyContent: 'flex-start', // Mantém o conteúdo um pouco acima do centro
    alignItems: 'center', // Centraliza os elementos horizontalmente
    width: '100%', // Garante que o conteúdo ocupe a largura total da tela
    paddingHorizontal: 20, // Adiciona um espaçamento nas laterais
    marginTop: 90, // Ajusta a posição do conteúdo (dá mais espaço acima)
  },

  // Texto
  containerTexto: {
    justifyContent: 'center',
    alignItems: 'center', // Centraliza o texto
  },

  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10, // Espaço entre o título e o texto
  },

  text: {
    color: '#999999',
    marginBottom: 20, // Espaço entre o texto e os botões
  },

  // Botões
  areaBotao: {
    flexDirection: 'row',
    marginTop: 20, // Espaço entre o texto e os botões
  },

  botaoLogin: {
    backgroundColor: '#66C8FF',
    paddingVertical: 13,
    paddingHorizontal: 35,
    borderRadius: 5,
    marginHorizontal: 10,
  },

  textLogin: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },

  botaoCadastro: {
    backgroundColor: '#303233',
    paddingVertical: 13,
    paddingHorizontal: 23,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});