import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Quartos({ navigation }) {
  const [servicos, setServicos] = useState('');
  const [serviceVisible, setServiceVisible] = useState(false); // Controlar visibilidade das opções de serviço

  const toggleServiceOptions = () => {
    setServiceVisible(!serviceVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Image source={require('../../assets/logo_stain.png')} style={styles.logo} />
          <View style={styles.content}>
            <View style={styles.containerTexto}>
              <Image source={require('../../assets/img_quarto.webp')} style={styles.img} />
              <Text style={styles.title}>Apartamento Executivo</Text>
              <Text style={styles.text}>Apartamento de 4 quartos e 3 banheiros, com sala ampla, cozinha planejada, varanda gourmet e 2 vagas de garagem. Oferece áreas comuns como piscina e academia, em bairro tranquilo, próximo a escolas e com fácil acesso às vias principais. Ideal para conforto e praticidade.</Text>

              <View style={styles.tagsContainer}>
                <Text style={styles.tags}><Ionicons name="bed" size={18} color="#fff" /> 4-Quartos</Text>
                <Text style={styles.tags}><Ionicons name="water" size={18} color="#fff" /> 3-Banheiros</Text>
                <Text style={styles.tags}><Ionicons name="restaurant" size={18} color="#fff" /> 1-Cozinha</Text>
              </View>

              {/* Campo de Telefone */}
              <Text style={styles.label}>Serviços de Quarto</Text>

              <TouchableOpacity style={styles.input} onPress={toggleServiceOptions}>
                <Text style={styles.inputText}>Selecione os serviços</Text>
                <Ionicons name="caret-down" size={20} color="#fff" style={styles.icon} />
                
              </TouchableOpacity>

              {/* Opções de Serviços de Quarto */}
              {serviceVisible && (
                <View style={styles.serviceOptions}>
                  <TouchableOpacity onPress={() => setServicos('Limpeza diária')}>
                    <Text style={styles.optionText}>Limpeza diária</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setServicos('Refeições no quarto')}>
                    <Text style={styles.optionText}>Refeições no quarto</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setServicos('Lavanderia')}>
                    <Text style={styles.optionText}>Lavanderia</Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* Exibe a opção selecionada */}
              {servicos && <Text style={styles.selectedService}>Serviço selecionado: {servicos}</Text>}
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

  containerTexto: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    color: '#999999',
    marginBottom: 20,
  },

  label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
  },

  selectedService: {
    color: '#fff',
    marginBottom: 20,  // Espaço entre o serviço selecionado e o valor final
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
  },

  icon: {
    marginLeft: 10,
  },

  serviceOptions: {
    backgroundColor: '#1A1A1A',
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
  },

  optionText: {
    color: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },

  selectedService: {
    color: '#fff',
    marginBottom: 20,
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
    marginBottom: 10,  // Mantém o valor final próximo de "R$1250"
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
