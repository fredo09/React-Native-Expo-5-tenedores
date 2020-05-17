/**
*   Stack Favorites
**/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoritesScreen } from './../../screens/Favorites';

const STACK = createStackNavigator();

export const FavoritesStack = () => {
    return(
        <STACK.Navigator>
            <STACK.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{ title : "Favoritos" }}
            />
        </STACK.Navigator>
    );
}