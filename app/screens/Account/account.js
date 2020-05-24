/* 
 * Page Account
 */

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { UserGuest } from './UserGuest';
import { UserLogged } from './UserLogged';
import { Loading } from './../../components/Loading';
import * as Firebase from 'firebase';

export const AccountScreen = () => {

    // state
    const [ login, setLogin ] = useState(null);

    useEffect(() => {
        Firebase.auth().onAuthStateChanged( user => {
            !user ? setLogin(false) : setLogin(true);
        })
    },[]);

    if(login === null){
        return <Loading  isVisible={true} text={"Cargando!..."} />
    }

    return login ? <UserLogged /> : <UserGuest />
}