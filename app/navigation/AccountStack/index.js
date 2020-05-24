/**
*   Stack Account 
**/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from './../../screens/Account/account';
import { LoginScreen } from './../../screens/Account/Login';
import { RegisterScreen } from './../../screens/Account/Register';

const STACK = createStackNavigator();

export const AccountStack = () => {
    return(
        <STACK.Navigator>
            <STACK.Screen
                name="Account"
                component={AccountScreen}
                options={{ title: "Mi cuenta" }}
            />
            <STACK.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: "Iniciar Sesion" }}
            />
            <STACK.Screen 
                name="Registro"
                component={RegisterScreen}
                options={{ title: "Nuevo Usuario" }}
            />
        </STACK.Navigator>
    );
} 