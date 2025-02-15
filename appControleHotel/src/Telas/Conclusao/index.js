import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Conclusao({ navigation }) {

  return (
    <View style={styles.container}>
      {/* Imagem no topo */}
      <Image source={require('../../assets/logo_stain.png')} style={styles.logo} />

      {/* Conteúdo centralizado (Texto e Botões) */}
      <View style={styles.content}>
        <View style={styles.containerTexto}>
          <Text style={styles.title}>Operação realizada com sucesso</Text>
          <Text style={styles.text}>Aperte Ok para voltar à página inicial</Text>
        </View>

        {/* Botões */}
        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.textLogin}>Ok</Text>
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
    marginTop: 110, // Ajusta a posição do conteúdo (dá mais espaço acima)
  },

  // Texto
  containerTexto: {
    justifyContent: 'center',
    alignItems: 'start', // Centraliza o texto
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

  label: {
    color: '#fff', 
    marginBottom: 5, 
    fontSize: 16,
  },

  // Campos de input
  input: {
    width: '100%',
    height: 45,
    color:'#fff',
    borderColor: '#262626',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    width:320,
    marginBottom: 20,
    backgroundColor: '#1A1A1A',
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
