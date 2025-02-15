import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
//navigantio é um parametro para fazer a navegações entre as telas
export default function Tela1({navigation})
{
  return(
    <View style={styles.container}>
      <Text>Tela1</Text>
      <Button
        title="ir para Tela2"
        onPress={()=>navigation.navigate("Tela2")}
      >

      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });