import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Reserva({ navigation }) {
  const [servicos, setServicos] = useState('');
  const [serviceVisible, setServiceVisible] = useState(false);
  const [tipoQuarto, setTipoQuarto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valorDiaria, setValorDiaria] = useState('');
  const [dataEntrada, setDataEntrada] = useState('');
  const [dataSaida, setDataSaida] = useState('');
  const [quantidadeDias, setQuantidadeDias] = useState('');
  const [numeroQuarto, setNumeroQuarto] = useState('');
  const [andarQuarto, setAndarQuarto] = useState('');
  const [valorFinal, setValorFinal] = useState('');
  const [tipoQuartoVisible, setTipoQuartoVisible] = useState(false);

  const toggleServiceOptions = () => {
    setServiceVisible(!serviceVisible);
  };

  const toggleTipoQuartoOptions = () => {
    setTipoQuartoVisible(!tipoQuartoVisible);
  };

  const calcularValorFinal = () => {
    const valorTotal = parseFloat(valorDiaria) * parseInt(quantidadeDias);
    setValorFinal(valorTotal.toFixed(2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Image source={require('../../assets/logo_stain.png')} style={styles.logo} />
          <View style={styles.content}>
            <Text style={styles.title}>Reserva</Text>
            <Text style={styles.text}>Preencha as informações abaixo para poder reservar um quarto.</Text>

            {/* Tipo do Quarto */}
            <Text style={styles.label}>Tipo de Quarto</Text>
            <TouchableOpacity style={styles.input} onPress={toggleTipoQuartoOptions}>
              <Text style={styles.inputText}>
                {tipoQuarto ? tipoQuarto : 'Selecione o tipo de quarto'}
              </Text>
              <Ionicons name="caret-down" size={20} color="#fff" style={styles.icon} />
            </TouchableOpacity>

            {/* Exibir opções de tipos de quarto */}
            {tipoQuartoVisible && (
              <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.option} onPress={() => { setTipoQuarto('Executivo'); setTipoQuartoVisible(false); }}>
                  <Text style={styles.optionText}>Executivo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => { setTipoQuarto('Standard'); setTipoQuartoVisible(false); }}>
                  <Text style={styles.optionText}>Standard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => { setTipoQuarto('Luxo'); setTipoQuartoVisible(false); }}>
                  <Text style={styles.optionText}>Luxo</Text>
                </TouchableOpacity>
              </View>
            )}
            
            {/* Valor da Diária */}
            <Text style={styles.label}>Valor da Diária</Text>
            <View style={styles.valorFinal}>
              <Ionicons name="card" size={24} color="#fff" style={styles.carteira} />
              <Text style={{ color: '#fff', fontSize: 20 }}>R$1250</Text>
            </View>

            {/* Data de Entrada */}
            <Text style={styles.label}>Data de Entrada</Text>
            <TextInput
              style={styles.input}
              placeholder="Escolha a data"
              placeholderTextColor="#999"
              keyboardType="default"
              value={dataEntrada}
              onChangeText={setDataEntrada}
            />

            {/* Data de Saída */}
            <Text style={styles.label}>Data de Saída</Text>
            <TextInput
              style={styles.input}
              placeholder="Escolha a data"
              placeholderTextColor="#999"
              keyboardType="default"
              value={dataSaida}
              onChangeText={setDataSaida}
            />

            {/* Quantidade de Dias */}
            <Text style={styles.label}>Quantidade de Dias</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a quantidade"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={quantidadeDias}
              onChangeText={setQuantidadeDias}
              onEndEditing={calcularValorFinal}
            />

            {/* Número do Quarto */}
            <Text style={styles.label}>Número do Quarto</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o número do quarto"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />

            {/* Andar do Quarto */}
            <Text style={styles.label}>Andar do Quarto</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o andar do quarto"
              placeholderTextColor="#999"
              keyboardType="numeric"
              onChangeText={setAndarQuarto}
            />

            <Image source={require('../../assets/img_quarto.webp')} style={styles.img} />
            <Text style={styles.title}>Apartamento Executivo</Text>
            <Text style={styles.text}>Apartamento de 4 quartos e 3 banheiros, com sala ampla, cozinha planejada, varanda gourmet e 2 vagas de garagem. Oferece áreas comuns como piscina e academia, em bairro tranquilo, próximo a escolas e com fácil acesso às vias principais. Ideal para conforto e praticidade.</Text>

            <View style={styles.tagsContainer}>
              <Text style={styles.tags}><Ionicons name="bed" size={18} color="#fff" /> 4-Quartos</Text>
              <Text style={styles.tags}><Ionicons name="water" size={18} color="#fff" /> 3-Banheiros</Text>
              <Text style={styles.tags}><Ionicons name="restaurant" size={18} color="#fff" /> 1-Cozinha</Text>
            </View>


            {/* Valor Final */}
            <Text style={styles.label}>Valor Final da Reserva</Text>
            <View style={styles.valorFinal}>
              <Ionicons name="card" size={24} color="#fff" style={styles.carteira} />
              <Text style={{ color: '#fff', fontSize: 20 }}>R$1250</Text>
            </View>

            {/* Botões */}
            <View style={styles.areaBotao}>
              <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate("Conclusao")}>
                <Text style={styles.textLogin}>Enviar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.textLogin}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },

  innerContainer: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 330,
    height: 310,
    borderRadius: 8,
    marginBottom: 30,
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10,
  },

  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  tags: {
    color: '#fff',
    padding: 8,
    paddingHorizontal: 12,
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 30,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 30,
  },

  label: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },

  input: {
    width: 320,
    height: 45,
    color: '#fff',
    borderColor: '#262626',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#1A1A1A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
  },

  icon: {
    alignSelf: 'center',
  },

  selectedService: {
    color: '#fff',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },

  serviceOptions: {
    backgroundColor: '#4B4B4B',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
  },

  optionText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },

  optionsContainer: {
    backgroundColor: '#4B4B4B',
    borderRadius: 8,
    width: '100%',
    marginTop: 10,
    paddingVertical: 5,
  },

  option: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },

  areaBotao: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
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

  carteira: {
    marginRight: 8, // Adiciona o espaço entre o ícone e o texto
  },

  valorFinal: {
    color: '#fff',
    fontSize: 20,
    padding: 14,
    paddingLeft: 15,
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row', // Adiciona row para colocar o ícone e o texto lado a lado
    alignItems: 'center', // Alinha verticalmente os itens no centro
    justifyContent: 'flex-start', // Alinha o conteúdo à esquerda
  },
});
