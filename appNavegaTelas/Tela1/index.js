import React from 'react';
import {StyleSheet, Text, Viwe, Button, Image} from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
export default function Tela1({navigation})
{
    return(
        <View style={StyleSheet.container}>
            <View style={StyleSheet.areaModeloCarro}>
                <Text>Escolha um desses carros:</Text>
                <Text>Corsa</Text>
                <RadioButton
                    value="Corsa"
                    status={checked == "Corsa" ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('Corsa')}
                >
                </RadioButton>
                <Text>Corola</Text>
                <RadioButton
                    value="Corola"
                    status={checked == "Corola" ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('Corola')}
                ></RadioButton>
                <Text>Corola</Text>
                <RadioButton
                    value="Gol"
                    status={checked == "Gol" ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('Gol')}
                ></RadioButton>
                <Text>Palio</Text>
                <RadioButton
                    value="Palio"
                    status={checked == "Palio" ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('Palio')}
                ></RadioButton>
                <Text>Mustang</Text>
                <RadioButton
                    value="Mustang"
                    status={checked == "Mustang" ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('Mustang')}
                ></RadioButton>
            </View>
            <View style={StyleSheet.areaInfoCarros}>
                <Text>Preencha as informações a seguir: </Text>
                <Text>Placa do Carro</Text>
                <TextInput
                    placeholder='Digite aqui a placa do carro'
                    onChangeText={placa => setPlaca}
                    style={syles.input}
                ></TextInput>
                <></>
            </View>
        </View>
    )
}