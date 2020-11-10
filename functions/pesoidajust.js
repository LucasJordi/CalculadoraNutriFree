import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView ,TouchableOpacity,Button,TextInput,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';







export const pesoid=(imc,altura)=>{

    var imc=parseFloat(imc.toString().replace(/\,/g,'.'));
    var altura=parseFloat(altura.toString().replace(/\,/g,'.'));

    var peso=imc*(altura*altura)


    if(imc==0 || altura==0){
        return('')
    }else{
        return(peso.toFixed(2))

    }

    
  }

export const pesoajus=(peso,pesoideal)=>{
    var peso=parseFloat(peso.toString().replace(/\,/g,'.'));
    var pesoideal=parseFloat(pesoideal.toString().replace(/\,/g,'.'));

    var ajustado=(peso-pesoideal)*0.25+pesoideal


    if(peso==0 || pesoideal==0){
        return('')
    }else{
        return(ajustado.toFixed(2))

    }



    
}




