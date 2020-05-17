/**
* Stack Search 
**/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from './../../screens/Search';

const STACK = createStackNavigator();

export const SearchStack = () => {
    return(
        <STACK.Navigator>
            <STACK.Screen 
                name="Buscador"
                component={SearchScreen}
                options={{ title: "Buscador" }}
            />
        </STACK.Navigator>
    );
}