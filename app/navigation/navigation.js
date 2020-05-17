/**
 *  Navigation
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RestaurantStack } from './RestaurantStack';
import { AccountStack } from './AccountStack';
import { SearchStack } from './SearchStack';
import { FavoritesStack } from './FavoritesStack';
import { TopRestaurantsStack } from './TopRestaurants';

//Version 5 de tabNavigation
const Tab = createBottomTabNavigator();

export const Navigation = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
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