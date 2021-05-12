import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import { createDrawerNavigator } from '@react-navigation/drawer'
//import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Discover from './components/Discover';
import Beauty from './components/Beauty'
import Settings from './components/Settings'
import Account from './components/Account'

//const Drawer = createDrawerNavigator()

//const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator initialRouteName="Discover" 
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if(route.name === "Discover"){
              iconName = focused ? 'home' : 'home-outline';
            }else if(route.name === 'Beauty'){
              iconName = focused ? 'folder-sharp' :'folder-outline'
            }else if(route.name === "Settings"){
              iconName = focused ? 'settings' : 'settings-outline'
            }
            else if(route.name === "Account"){
              iconName = focused ? 'md-person' : 'md-person-outline'
            }
             return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
          tabBarOptions={{
            activeTintColor: 'purple',
            inactiveTintColor: 'gray'
          }}
        >
        <Tab.Screen name='Discover' component={Discover}  />
        <Tab.Screen name="Beauty" component={Beauty}/>
        <Tab.Screen name="Account" component={Account}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});


