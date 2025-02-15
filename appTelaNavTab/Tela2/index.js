import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
//navigantio é um parametro para fazer a navegações entre as telas
export default function Tela2({navigation})
{
  return(
    <View style={styles.container}>
      <Text>Tela2</Text>
      <Button
        title="ir para Tela3"
        onPress={()=>navigation.navigate("Tela3")}
      >

      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'cyan',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });