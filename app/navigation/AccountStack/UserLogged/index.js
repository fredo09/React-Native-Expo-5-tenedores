/**
*   Screen UserLogged
**/

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const UserLogged = () => {
    return(
        <View>
            <Text>
                UserLogged
            </Text>
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    btnContainer:{
        width: "100%"
    },
    btnstyle:{
        backgroundColor: "#fff",// "#00a680",
        marginTop:30,
        borderRadius: 0,
        borderTopWidth:1,
        borderTopColor: "#e3e3e3",
        borderBottomWidth: 1,
        borderBottomColor: "#e3e3e3",
        paddingTop: 10,
        paddingBottom: 10
    },
    viewInfoUser:{
        minHeight:"80%",
        backgroundColor:"#f2f2f2"
    },
    btnTitleStyles:{
        color:"#00a680"
    }
});