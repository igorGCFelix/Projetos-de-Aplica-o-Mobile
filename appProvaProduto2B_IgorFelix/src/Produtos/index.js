
import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Button, Text, View, SafeAreaView, Image, Animated, Dimensions, ImageBackground } from 'react-native';
import { ScrollView, Directions } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const{width:larguraTela, height:alturaTela} = Dimensions.get('window');

export default function Produtos({route}) {


  //ATENÇÃO MUDAR NA LISTA O TITLE , TEXT , VALOR E A IMAGEM E ACRESCENTAR MAIS DOIS NA LISTA
    const [lista, setLista] = useState([
        

        {
            title:"Macarrao Adria Semola Pena 400g ",
            text: "Com o Macarrão Integral Penne da Adria você vai preparar uma refeição premium cheia de sabor, sem abrir mão da saúde.",
            valor: 3.59,
            img: 'https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/55240/large/macarrao-de-semola-adria-pena-400g_103746.png'
        },

        {
            title:"Motos",
            text: "Aprenda tudo sobre motos na estrada, viagens e conhecimentos de mecânica",
            valor: 40,
            img: 'https://cocamarstore.vtexassets.com/arquivos/ids/157620-1200-1200?v=637160099232470000&width=1200&height=1200&aspect=true'
        },

        {
            title:"React com Mysql",
            text: "Neste curso é mostrado o passo a passo de como conectar os aplicativos android e ios criados pelo React com um banco de dados mysql",
            valor: 50,
            img: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-mobile-banking-app-welcome-page-startup-page-h5-background-psd-image_153932.jpg'
        },
        
        
      ]);

    const [background, setBackground] = useState(lista[0].img);
     const [activeIndex, setActiveIndex] = useState(0);
     
    const handlePress = () => {
    const nextIndex = (activeIndex + 1) % lista.length; 
    setBackground(lista[nextIndex].img); 
  };

  return (
      <ScrollView style={styles.container}>
        <View style={{flex:1, height:alturaTela}}>
            <View style={{...StyleSheet.absoluteFill, backgroundColor:'#000' }}>
                <ImageBackground source={{uri: background}} style={styles.imgBg} >
                        
           
            <Text 
            style={{color: '#FFF', fontSize: 25, fontWeight: 'bold', 
            marginLeft: 10, marginVertical: 10, }}
            >
              Produtos 
            </Text>


            <ScrollView>
            <View style={styles.moreInfo}>
              <View style={{marginTop: 0}}>        

                <View style={styles.headerTitleInfo}>
                <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
                <Text style={styles.priceTitle}>R$ {lista[activeIndex].valor},00</Text>
                </View>
                
                <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
              </View>
              <TouchableOpacity 
              style={{ marginLeft: -35, marginTop: 10 }} 
              onPress={() => {                
                if (activeIndex < lista.length - 1) {
                  setActiveIndex(activeIndex + 1);
                  handlePress();
                }
                              
              }}
              >
                <Icon 
                name="arrow-circle-right" 
                color="#131313" 
                size={30} 
                />
              </TouchableOpacity>
            </View>
            </ScrollView>

            </ImageBackground>



            </View>
        </View>
      </ScrollView>
   
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
      },
      imgBg:{
        flex:1,
        width: null,
        height: null,
        opacity: 1,
        justifyContent: "flex-start",
        backgroundColor: '#000'
      },

      viewSearch:{
        marginTop: 40,
        backgroundColor: '#FFF',
        elevation: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center'
      },
      input:{
        width: '90%',
        padding: 13,
        paddingLeft: 20,
        fontSize: 17,
      },
      icon:{
        position: 'absolute',
        right: 20,
        top: 15,
      },

      slideView:{
        width: '100%',
        height: 450,
        justifyContent: 'center',
        alignItems: 'center'
      },

      carousel:{
        flex:1,
        overflow: 'visible'
      },
      carouselImg:{
        alignSelf: 'center',
        width: 200,
        height: 300,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      carouselText:{
        padding: 15,
        color: '#FFF',
        position: 'absolute',
        bottom: 10,
        left: 2,
        fontWeight: 'bold'
      },
      carouselIcon:{
        position:'absolute',
        top: 15,
        right: 15,
      },
      moreInfo:{
        backgroundColor: '#FFF',
        width: larguraTela,
        height: 100,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      movieTitle:{
        paddingLeft: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#131313',
        marginBottom: 5,
      },
      movieDesc:{
        paddingLeft: 15,
        color: '#131313',
        fontSize: 14,
        fontWeight: 'bold'
      },

      headerTitleInfo:{
          flexDirection:'row',
      },

      priceTitle:{
        paddingLeft: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#055a02',
        marginBottom: 5,
      },
});
