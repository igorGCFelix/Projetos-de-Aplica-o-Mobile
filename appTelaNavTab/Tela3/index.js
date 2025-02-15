import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
//navigantio é um parametro para fazer a navegações entre as telas
export default function Tela3({navigation})
{
  return(
    <View style={styles.container}>
      <Text>Tela3</Text>
      <Button
        title="ir para Principal"
        onPress={()=>navigation.navigate("Principal")}
      >

      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'violet',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });