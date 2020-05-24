/**
* Screen Login 
**/

import React,{ useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { LoginForm } from './../../../components/LoginForm';
import { SocialButtonFacebook } from './../../../components/LoginFacebook';
import Toast from 'react-native-easy-toast';

export const LoginScreen = (props) =>{

    const toastRef = useRef();
    const { navigation } = props;
    
    return(
        <ScrollView>
            <Image 
                source={require('./../../../../assets/img/5-tenedores-letras-icono-logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.viewContainer}>
                <LoginForm toastRef={toastRef} navigation={navigation} />
                <CreateAccount 
                    navigation={navigation}
                />
            </View>
            <Divider style={styles.divider} />
            <View style={styles.viewContainer}>
                <SocialButtonFacebook toastRef={toastRef} navigation={navigation}/>
            </View>
            <Toast 
                position="center"
                opacity={0.5}
                ref={toastRef}
            />
        </ScrollView>
    );
}

//Componente interno 
const CreateAccount = (props) => {
    const { navigation } = props;
    
    return(
        <Text style={styles.textRegistrer}>
            ¿Aún no tienes una Cuenta? {" "}
            <Text 
                style={styles.btnRegister}
                onPress={() => { navigation.navigate("Registro") }}
            >
                ¡Registrate aqui!
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:"100%",
        height: 150,
        marginTop: 20
    },
    viewContainer:{
        marginRight: 40,
        marginLeft: 40
    },
    textRegistrer:{
        marginTop: 15,
        marginLeft: 10,
        marginLeft: 15
    },
    btnRegister:{
      color: "#00a680",
      fontWeight: "bold"  
    },
    divider: {
        backgroundColor: "#00a680",
        margin: 20
    }
});