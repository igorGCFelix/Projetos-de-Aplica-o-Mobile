import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
//navigantio é um parametro para fazer a navegações entre as telas
export default function Principal({navigation})
{
  return(
    <View style={styles.container}>
      <Text>Principal</Text>
      <Button
        title="ir para Tela1"
        onPress={()=>navigation.navigate("Tela1")}
      >

      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });