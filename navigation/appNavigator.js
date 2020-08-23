import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StockDetail from '../screens/stockdetail'
import Dashboard from '../screens/dashboard';
import Favorites from '../screens/favorites';
import {Foundation} from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

import * as Constants from '../constants'

const Stack = createStackNavigator()

const Tabs = createBottomTabNavigator()

const tabOptions =  {
    tabBarOptions:{
        activeTintColor: Constants.PrimaryColor,
        inactiveTintColor: Constants.InActiveColor,
      }
} 

const AppNavigator = props => {
    return (
        <NavigationContainer>
          <Tabs.Navigator {...tabOptions}>
              <Tabs.Screen name='HOME' component={StockStack} 
              options ={{tabBarIcon:({color,size})=>(<Foundation name="graph-trend" size={24} color={color} />)}} />
              <Tabs.Screen name ='FAVOURITES' component={Favorites}
              options ={{tabBarIcon:({color,size})=>(<Entypo name="bookmark" size={24} color={color} />)}} />
          </Tabs.Navigator>
        </NavigationContainer> 
    );
}

const StockStack = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Dashboard} options={{title: 'Stocks'}} />
            <Stack.Screen name="Detail" component={StockDetail} />     
        </Stack.Navigator>
    )
}

export default AppNavigator



