import React, {useState} from 'react';
import { StyleSheet,View,Text ,TouchableOpacity,FlatList } from 'react-native';





export default function Taco2({navigation}){









    const [dados,setdados]=useState([
        {nome:'Arroz',peso:20,key:1},
        {nome:'Macarrão',peso:30,key:2},
        {nome:'Macarronada',peso:30,key:3},
       
        {nome:'Feijão',peso:100,key:4},
        {nome:'Cuminho',peso:1000,key:5},
        {nome:'Salada',peso:200,key:6},
    ])





    const procurar=(key)=>{

        var a='Fei';

        setdados((itens)=>{
            return itens.filter((todo)=>todo.nome.toLowerCase().indexOf(key.toLowerCase())>-1);
        });
    }
     
    
    


    

    






    return(


        <View style={styles.container}>
            

            
            <View>



                <FlatList 
                    
                    data={dados}
                    keyExtractor={item => item.key}
                    renderItem={({item})=>(
                        <TouchableOpacity  style={{alignItems:"center"}}  onPress={procurar}>
                            
                            
                            <Text>{item.nome}</Text>
                            
                            
                            
                        </TouchableOpacity>
                        

                    )}
            
            
                />
                
            </View>

            
        </View>
    )
}













const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f3f3',
      alignItems: 'center',
      justifyContent: 'flex-start',
      
     
      
  
  
  
  
  
  
    },
  
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
   
    imagem: {
      
      transform:[{scale:0.7}],
      
      marginVertical: "1%",
      marginHorizontal: "2%",
      resizeMode: 'contain',
      
      
      
    },
    imagem2: {
      
      transform:[{scale:1}],
      
      marginVertical: "1%",
      marginHorizontal: "2%",
      resizeMode: 'cover',
      
      
      
      
    },
    entradas:{
      marginHorizontal:'10%',
      
      alignItems: 'center',
     
      height:"100%",
      marginVertical:"4%",
      
      
    },
    botao:{
      backgroundColor: 'red',
  
    },
    icones:{
      transform:[{scale:1}],
      marginBottom:20,
      
      
      
      
     
      
      
  
      
    },
  
    input:{
      
      borderBottomWidth: 1,
      width:"100%",
      borderColor:'#d8caca',
      fontSize:20,
      
      
      
      
      
      
  
      
      
  
  
    },
    input2:{
      alignItems:'center',
      width:"100%",
      
      
    },
    textoimc:{
      fontSize:20,
      alignItems:'center',
      
    },
    scroll: {
      flex:1,
      marginTop:100,
      
      
      
      
      
    },
    image: {
      
      resizeMode: "contain",
      alignItems:'center',
      justifyContent:'flex-start',
      flexDirection:'column',
      marginTop:"-100%",
      transform:[{scale:1.2}],
      
     
  
      
      
  
      
      
    },
    gravida:{
      marginHorizontal:"5%",
      flexDirection:'column',
      alignItems:"center"
      
    },
    resultadograv:{
      fontSize:24
  
    },
  
  
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold",
  
      
    },
    text3: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold",
      
  
      
    },
    text4: {
      color: "grey",
      fontSize: 20,
      fontWeight: "bold",
      
  
      
    },
    text5: {
      color: "grey",
      fontSize: 15,
      fontWeight: "bold",
  
      
    },
    label:{
      
      fontSize:18
  
    },
    label2:{
      top:"-15%",
      left:"60%",
      fontSize:20,
      
    },
    view2:{
      
      flexDirection:'row'
    },
    text1: {
      color: "grey",
      fontSize: 15,
      fontWeight: "bold",
  
      
    },
   
    
  });
  