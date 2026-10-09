import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';

import { useUserStore } from '../components/useUserStore';


export function Home({navigation}: any){

    const userSalary = useUserStore((state) => state.userSalary);
    const setSalary = useUserStore((state) => state.setUserSalary);
    const history = useUserStore((state) => state.history);
    const setHistory = useUserStore((state) => state.setHistory);
    const delHistory = useUserStore((state) => state.deleteHistory);

    return (
        <View style={styles.container}>
            {/*HEADER*/}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Finance Planner</Text>
            </View>
            {/*salaryContainer*/}
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
                onPress={() =>{
                    navigation.navigate('Planner')
                    setHistory(userSalary);
                    
                }}>
                    <Text style={styles.subtitle}>Avançar</Text>
                </TouchableOpacity>
            </View>

            {/*history*/}
            <View style={styles.historyContainer}>
                {
                    history.map((historico,index) =>{
                        
                        historico = historico.replace('.','')

                        const newHist = parseFloat(historico.replace(',','.')).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
                        
                        return(
                            <View
                            style={styles.salaryHistoryContainer}
                            key={index}
                            >
                                <TouchableOpacity
                                style={styles.salaryHistoryButton}
                                onPress={()=>{
                                    navigation.navigate('Planner')
                                }}
                                >
                                    <Text
                                    style={styles.salaryHistoryText}
                                    >{newHist}</Text>

                                    

                                </TouchableOpacity>

                                <TouchableOpacity
                                
                                onPress={() => {
                                    delHistory(index);
                                }}
                                >
                                        <Image 
                                        source={require('../../assets/lixeira.png')}
                                        style={styles.trashIcon}
                                        />
                                    </TouchableOpacity>
                            </View>
                        )
                    })
                    
                }
            </View>

        </View>
    );
} 


const styles = StyleSheet.create(
    {
        container: {flex:1, backgroundColor:'#192b15', alignItems:'center', justifyContent:'center'},
        subContainer:{justifyContent:'center',alignItems:'center', width:'100%', height:'100%'},
        titleContainer:{position:'absolute', top:'15%'},
        title: {color:'#559347', fontWeight:'bold', fontSize:32, },
        subtitle:{color:'#999'},
        salayBox:{color:'#192b15', backgroundColor:'#2d4e26', height:'5%', width:'75%', borderRadius:20, marginBottom:'5%', padding:'3%'},
        nextButton:{backgroundColor:'#375f2e', height:48, width:82, alignItems:'center', justifyContent:'center', borderRadius:20},
        historyContainer:{backgroundColor:'#55934791', height:330, width:300, bottom:20, position:'absolute', borderRadius:20},
        salaryHistoryButton:{backgroundColor:'#223f1baa', alignItems:'center', justifyContent:'center', width:238,height:28},
        salaryHistoryText:{color:'#55934791',},
        salaryHistoryContainer:{flexDirection:'row', alignItems:'center', justifyContent:'center', marginHorizontal:15, marginTop:10, height:28},
        trashIcon: {width:28, height:28}

    }
);