import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import { useUserStore } from '../components/useUserStore';

export function Testes(){
    var userSalary = useUserStore((state) => state.userSalary)
    userSalary = userSalary.replace('.', '');

    const numericValue = parseFloat(userSalary.replace(',', '.'));
    const salary = isNaN(numericValue) ? 'R$ 0,00' : numericValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{salary}</Text>
        </View>
    );


};


const styles = StyleSheet.create({

    container: {flex: 1, backgroundColor:'#221d52', alignItems:'center', justifyContent:'center'},
    title: {color:'#ffff', fontWeight:'bold', fontSize:32, },



});