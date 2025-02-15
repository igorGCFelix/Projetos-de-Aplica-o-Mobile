import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import Tela1 from './src/telas/Tela1';
import Tela2 from './src/telas/Tela2';
import Tela3 from './src/telas/Tela3';

const Tab = createBottomTabNavigator();
function Tabs(){
  return(
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'Tela1') {
          iconName = focused 
          ? 'home-outline'
          : 'home-outline';
        }
        else if(route.name === "Tela2"){
          iconName = focused ? 'person-outline' : 'person-outline';
        }
        else if(route.name === 'Tela3'){
          iconName = focused ? 'person-outline' : 'person-outline';
        }
        
        return <Ionicons name={iconName} size={size} color={color} />;
        },
})}
tabBarOptions={{
  activeTintColor: 'purple',
  inactiveTintColor: 'gray',
}}
  >
    <Tab.Screen name= "Tela1" component={Tela1}></Tab.Screen>
    <Tab.Screen name= "Tela2" component={Tela2}></Tab.Screen>
    <Tab.Screen name= "Tela3" component={Tela3}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App(){
  const Stack = createStackNAvigator();
  return(
    <NavigationContainer>
      <Stack.Screen
        name="Tela1"
        component={Tabs}
        options={{
          title:'Tela1',
          headerStyle:{
            backgroundColor: 'purple',
          },
          headerTintColor: '#fff',
          headerShown: true
        }}
      >
      </Stack.Screen>
      <Stack.Screen name="Tela2" component={Tela2}></Stack.Screen>
      <Stack.Screen name="Tela3" component={Tela3}></Stack.Screen>
        
    </NavigationContainer>
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
