import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Produtos from './src/Produtos';
import Login from './src/Login';
import {Ionicons} from '@expo/vector-icons';

const Tab= createBottomTabNavigator();

function Tabs(){
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        //aqui define os ícones que irão aparecer nas Tabs

        if (route.name === 'Produtos') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Produtos') {
          iconName = focused ? 'list' : 'list';
        }else if (route.name === 'Login') {
          iconName = focused ? 'people' : 'people';
        }        

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#3f64c7',
      inactiveTintColor: 'gray',      
    }}    
    >  
      <Tab.Screen name= "Login" component={Login}></Tab.Screen>
      <Tab.Screen name= "Produtos" component={Produtos}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {

const Stack= createStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>

    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen 
          name="Produtos" 
          component={Tabs}
          options={{headerShown: false}}
          >

      </Stack.Screen>


    </Stack.Navigator>
  </NavigationContainer>
  );
}

