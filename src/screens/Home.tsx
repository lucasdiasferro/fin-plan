import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Finance Planner</Text>
            <Text style={styles.subtitle}>Tela Inicial</Text>
        </View>
    );
}


const styles = StyleSheet.create(
    {
        container: {flex:1, backgroundColor:'#130c53', alignItems:'center', justifyContent:'center'},
        title: {color:'#ffff', fontWeight:'bold', fontSize:32, position:'absolute', top:'15%'},
        subtitle:{color:'#b1afaf'},
    }
);