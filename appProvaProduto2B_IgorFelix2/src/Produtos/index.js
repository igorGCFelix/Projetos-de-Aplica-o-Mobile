import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Dimensions, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width: larguraTela, height: alturaTela } = Dimensions.get('window');

export default function Produtos({ route }) {
  const [lista, setLista] = useState([
    {
      title: "Macarrão Adria Sêmola Penne 400g",
      text: "Com o Macarrão Integral Penne da Adria você vai preparar uma refeição premium cheia de sabor, sem abrir mão da saúde.",
      valor: 3.59,
      img: 'https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/55240/large/macarrao-de-semola-adria-pena-400g_103746.png'
    },
    {
      title: "Arroz Tio João Tipo 1 5kg",
      text: "Arroz Tio João Tipo 1 é ideal para o preparo de suas refeições diárias, oferecendo qualidade e sabor em cada grão.",
      valor: 19.90,
      img: 'https://www.tioj.com.br/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/a/r/arroz_tio_joao_5kg.jpg'
    },
    {
      title: "Feijão Carioca 1kg",
      text: "O Feijão Carioca 1kg é uma opção deliciosa e saudável para suas refeições, com sabor autêntico e textura perfeita.",
      valor: 7.99,
      img: 'https://m.media-amazon.com/images/I/51vqz6XjrsL._AC_SX679_.jpg'
    },
    {
      title: "Açúcar Cristal União 1kg",
      text: "O Açúcar Cristal União é ideal para o preparo de sobremesas e receitas, com a qualidade que só a União oferece.",
      valor: 4.29,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Acucar_Uniao.jpg/800px-Acucar_Uniao.jpg'
    },
    {
      title: "Óleo de Soja Liza 900ml",
      text: "O Óleo de Soja Liza é perfeito para o preparo de suas receitas, com alto rendimento e sabor leve.",
      valor: 6.49,
      img: 'https://www.liza.com.br/wp-content/uploads/2021/03/oleo-de-soja-liza-900ml.png'
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
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <ImageBackground source={{ uri: background }} style={styles.imgBg}>

            {/* Título do Produto */}
            <Text style={styles.title}>Produtinhos do Mercado do Felix</Text>

            {/* Informações do Produto */}
            <View style={styles.productContainer}>
              <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
              <Text style={styles.priceTitle}>R$ {lista[activeIndex].valor},00</Text>
              <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>

              <TouchableOpacity
                style={styles.buttonNext}
                onPress={() => {
                  if (activeIndex < lista.length - 1) {
                    setActiveIndex(activeIndex + 1);
                    handlePress();
                  }
                }}
              >
                <Icon name="arrow-circle-right" color="#131313" size={30} />
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100%',
  },
  innerContainer: {
    width: '90%',             
    height: '90%',           
    borderRadius: 15,     
    overflow: 'hidden',
  },
  imgBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  productContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    textAlign: 'center',
    marginBottom: 5,
  },
  priceTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#055a02',
    marginBottom: 10,
    textAlign: 'center',
  },
  movieDesc: {
    fontSize: 14,
    color: '#131313',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonNext: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 50,
    elevation: 5,
  },
});
