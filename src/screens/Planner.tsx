import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';

import { useUserStore } from "../components/useUserStore";

export function Planner({navigation}: any){

    const userSalary = useUserStore((state) => state.userSalary);


    return(
        <View style={styles.container}>
            <View
            style={styles.salaryViewContainer}
            >
                <Text
                style={styles.salaryText}
                >{userSalary}</Text>    
            </View>
        </View>
        
    )

    
    
}

const styles = StyleSheet.create(
    {
        container: {flex:1, backgroundColor:'#192b15', alignItems:'center', justifyContent:'center'},
        salaryViewContainer:{backgroundColor:'#223f1baa', width:'100%',},
        salaryText:{color:'#fff'},
    })