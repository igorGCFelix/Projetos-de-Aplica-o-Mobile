import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import Home from './src/Telas/Home';
import Login from './src/Telas/Login';
import Cadastro from './src/Telas/Cadastro';
import Reserva from './src/Telas/Reserva';
import Quartos from './src/Telas/Quartos';
import Conclusao from './src/Telas/Conclusao';
import Contas from './src/Telas/Contas';

const Tab = createBottomTabNavigator();
function Tabs(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'home-outline'
            : 'bed-outline';
        } else if (route.name === 'Cadastro') {
          iconName = focused ? 'person-outline' : 'body-outline';
        }else if (route.name === 'Reserva') {
          iconName = focused ? 'people-outline' : 'happy-outline';
        }
        else if (route.name === 'Reserva') {
          iconName = focused ? 'people-outline' : 'happy-outline';
        }
        else if (route.name === 'Reserva') {
          iconName = focused ? 'people-outline' : 'happy-outline';
        }
        else if (route.name === 'Reserva') {
          iconName = focused ? 'people-outline' : 'happy-outline';
        }
        else if (route.name === 'Reserva') {
          iconName = focused ? 'people-outline' : 'happy-outline';
        }
        
        //aqui define os ícones que irão aparecer nas Tabs
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#3f64c7',
      inactiveTintColor: 'gray',      
    }}    
    >
      <Tab.Screen name= "Login" component={Login}></Tab.Screen>
      <Tab.Screen name= "Cadastro" component={Cadastro}></Tab.Screen>
      <Tab.Screen name= "Reserva" component={Reserva}></Tab.Screen>
      <Tab.Screen name= "Quartos" component={Quartos}></Tab.Screen>
      <Tab.Screen name= "Conclusao" component={Conclusao}></Tab.Screen>
      <Tab.Screen name= "Contas" component={Contas}></Tab.Screen>
    </Tab.Navigator>  
  )
}

export default function App() {
  const Stack = createStackNavigator(); //variável que fala para quais Telas nós vamos mudar
  return (
    // compoe todas as Telas que ue vou usar
  <NavigationContainer>
{/* Stack.Navigator é para navegar pelas Telas, no caso está dizendo que ele quer iniciar na tela Home */}
  <Stack.Navigator initialRouteName='Contas'>
{/* Stack.Screen é a tela */}
    <Stack.Screen name="Home" component={Home}></Stack.Screen>
    <Stack.Screen name="Login" component={Login}></Stack.Screen>
    <Stack.Screen name="Cadastro" component={Cadastro}></Stack.Screen>
    <Stack.Screen name="Reserva" component={Reserva}></Stack.Screen>
    <Stack.Screen name="Quartos" component={Quartos}></Stack.Screen>
    <Stack.Screen name="Conclusao" component={Conclusao}></Stack.Screen>
    <Stack.Screen name="Contas" component={Contas}></Stack.Screen>
  </Stack.Navigator>
</NavigationContainer>

  );
}


