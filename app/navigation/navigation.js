/**
 *  Navigation
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AccountScreen } from './../screens/Account/account';
import { RestaurantScreen } from './../screens/Restaurant/Restaurants';
import { SearchScreen } from './../screens/Search';
import { FavoritesScreen } from './../screens/Favorites';
import { TopRestaurantsScreen } from './../screens/TopRestaurants';

//Version 5 de tabNavigation
const Tab = createBottomTabNavigator();

export const Navigation = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                {/* Screen Nvigation */}
                <Tab.Screen 
                    name="Account" 
                    component={AccountScreen} 
                    options={{ title = "Cuenta"}}/>
                <Tab.Screen 
                    name="Restaurantes" 
                    component={RestaurantScreen}
                    options={{ title="Restaurantes" }}/>
                <Tab.Screen 
                    name="Search" 
                    component={SearchScreen}
                    options={{ title="Buscar" }}/>
                <Tab.Screen 
                    name="Favorites" 
                    component={FavoritesScreen}
                    options={{ title="Favoritos" }}/>
                <Tab.Screen 
                    name="TopRestaurantes" 
                    component={TopRestaurantsScreen}
                    options={{ title="Top" }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}