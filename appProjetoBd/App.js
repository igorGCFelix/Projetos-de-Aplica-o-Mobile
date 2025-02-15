import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,View,Modal,TouchableOpacity, SafeAreaView,TextInput,Alert,ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import axios from 'axios';

export default function App() {
  const api = 'http://10.68.36.105/2mtec/apireact_listacarros/';
  const[lista, setLista] = useState([]);
  const[buscar,setBuscar] = useState('');
  const[abrir,setAbrir] = useState('');

  const [modelo,setModelo] = useState('');
  const [marca,setMarca] = useState('');
  const [placa,setPlaca] = useState('');
  const [cor,setCor] = useState('');
  const [id,setId] = useState('');

  const mensagemCadastrar = () =>
    Alert.alert(
      "Erro ao Salvar",
      "Placa já cadastrada"
      [
        {text:"OK", onPress: () => setAbrir(true)}
      ],
      {cancelable: true}
    )
    useEffect(()=>{
      listarDados();
    },[]);

    async function listarDados(){
      const res= await axios.get(api+'listar.php?busca'+buscar);
      setLista(res.data.result);
    }

    async function add(){
      const obj = {modelo,marca,placa,cor,id};
      const res = await axios.post(api + 'add.php', obj);
      if(res.data.success == true){
        limparDados();
      }
      if(res.data.success == "Placa já cadastrada"){
        mensagemCadastrar();
      }
      listarDados();
      setAbrir(false);
    }

    function limparDados(){
      setModelo("");
      setMarca("");
      setPlaca("");
      setCor("");
      setId(0);
    }

  return (
    <View>
      <View style={styles.navbar}>
        <Text style={styles.textonavbar}>Lista de Carros</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setAbrir(true)}
        >
          <Ionicons name="add" size={30} color="#fff"></Ionicons>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.grid}>
          {lista.map((item) => 
            <View style={styles.griditem} key={item.id}>
              <Text style={{color:'#585858'}}>{item.id} - {item.modelo} - {item.marca} - {item.placa} - {item.cor}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
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
              <Ionicons
                style={{marginLeft:5, marginRight:5}} name="arrow-back" size={35} color="#fff"
              >
              </Ionicons>
            </TouchableOpacity>
            <Text style={styles.textoModal}>Inserir Carro</Text>
          </View>
          <TextInput
            type="text"
            style={styles.input}
            placeholder='Insira o modelo do carro'
            value={modelo}
            onChangeText={(modelo) => setModelo(modelo)}
          >
          </TextInput>

          <TextInput
            type="text"
            style={styles.input}
            placeholder='Insira a marca do carro'
            value={marca}
            onChangeText={(marca) => setMarca(marca)}
          ></TextInput>

          <TextInput
            type="text"
            style={styles.input}
            placeholder='Insira os caracteres da placa do carro'
            value={placa}
            onChangeText={(placa) => setPlaca(placa)}
          ></TextInput>

          <TextInput
            type="text"
            style={styles.input}
            placeholder='Insira a cor do carro'
            value={cor}
            onChangeText={(cor) => setCor(cor)}
          ></TextInput>
          <TouchableOpacity
            style={styles.botaoModal}
            onPress={add}
          >
            <Text style={styles.textoBotaoModal}>Salvar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal:{
    flex: 1,
    backgroundColor:'#b2b2b2'    
  },

  textoModal:{    
    color: '#FFF',    
    marginLeft: 15,
    fontSize:25,      
  },

  modalHeader:{    
   marginLeft:10,
   marginTop:20,
   alignItems:'center',
   flexDirection:'row',
   marginBottom:30,    
  },

  input:{
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize:13
  },
  botaoModal:{
    backgroundColor: '#00335c',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    color: '#FFF',
    alignItems:'center',
    justifyContent:'center',    
  },
  textoBotaoModal:{
    fontSize:16,
    color:'#FFF',
  },
  navbar:{
    backgroundColor: '#00335c',
    padding: 12,
    color: '#FFF',
    flexDirection:'row',
    marginTop: 35,
  },
  textonavbar:{
    fontSize:20,
    color:'#FFF',
    marginTop: 4,
    marginBottom: 2,
  },
  botao:{
    position: 'absolute', 
    right: 13,
    marginTop: 11,
  },
  grid:{
    marginTop: 8,    
  },
  griditem:{
    padding: 11,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

});
