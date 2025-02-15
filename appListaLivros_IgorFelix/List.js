import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default function List() {
    const livros=[
        {id:0, titulo:'O Pequeno Prícipe', autor:'autor1'},
        {id:1, titulo:'Livro2', autor:'autor2'},
        {id:2, titulo:'Livro3', autor:'autor3'},
        {id:3, titulo:'Livro4', autor:'autor4'},
        {id:4, titulo:'Livro5', autor:'autor5'},
        {id:5, titulo:'Livro6', autor:'autor6'},
        {id:6, titulo:'Livro7', autor:'autor7'},
        {id:7, titulo:'Livro8', autor:'autor8'}
    ]

    const renderItems = () =>{
        return livros.map((item) =>
            <TouchableOpacity
                key={item.id}
                style={styles.botao}
                onPress={() => alertItemLivros(item)}
            >
                <View style={styles.item}>
                    <Text style={styles.texto}> {item.titulo} </Text>
                </View>
            </TouchableOpacity>
        );
    };
    const alertItemLivros = (item) => {
        alert("Você clicou no livro: " + item.titulo + " que tem como autor(a): " + item.autor);
    };
    return(
        <ScrollView contentContainerStyle = {styles.container}>
            {renderItems()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao:{
    padding: 16,
    marginTop:3,
    backgroundColor:'#d45',
    alignItems: 'center',
    borderBottomWidht:7,
    borderBottomColor: '#afe'
  },
  texto:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#000'
  }
});
