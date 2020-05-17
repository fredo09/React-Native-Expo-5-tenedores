/**
*   Stack TopRestaurants 
**/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TopRestaurantsScreen } from './../../screens/TopRestaurants';

const STACK = createStackNavigator();

export const TopRestaurantsStack = () =>{
    return(
        <STACK.Navigator>
            <STACK.Screen 
                name="TopRestaurantes"
                component={TopRestaurantsScreen}
                options={{ title: "Top Restaurantes" }}
            />
        </STACK.Navigator>
    );
}