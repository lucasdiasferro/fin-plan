import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';

import { useUserStore } from "../components/useUserStore";

export function Planner({navigation}: any){

    const userSalary = useUserStore((state) => state.userSalary);

    let salary = parseFloat(userSalary.replace(',','.')).toLocaleString('ptbr', {style:'currency',currency:'BRL'})

    return(
        <View style={styles.container}>
            <View
            style={styles.topViewContainer}
            >
                <View
                style={styles.salaryContainer}
                >
                    <Text
                style={styles.salaryText}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
                >{salary}</Text> 
                </View>
                   
            </View>
        </View>
        
    )

    
    
}

const styles = StyleSheet.create(
    {
        container: {flex:1, backgroundColor:'#192b15', alignItems:'center', justifyContent:'center'},
        topViewContainer:{backgroundColor:'#223f1baa', width:'100%', height:'15%', top:'0%', position:'absolute', borderRadius:'5%'},
        salaryContainer:{backgroundColor:'#2c5f1faa', width:'30%', height:'50%', alignItems:'center', justifyContent:'center',borderRadius:'20%', bottom:'15%', position:'absolute', marginLeft:'2%'},
        salaryText:{color:'#fff',fontSize:18, marginLeft:'2%'},
    })