import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      {/* Imagem no topo */}
      <Image source={require('../../assets/logo_stain.png')} style={styles.logo} />

      {/* Conteúdo centralizado (Texto e Botões) */}
      <View style={styles.content}>
        <View style={styles.containerTexto}>
          <Text style={styles.title}>Início</Text>
        </View>

        {/* Botões */}
        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Reserva")}>
            <Text style={styles.textButton}>Reserva de quartos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Quartos")}>
            <Text style={styles.textButton}>Visualizar quartos reservados</Text>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 40,
  },


  containerTexto: {
    justifyContent: 'center',
    alignItems: 'flex-start', // Alinha o texto "Início" à esquerda
    width: '90%', // Mesma largura dos botões
    paddingHorizontal: 20, // Espaçamento lateral interno
  },

  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 2,
    textAlign: 'left', // Alinha o texto "Início" à esquerda
  },

  text: {
    color: '#999999',
    marginBottom: 20,
  },

  label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
  },

  input: {
    width: '100%',
    height: 45,
    color: '#fff',
    borderColor: '#262626',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    width: 320,
    marginBottom: 20,
    backgroundColor: '#1A1A1A',
  },

  areaBotao: {
    flexDirection: 'row',
    marginTop: 20, // Espaço entre os botões
    width: '100%', // Garante que os botões ocupem a largura total
    justifyContent: 'center', // Centraliza os botões horizontalmente no container pai
  },

  botao: {
    backgroundColor: '#1A1A1A',
    borderColor: '#262626',
    borderWidth: 1,
    paddingVertical: 13, // Altura do botão
    paddingStart: 20, // Espaço interno à esquerda do texto do botão
    borderRadius: 5,
    width: '90%', // Faz os botões mais largos
  },

  textButton: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left', // Alinha o texto do botão à esquerda
  },

  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20, // Adiciona um espaçamento lateral geral
  },

});
