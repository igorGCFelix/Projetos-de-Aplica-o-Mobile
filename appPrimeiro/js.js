import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  function msg(){
    alert("Você clicou no botão");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Meu nome é Igor Felix</Text>
      <Text style={styles.texto2}>Minha idade é de 16 anos.</Text>
      <Button title="Clique Aqui" onPress={msg} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:
  {
  color:'#000',
  fontSize: 34
  },
  texto2:
  {
  color:'#fff',
  fontSize:20
  }
 
});
