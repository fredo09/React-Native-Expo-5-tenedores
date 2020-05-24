/**
*   Screen Guest
**/

import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export const UserGuest = () => {
    
    const navigation = useNavigation(); // Nueva version 5

    return(
        <ScrollView style={styles.viewBody} centerContent={true}>
        <Image 
            source={require("./../../../../assets/img/user-guest.jpg")}
            style={styles.image}
            resizeMode="contain"
        />
        <Text style={styles.title}>
            Consulta Tu Perfil 5 Tenedores.
        </Text>
        <Text style={styles.description}>
            ¿Cómo describirías tu mejor Restaurante? Busca y encuentra los mejores Restaurantes
            de una forma sencilla, vota por el que más te ha gustado y comenta cual ha sido tu 
            experiencia.
        </Text>
        <View style={styles.viewBtn}>
            <Button 
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                title="Ver tu Perfil"
                onPress={() => { navigation.navigate("Login") }}
            />
        </View>
    </ScrollView>
    );
}

//Styles
const styles = StyleSheet.create({
    viewBody :{
        marginLeft: 30,
        marginRight: 30
    },
    image:{
        height: 300,
        width: "100%",
        marginBottom: 30,
        marginTop: 20
    },
    title :{
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center"
    },
    description: {
        textAlign: "center",
        marginBottom: 20
    },
    viewBtn: {
        flex: 1,
        alignItems: "center"
    },
    btnStyle:{
        backgroundColor: "#00a680"
    },
    btnContainer:{
        width: "70%"
    }
});