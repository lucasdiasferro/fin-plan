import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import { useUserStore } from '../components/useUserStore';


export function Home({navigation}: any){

    const userSalary = useUserStore((state) => state.userSalary)
    const setSalary = useUserStore((state) => state.setUserSalary)

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Finance Planner</Text>
            </View>

            <View style={styles.subContainer}>
                <TextInput
                style={styles.salayBox}
                placeholder='Digite seu salário base'
                placeholderTextColor='#999'
                
                keyboardType='decimal-pad' 
                
                value={userSalary}
                onChangeText={setSalary}
                
                autoComplete="off"
                importantForAutofill="no"
                autoCorrect={false}
                spellCheck={false}
                textContentType="none"
                />
                <TouchableOpacity style={styles.nextButton}
                onPress={() =>{navigation.navigate('Testes')}}>
                    <Text style={styles.subtitle}>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create(
    {
        container: {flex:1, backgroundColor:'#192b15', alignItems:'center', justifyContent:'center'},
        subContainer:{justifyContent:'center',alignItems:'center'},
        titleContainer:{position:'absolute', top:'15%'},
        title: {color:'#559347', fontWeight:'bold', fontSize:32, },
        subtitle:{color:'#999'},
        salayBox:{backgroundColor:'#2d4e26', height:48, width:230, borderRadius:20, marginBottom:20, padding:15},
        nextButton:{backgroundColor:'#375f2e', height:48, width:82, alignItems:'center', justifyContent:'center', borderRadius:20}
    }
);