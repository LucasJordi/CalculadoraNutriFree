import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView ,TouchableOpacity,Button,TextInput,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { pesoideal } from './Imc';





export const homem=(peso,altura,idade,fator)=>{

    var f=1;
    var peso =parseFloat(peso.toString().replace(/\,/g,'.'));
    var altura =parseFloat(altura.toString().replace(/\,/g,'.'));
    var h=66.4730+13.7516*peso+5.0033*altura-6.7550*idade;



    if(fator=='sem'){
        f=1
    }else{
        if(fator=='sendent'){
            f=1.35

        }
        if(fator=='leve'){
            f=1.56

        }
        if(fator=='moderado'){
            f=1.78

        }
        if(fator=='intenso'){
            f=2.10

        }
    }
    



    if(peso==''||altura==''||idade==''){
        return ('')
    }else{
        return((h*f).toFixed(1))

    }

}




export const mulher=(peso,altura,idade,fator)=>{

    var f=1;
    var peso =parseFloat(peso.toString().replace(/\,/g,'.'));
    var altura =parseFloat(altura.toString().replace(/\,/g,'.'));
    var h=655.0955+(9.5634*peso)+(1.8496*altura)-(4.6756*idade);
    


    



    if(fator=='sem'){
        f=1
    }else{
        if(fator=='sendent'){
            f=1.35

        }
        if(fator=='leve'){
            f=1.55

        }
        if(fator=='moderado'){
            f=1.64

        }
        if(fator=='intenso'){
            f=1.82

        }
    }
    

    if(peso==''||altura==''||idade==''){
        return ('')
    }else{
        return((h*f).toFixed(1))

    }

    

}