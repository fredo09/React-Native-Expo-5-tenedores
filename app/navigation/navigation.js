/**
 *  Navigation
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import { RestaurantStack } from './RestaurantStack';
import { AccountStack } from './AccountStack';
import { SearchStack } from './SearchStack';
import { FavoritesStack } from './FavoritesStack';
import { TopRestaurantsStack } from './TopRestaurants';

//Version 5 de tabNavigation
const Tab = createBottomTabNavigator();

export const NavigationStacks = () => {
    return(
        <NavigationContainer>
          { /* Agregar opciones de tabs */} 
          <Tab.Navigator
               initialRouteName = "Restaurantes"
               tabBarOptions={{
                    activeTintColor: '#00a680',
                    inactiveTintColor: '#646464'
               }}
               screenOptions={({ route }) =>({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
               })}
          >
                {/* Screen Nvigation */}
                <Tab.Screen 
                    name="Restaurantes" 
                    component={RestaurantStack}
                    options={{ title : "Restaurantes" }}/>
                <Tab.Screen 
                    name="Favorites" 
                    component={FavoritesStack}
                    options={{ title : "Favoritos" }}/>
                <Tab.Screen 
                    name="Search" 
                    component={SearchStack}
                    options={{ title : "Buscar" }}/>
                <Tab.Screen 
                    name="TopRestaurantes" 
                    component={TopRestaurantsStack}
                    options={{ title : "Top" }}/>
                <Tab.Screen 
                    name="Account" 
                    component={AccountStack} 
                    options={{ title : "Cuenta"}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = ( route, color ) =>{
     let iconName
     
     switch (route.name) {
          case 'Restaurantes':
               iconName = 'compass-outline';
               break;
          case 'Favorites':
               iconName = 'heart-outline';
               break;
          case 'Search':
               iconName = 'magnify';
               break;
          case 'TopRestaurantes':
               iconName = 'star-outline';
               break;
          case 'Account':
               iconName = 'home-outline';
               break;
          default:
               break;
     }

     return (
          <Icon type="material-community" name={iconName} size={22} color={color}/>
     )
}