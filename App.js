import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import Discover from './components/Discover';
import Card from './components/Card'
import Beauty from './components/Beauty'
const Drawer = createDrawerNavigator()

//const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator initialRouteName="Discover" screenOptions={{headerShown:true}}>
        <Drawer.Screen name='Discover' component={Discover}  />
        <Drawer.Screen name="Beauty" component={Beauty}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
