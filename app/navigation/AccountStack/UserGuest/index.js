/**
*   Screen Guest
**/

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserGuest = (props) => {
    return(
        <View>
            <Text>
                UserGuest!!
            </Text>
        </View>
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