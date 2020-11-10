import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView,Text, View, Image, ScrollView ,TouchableOpacity,Button,TextInput,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default function Barra(texto){

    return(

        <KeyboardAvoidingView style={styles.barra} enabled={false}>
        
            
            <Image source={require('../image/logo.png')} style={styles.imagem} />
            
        
        </KeyboardAvoidingView>
    )







};










const styles = StyleSheet.create({
   
    barra:{
      
      backgroundColor:'white',
      height:80,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width:"100%",
      paddingTop:"-40%",
      
      shadowColor: "#000",
        shadowOffset: {
	    width: 0,
        height: 5},
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 10,
      
  
    },
    imagem:{

        marginLeft:"-5%",
        marginTop:"8%",
        
        transform:[{scale:0.5}]

    }
});