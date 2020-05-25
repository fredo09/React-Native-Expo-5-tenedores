/**
 * Component Social Button
 */

import React, { useState }from 'react';
import { SocialIcon } from 'react-native-elements';
import { FacebookApi } from './../../utils/Social' ;
import { Loading } from './../Loading';
import * as Facebook from 'expo-facebook';
import * as Firebase from 'firebase';

export const SocialButtonFacebook = (props) => {
    const { toastRef, navigation } = props;
    const [ isLoading, setLoading ] = useState(false);

    const login_facebook = async () => {
        console.log('Login con Facebook');

        await Facebook.initializeAsync(FacebookApi.application_id);

        const { type, token } = await Facebook.logInWithReadPermissionsAsync({ 
            FacebookApi
        });
    
        switch (type) {
            case 'success':
                const credentials = Firebase.auth.FacebookAuthProvider.credential(token);
                await Firebase
                    .auth()
                    .signInWithCredential(credentials)
                    .then(() => {
                        navigation.navigate('Account');
                    })
                    .catch((err) => {
                        console.log(err)
                        toastRef.current.show('Ocurrio un Error');
                    });
                break;
            case 'cancel':
                toastRef.current.show('No se pude hacer login con Facebook');
                break;
            default:
                toastRef.current.show('Ocurrio un error, intena mas tarde!');
                break;
        }
    }

    return(
        <>
        <SocialIcon 
            title='Sign In With Facebook'
            button
            onPress={ login_facebook }
            type='facebook'
        />
        <Loading text="Espere un momento..." isVisible={isLoading} />
        </>
    )
}

