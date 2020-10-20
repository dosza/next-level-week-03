import React from 'react';
import { SnapshotViewIOSComponent, StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { NativeScreenContainer } from 'react-native-screens';

interface HeaderProps{
    title:string;
    showCancel?: boolean;
}


/**
 * @description Função que renderiza um (componente) Header (Action Bar)
 * @param {HeaderProps} props
 * 
 */
export default function Header({title, showCancel=true} : HeaderProps){
    const navigation = useNavigation();
    
    function handleGoToBackAppHomepage(){
        navigation.navigate('OrphanagesMap')
    }

    function handleGoToBack(){
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            
            <BorderlessButton onPress={handleGoToBack}>
                <Feather name="arrow-left" size={24} color="#15b6d6" onPress={navigation.goBack}/>
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>
           { showCancel ? ( 
            <BorderlessButton onPress={handleGoToBackAppHomepage}>
                <Feather name="x" size={24} color="#ff669d"/>
            </BorderlessButton>
           ) : (
            <View/>
           )}

        </View> 
    )
}


const styles = StyleSheet.create({
    container:{
        padding: 24,
        backgroundColor: "#f9fafc",
        borderBottomWidth: 1,
        borderColor: "#dde3f0",
        paddingTop:44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#8fa7b3',
        fontSize: 16
    }
})