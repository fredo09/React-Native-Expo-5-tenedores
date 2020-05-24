/**
* Screen Register 
**/

import React, { useRef } from 'react';
import { View, Image, StyleSheet, Text  } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { RegisterForm } from './../../../components/AccountForms/RegisterAccount';
import Toast from 'react-native-easy-toast';

const PATH_LOGO = "./../../../../assets/img/5-tenedores-letras-icono-logo.png";


export const RegisterScreen = (props) => {

    const toastRef = useRef();
    const { navigation } = props;

    return(
        <KeyboardAwareScrollView>
           <Image 
            source={require(PATH_LOGO)}
            resizeMode="contain"
            style={styles.logo}
           />
           <View style={styles.viewForm}>
               <RegisterForm toastRef={toastRef} navigation={navigation}/>
           </View>
           <Toast 
                position="center"
                opacity={0.5}
                ref={toastRef}
           />
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: "100%",
        height: 150,
        marginTop: 20
    },
    viewForm:{
        marginLeft: 40,
        marginRight: 40
    }
});