import React from 'react';
import { StyleSheet, KeyboardAvoidingView,Text, Image ,TouchableOpacity } from 'react-native';




export default function Barraitens(nav ){

    return(

        <KeyboardAvoidingView style={styles.barra} enabled={false}>
        
            <TouchableOpacity onPress={nav.func} activeOpacity={0.9}>
                <Image source={require('../image/voltar.png')} style={styles.imagem} />
            
            </TouchableOpacity>
            <Image source={nav.imagem} style={{transform:[{scale:0.25}],top:'-105%',left:'5%'}}/>
            <Text style={{top:"-210%",left:130}}>{nav.texto}</Text>
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

        marginLeft:"5%",
        marginTop:"10%",
        
        transform:[{scale:1}]

    }
});