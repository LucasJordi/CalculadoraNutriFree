import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const acharsemana=(array, key, value,coluna)=> {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return a=array[i][coluna];
        }
    }
    return '';
    
}


export const dadossemanas=[
    {semana:6,baixopeso:'<=19,9',normal:'Entre 20,0 - 24,9',sobrepeso:'Entre 25,0 - 30,0',obesidade:'>= 30,1'},
    {semana:8,baixopeso:'<=20,1',normal:'Entre 20,2 - 25,0',sobrepeso:'Entre 25,1 - 30,1',obesidade:'>= 30,2'},
    {semana:10,baixopeso:'<=20,2',normal:'Entre 20,3 - 25,2',sobrepeso:'Entre 25,3 - 30,2',obesidade:'>= 30,3'},
    {semana:11,baixopeso:'<=20,3',normal:'Entre 20,4 - 25,3',sobrepeso:'Entre 25,4 - 30,3',obesidade:'>= 30,4'},
    {semana:12,baixopeso:'<=20,4',normal:'Entre 20,5 - 25,4',sobrepeso:'Entre 25,5 - 30,3',obesidade:'>= 30,4'},
    {semana:13,baixopeso:'<=20,6',normal:'Entre 20,7 - 25,6',sobrepeso:'Entre 25,7 - 30,4',obesidade:'>= 30,5'},
    {semana:14,baixopeso:'<=20,7',normal:'Entre 20,8 - 25,7',sobrepeso:'Entre 25,8 - 30,5',obesidade:'>= 30,6'},
    {semana:15,baixopeso:'<=20,8',normal:'Entre 20,9 - 25,8',sobrepeso:'Entre 25,9 - 30,6',obesidade:'>= 30,7'},
    {semana:16,baixopeso:'<=21,0',normal:'Entre 21,1 - 25,9',sobrepeso:'Entre 26,0 - 30,7',obesidade:'>= 30,8'},
    {semana:17,baixopeso:'<=21,1',normal:'Entre 21,2 - 26,0',sobrepeso:'Entre 26,1 - 30,8',obesidade:'>= 30,9'},
    {semana:18,baixopeso:'<=21,2',normal:'Entre 21,3 - 26,1',sobrepeso:'Entre 26,2 - 30,9',obesidade:'>= 31,0'},
    {semana:19,baixopeso:'<=21,4',normal:'Entre 21,5 - 26,2',sobrepeso:'Entre 26,3 - 30,9',obesidade:'>= 31,0'},
    {semana:20,baixopeso:'<=21,5',normal:'Entre 21,6 - 26,3',sobrepeso:'Entre 26,4 - 31,0',obesidade:'>= 31,1'},
    {semana:21,baixopeso:'<=21,7',normal:'Entre 21,8 - 26,4',sobrepeso:'Entre 26,5 - 31,1',obesidade:'>= 31,2'},
    {semana:22,baixopeso:'<=21,8',normal:'Entre 21,9 - 26,6',sobrepeso:'Entre 26,7 - 31,2',obesidade:'>= 31,3'},
    {semana:23,baixopeso:'<=22,0',normal:'Entre 22,1 - 26,8',sobrepeso:'Entre 26,9 - 31,3',obesidade:'>= 31,4'},
    {semana:24,baixopeso:'<=22,2',normal:'Entre 22,3 - 26,9',sobrepeso:'Entre 27,0 - 31,5',obesidade:'>= 31,6'},
    {semana:25,baixopeso:'<=22,4',normal:'Entre 22,5 - 27,0',sobrepeso:'Entre 27,1 - 31,6',obesidade:'>= 31,7'},
    {semana:26,baixopeso:'<=22,6',normal:'Entre 22,7 - 27,2',sobrepeso:'Entre 27,3 - 31,7',obesidade:'>= 31,8'},
    {semana:27,baixopeso:'<=22,7',normal:'Entre 22,8 - 27,3',sobrepeso:'Entre 27,4 - 31,8',obesidade:'>= 31,9'},
    {semana:28,baixopeso:'<=22,9',normal:'Entre 23,0 - 27,5',sobrepeso:'Entre 27,6 - 31,9',obesidade:'>= 32,0'},
    {semana:29,baixopeso:'<=23,1',normal:'Entre 23,2 - 27,6',sobrepeso:'Entre 27,7 - 32,0',obesidade:'>= 32,1'},
    {semana:30,baixopeso:'<=23,3',normal:'Entre 23,4 - 27,8',sobrepeso:'Entre 27,9 - 32,1',obesidade:'>= 32,2'},
    {semana:31,baixopeso:'<=23,4',normal:'Entre 23,5 - 27,9',sobrepeso:'Entre 28,0 - 32,2',obesidade:'>= 32,3'},
    {semana:32,baixopeso:'<=23,6',normal:'Entre 23,7 - 28,0',sobrepeso:'Entre 28,1 - 32,3',obesidade:'>= 32,4'},
    {semana:33,baixopeso:'<=23,8',normal:'Entre 23,9 - 28,1',sobrepeso:'Entre 28,2 - 32,4',obesidade:'>= 32,5'},
    {semana:34,baixopeso:'<=23,9',normal:'Entre 24,0 - 28,3',sobrepeso:'Entre 28,4 - 32,5',obesidade:'>= 32,6'},
    {semana:35,baixopeso:'<=24,1',normal:'Entre 24,2 - 28,4',sobrepeso:'Entre 28,5 - 32,6',obesidade:'>= 32,7'},
    {semana:36,baixopeso:'<=24,2',normal:'Entre 24,3 - 28,5',sobrepeso:'Entre 28,6 - 32,7',obesidade:'>= 32,8'},
    {semana:37,baixopeso:'<=24,4',normal:'Entre 24,5 - 28,7',sobrepeso:'Entre 28,8 - 32,8',obesidade:'>= 32,9'},
    {semana:38,baixopeso:'<=24,5',normal:'Entre 24,6 - 28,8',sobrepeso:'Entre 28,9 - 32,9',obesidade:'>= 33,0'},
    {semana:39,baixopeso:'<=24,7',normal:'Entre 24,8 - 28,9',sobrepeso:'Entre 29,0 - 33,0',obesidade:'>= 33,1'},
    {semana:40,baixopeso:'<=24,9',normal:'Entre 25,0 - 29,1',sobrepeso:'Entre 29,2 - 33,1',obesidade:'>= 33,2'},
    {semana:41,baixopeso:'<=25,0',normal:'Entre 25,1 - 29,2',sobrepeso:'Entre 29,3 - 33,2',obesidade:'>= 33,3'},
    {semana:42,baixopeso:'<=25,0',normal:'Entre 25,1 - 29,2',sobrepeso:'Entre 29,3 - 33,2',obesidade:'>= 33,3'},
   
]





export const pesoideal=(peso,altura)=>{

    var peso=parseFloat(peso.toString().replace(/\,/g,'.'))
    var altura=parseFloat(altura.toString().replace(/\,/g,'.'))
    let ideal1=((altura*altura)*18.5).toFixed(1);

    let ideal2=((altura*altura)*24.9).toFixed(1);

    let a =' ';
    if(statusimc(imcfunc(peso,altura))=='Peso normal'||statusimc(imcfunc(peso,altura))==''){
      a=' '





    }else{
      a='Peso ideal recomendado entre '+ideal1.toString().replace(/\./g,',')+' e '+ideal2.toString().replace(/\./g,',')
    }
    
    return(a)

    
   
}





export const imcfunc=(peso,altura)=>{

    var peso=parseFloat(peso.toString().replace(/\,/g,'.'))
    var altura=parseFloat(altura.toString().replace(/\,/g,'.'))

    let imcg=peso/(altura*altura);
    var status='';

    

    if(isNaN(imcg)||imcg==0||peso==0||altura==0){

        return(" ")

    } else{
        return imcg.toFixed(1)

    } 
    
   
}

export const status=(imcg)=>{
    var status='';

    if(imcg==0){
        status=" "
    }else{
        if(imcg<=18.49){

            status='baixopeso'
       
        }
        if(imcg>=18.50 && imcg<=24.49){
       
             status='normal'
       
        }
        if(imcg>=25.00 && imcg<=29.99){
       
             status='sobrepeso'
       
        }
         if(imcg>=30.00){
       
             status='obesidade'
       
        }

    }

    
    

    return status 
}


export const status2=(imcg)=>{
    var status='';

    if(imcg==0){
        status=" "
    }else{
        if(imcg<=18.49){

            status='Abaixo do peso'
       
        }
        if(imcg>=18.50 && imcg<=24.49){
       
             status='Peso Normal'
       
        }
        if(imcg>=25.00 && imcg<=29.99){
       
             status='Sobrepeso'
       
        }
         if(imcg>=30.00){
       
             status='Obesidade'
       
        }

    }

    
    

    return status 
}

export const statusimc=(imc)=>{
 

    var a='';

    if(imc==0){
        a=''
    }else{
        if(imc<16.00){

        a='Abaixo do peso - Magreza severa'

        }
        if(imc>=16.00 && imc<=16.99){

        a=('Abaixo do peso - Magreza moderada')

        }
        if(imc>=17.00 && imc<=18.49){

        a=('Abaixo do peso - Magreza leve')

        }
        if(imc>=18.50 && imc<=24.49){

        a=('Peso normal')

        }
        if(imc>=25.00 && imc<=29.99){

        a=('Sobrepeso')

        }
        if(imc>=30.00 && imc<=34.99){

        a=('Obesidade grau 1')

        }
        if(imc>=35.00 && imc<=39.99){

        a=('Obesidade grau 2') 

        
        }
        if(imc>=40.00 ){

        a=('Obesidade grau 3')

        }
    }    

    return a
  }


export default imcfunc;








