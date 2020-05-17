/**
*   Stack Account 
**/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from './../../screens/Account/account';

const STACK = createStackNavigator();

export const AccountStack = () => {
    return(
        <STACK.Navigator>
            <STACK.Screen
                name="Account"
                component={AccountScreen}
                options={{ title: "Mi cuenta" }}
            />
        </STACK.Navigator>
    );
} 