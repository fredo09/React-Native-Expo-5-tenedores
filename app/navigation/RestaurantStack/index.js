/**
*  Stack Restaurantes
**/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantScreen } from './../../screens/Restaurant/Restaurants'; 

const STACK = createStackNavigator();

// Creando Stacks de Restaurantes
export const RestaurantStack = () => {
    return(
        <STACK.Navigator>
            <STACK.Screen 
                name="Restaurantes"
                component={RestaurantScreen}
                options={{ title: "Restaurantes" }}
            />
        </STACK.Navigator>
    );
}