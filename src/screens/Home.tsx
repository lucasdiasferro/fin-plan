import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export function Home(){
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
                keyboardType='numeric'
                />
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.subtitle}>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create(
    {
        container: {flex:1, backgroundColor:'#130c53', alignItems:'center', justifyContent:'center'},
        subContainer:{justifyContent:'center',alignItems:'center'},
        titleContainer:{position:'absolute', top:'15%'},
        title: {color:'#ffff', fontWeight:'bold', fontSize:32, },
        subtitle:{color:'#ebe4e4'},
        salayBox:{color:'#ffff', backgroundColor:'#174768', height:48, width:230, borderRadius:20, marginBottom:'5%'},
        nextButton:{backgroundColor:'#43518f', height:48, width:82, alignItems:'center', justifyContent:'center', borderRadius:20}
    }
);