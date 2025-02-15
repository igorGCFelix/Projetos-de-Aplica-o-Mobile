import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro({ navigation }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rg, setRg] = useState('');
  const [sexo, setSexo] = useState('');

  return (
    <View style={styles.container}>
      {/* Imagem no topo */}
      <Image source={require('../../assets/logo_stain.png')} style={styles.logo} />

      {/* ScrollView para tornar a tela rolável */}
      <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <View style={styles.containerTexto}>
            <Text style={styles.title}>Cadastro do Cliente</Text>
            <Text style={styles.text}>Preencha os requisitos a seguir para concluir o seu cadastro</Text>

            {/* Campo de Nome */}
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholderTextColor="#6666"
              placeholder="Digite seu nome" 
            />

            {/* Campo do RG */}
            <Text style={styles.label}>RG</Text>
            <TextInput
              style={styles.input}
              value={rg}
              onChangeText={setRg}
              placeholderTextColor="#6666"
              placeholder="Digite seu RG"
              keyboardType="phone-pad"
            />

            {/* Campo de Telefone */}
            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholderTextColor="#6666"
              placeholder="Digite seu telefone"
              keyboardType="phone-pad"
            />

            {/* Campo do Sexo */}
            <Text style={styles.label}>Sexo</Text>
            <TextInput
              style={styles.input}
              value={sexo}
              onChangeText={setSexo}
              placeholderTextColor="#6666"
              placeholder="Digite seu sexo biológico"
            />

            {/* Campo de Senha */}
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#6666"
              placeholder="Digite sua senha"
              secureTextEntry={true} // Oculta o texto digitado
            />
          </View>

          {/* Botões */}
          <View style={styles.areaBotao}>
            <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate("Conclusao")}>
              <Text style={styles.textLogin}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.navigate("Contas")}>
              <Text style={styles.textLogin}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
    paddingTop: 50, // Espaçamento entre a borda superior e a imagem
  },

  logo: {
    width: 120, // Define a largura da imagem
    height: 120, // Define a altura da imagem
    resizeMode: 'contain', // Garante que a proporção da imagem seja mantida
    marginBottom: 20, // Espaço entre a imagem e o conteúdo abaixo
  },

  scrollContent: {
    width: '100%', // Para os elementos ocuparem toda a largura
    paddingHorizontal: 20, // Espaçamento lateral
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },

  content: {
    justifyContent: 'flex-start', // Mantém o conteúdo mais para cima
    alignItems: 'center', // Centraliza os elementos horizontalmente
    width: '100%', // Garante que o conteúdo ocupe toda a largura
  },

  containerTexto: {
    justifyContent: 'center',
    alignItems: 'flex-start', // Centraliza o texto à esquerda
    width: '100%',
  },

  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10, // Espaço entre o título e o texto
  },

  text: {
    color: '#999999',
    marginBottom: 20, // Espaço entre o texto e os campos de input
  },

  label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
  },

  input: {
    width: 320, // Mantém o tamanho dos TextInputs
    height: 45,
    color: '#fff',
    borderColor: '#262626',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#1A1A1A',
  },

  areaBotao: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom:40,
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