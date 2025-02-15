import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function List() {
  const produtosAlimenticios=[
    // descrição: marca, tipo do produto, peso ou litros
    {id:0, nomeProduto:'Arroz Integral', descricao:'Marca: Camil, 1kg', ingredientes:'', preco:'', valorCalorico:''},
    {id:1, nomeProduto:'Pão de Forma Tradicional', descricao:'Visconti', ingredientes:'', preco:'', valorCalorico:''},
    {id:2, nomeProduto:'Suco de Uva', descricao:'', ingredientes:'', preco:'', valorCalorico:''},
    {id:3, nomeProduto:'Refrigerante', descricao:'', ingredientes:'', preco:'', valorCalorico:''},
    {id:4, nomeProduto:'Molho de Tomate', descricao:'', ingredientes:'', preco:'', valorCalorico:''},
    {id:5, nomeProduto:'Feijão Carioca', descricao:'', ingredientes:'', preco:'', valorCalorico:''},
    {id:6, nomeProduto:'Biscoito de Maizena', descricao:'', ingredientes:'', preco:'', valorCalorico:''},
  ]

  const renderProdutos = () =>{
    return produtosAlimenticios.map((produto) =>
        <TouchableOpacity
            key={produto.id}
            style={styles.botao}
            onPress={() => alertProdutos(produto)}
        >
            <View style={styles.item}>
                <Text>{produto.nomeProduto}</Text>
            </View>
        </TouchableOpacity>
    );
  }
  const alertProdutos = (produto) => {
    alert("Informações do produto:\nNome: "+produto.nomeProduto+"\nDescrição: "+produto.descricao+"\nIngredientes: "+produto.ingredientes+"\nPreço: "+produto.preco+"\nValor Calórico: "+produto.valorCalorico);
  };

  return(
    <ScrollView contentContainerStyle = {styles.container}>
      <Text>Felix Market</Text>
      {renderProdutos()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35
  },
  botao:{
      padding: 16,
      marginTop: 3,
      backgroundColor: '#d56',
      alignItems: 'center',
      borderBottomWidht: 7,
      borderBottomColor: '#afe'
  },
  texto:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
  }
});
