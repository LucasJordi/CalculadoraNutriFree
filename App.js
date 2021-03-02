
import React, {useState,useEffect} from 'react';
import { StyleSheet,ScrollView,Alert, Text,Picker,ImageBackground,View, Image ,TouchableOpacity,TextInput,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {imcfunc,status,acharsemana,dadossemanas,statusimc,pesoideal} from "./functions/Imc";
import * as Linking from 'expo-linking';
import Modal from "react-native-modalbox";
import Barra from "./content/barra";
import {status2} from "./functions/Imc";
import {homem,mulher} from "./functions/harris";
import {pesoid,pesoajus} from "./functions/pesoidajust";
import Barraitens from "./content/barraitens";
import {tabela} from  "./content/tabelataco";
import {tabelanconv} from  "./content/tabelapartes";

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';






function Tabelanconvencionais({ navigation }) {



  const [imagem,setimagem]=useState([
    {source:require('./image/tacoordemalfa.png'),func:'convencionaisnome',key:'1',nome:"Nome"},
    {source:require('./image/tacomicro.png'),func:'',key:'2',nome:"Micronutrientes"},
    {source:require('./image/tacomacro.png'),func:'',key:'3',nome:"Macronutrientes"},
    {source:require('./image/tacotipo.png'),func:'',key:'4',nome:"Tipo"},
    {source:require('./image/outrosmenu.png'),func:'',key:'5',nome:"Outros"},
  
    
    
  ]);

  
  return (

    <View style={styles.container}>

      
      <Barraitens func={() => navigation.navigate('Home')} imagem={require('./image/tacomenu.png')} texto="Tabela partes não convencionais"/>

      

      <View style={{marginTop:10,height:"80%"}}>

        <FlatList 
          
          data={imagem}
          keyExtractor={item => item.key}
          renderItem={({item})=>(
            <TouchableOpacity  style={{alignItems:"center"}} onPress={()=>{if(item.func!=''){navigation.navigate(item.func)}else{Alert.alert('Disponível na versão pro.','Baixe a nossa versão pro com essa e muitas outras funcionalidades.',[{text:'Ver depois'},{text:'Saiba mais',onPress:()=>Linking.openURL('https://play.google.com/store/apps/details?id=com.nutriinterativa.calculadorapro')}])}}} activeOpacity={0.9}>
                  
                
                <Image
                  source={item.source} style={styles.imagem}
                  
                  
                />
                <Text style={{width:110,top:'-10%',textAlign:"center"}}>{item.nome}</Text>
                
                
                
            </TouchableOpacity>
            

          )}
        
        
        />




      </View>

      
      
      
       
      




    </View>
  );
}



function convencionaisnome({ navigation }){

  const procurar=(key)=>{

    if(key!=''){
      setdados((itens)=>{
        return itens.filter((todo)=>todo.Desc.toLowerCase().indexOf(key.toLowerCase())>-1);
    });

    }else{
      setdados(tabelanconv)
    }

    
  }
  tabelanconv.sort(function (a, b) {
    if (a.Desc > b.Desc) {
      return 1;
    }
    if (a.Desc < b.Desc) {
      return -1;
    }
    
    return 0;
  });


  const menu=(item)=>{

    if(item.Desc.length==1){

      return(

        <View style={{marginLeft:"5%",borderBottomColor:"#cacacaff",borderBottomWidth:1,marginBottom:'5%'}}>

          

          <Text style={{marginLeft:"5%",fontSize:20,color:"#666666ff"}}>{item.Desc}</Text>
        </View>

      ) 

    }else{


      return(
        <TouchableOpacity   onPress={()=>navigation.navigate('nconvencionaisnutrientes',{item})} style={{width:"100%",alignItems:"flex-start",left:"3%",padding:10,backgroundColor: "#f9f9f9",marginBottom:"1%"}} >
                    
                  
                  
          <Text style={{fontSize:15}}>{item.Desc}</Text>

              
                  
                  
                  
        </TouchableOpacity>
      ) 
    }
  }
  const [dados,setdados]=useState(tabelanconv)
  return (

    <View style={[styles.container,{flexDirection:'column'}]}>

      

      
      <Barraitens func={() => navigation.goBack()} imagem={require('./image/tacomenu.png')} texto="Filtrar por nome"/>

      <TextInput placeholder="Procurar..." onChangeText={(texto)=>{procurar(texto)}} style={{paddingLeft:"5%", marginTop:20,width:"80%",height: 40, borderColor: 'gray', borderWidth: 1 }}></TextInput>
 
      <View style={{marginTop:20,height:"80%",width:'90%'}}>

        <FlatList 
          
          data={dados}
          keyExtractor={item => item.Indice}
          renderItem={({item})=>(

            menu(item)

            

           
       
            

          )}
        
        
        />




      </View>

      
      
      
       
      




    </View>
  );

}
function nconvencionaisnutrientes({ route,navigation }){

  const {item}=route.params

  const passandodados=(dados)=>{
    if(parseFloat(dados).toFixed(1)!='NaN'){
      return parseFloat(dados).toFixed(1)

    }else{
     return dados
    }
  }
  const [dados,setdados]=useState(tabela)
  return (

    <View style={[styles.container1,{flexDirection:'column'}]}>

      

      
      <Barraitens func={() => navigation.goBack()} imagem={require('./image/tacomenu.png')} texto="Filtrar por nome"/>

      
      <ScrollView>
        <View style={{marginLeft:"5%",marginTop:20,alignItems:'flex-start'}}>

          <View style={{borderBottomColor:'#cacaca',width:"70%",borderBottomWidth:1}}>

            <Text style={{fontSize:17,fontWeight: "bold",color:'#666666ff',height:25}}>{passandodados(item.Desc)}</Text>
          </View>

          <Text style={{fontSize:15,height:25,color:'#ff4040'}}>{passandodados(item.Tipo)}</Text>

          
          <View style={{flexDirection:'row',marginVertical:"10%"}}>

            <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Porção(g)</Text>
            <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:"20%",borderBottomWidth:1}}>{passandodados(item.Peso)}</Text>
            
          </View>

              
            



        </View>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3107661564294379/3018366261" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
        />

         

        <View style={{marginLeft:"5%",width:'90%'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight: "bold",color:'#ff4040'}}>Macronutrientes</Text>
            </View>


            <View style={{flexDirection:'column',marginVertical:"5%"}}>
              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Proteína (g)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Proteinas)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Lipídeos (g)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Lipideos)}</Text>

              </View>

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Carboidrato (g)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Carboidratos)}</Text>

              </View>
            
              
            </View>


            


        </View>  

        <View style={{marginLeft:"5%",width:'90%'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight: "bold",color:'#ff4040'}}>Minerais</Text>
            </View>


            <View style={{flexDirection:'column',marginVertical:"5%"}}>
              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Cálcio (mg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Calcio)}</Text>

              </View>

              

              

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Fósforo (mg)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Fosforo)}</Text>

              </View>

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Ferro (mg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Ferro)}</Text>

              </View>

              

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Potássio (mg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Potassio)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Cobre (mg)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Cobre)}</Text>

              </View>

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Zinco (mg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Zinco)}</Text>

              </View>

            
            
              
            </View>


            


        </View>  
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3107661564294379/2937495271" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
        />

        <View style={{marginLeft:"5%",width:'90%'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:18,color:'#ff4040',fontWeight: "bold"}}>Vitaminas</Text>
            </View>


            <View style={{flexDirection:'column',marginVertical:"5%"}}>
              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Carotenóides (mcg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Carotenóides)}</Text>

              </View>

             

              

              

              

              
              

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Vitamna C (mg)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.VitaminaC)}</Text>

              </View>
            
              
            </View>


            


        </View>  


        <View style={{marginLeft:"5%",width:'90%'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight: "bold",color:'#ff4040'}}>Outros</Text>
            </View>


            <View style={{flexDirection:'column',marginVertical:"5%"}}>
              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Água (%)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Agua)}</Text>

              </View>

              

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Fibra alimentar (g)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Fibras)}</Text>

              </View>
            
              
            </View>


            


        </View>  


        

      
      
      
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3107661564294379/9268945817" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
        />
      


      </ScrollView>

    </View>
  );

}  




function Primeirapag({ navigation }){
  

  

  return(
    

    <View style={styles.container}>
        
        <View style={{top:"5%",alignItems:'center',marginVertical:'5%',justifyContent:'center',left:"5%",transform:[{scale:0.5}]}}>
          
          
          <Image style={{marginVertical:'10%'}} source={require("./image/banner.png")}/>
          <TouchableOpacity onPress={()=>Linking.openURL('https://play.google.com/store/apps/details?id=com.nutriinterativa.calculadorapro')} style={{alignItems:'center',justifyContent:'center',marginVertical:'10%',backgroundColor:'#0e9b56ff',height:80,width:250}}>
            <Text style={{color:'white',fontSize:30}}>Saiba mais</Text>
            
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{alignItems:'center',justifyContent:'center',marginVertical:'10%',backgroundColor:'#0e9b56ff',height:80,width:250}}>
            
            <Text style={{color:'white',fontSize:30}}>Ver depois</Text>
          </TouchableOpacity>

        <AdMobBanner
            bannerSize="smartBannerLandscape"
            adUnitID="ca-app-pub-3107661564294379/3018366261" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds // true or false
         />

        <AdMobBanner
            bannerSize="smartBannerLandscape"
            adUnitID="ca-app-pub-3107661564294379/3018366261" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds // true or false
        />

        <AdMobBanner
            bannerSize="smartBannerLandscape"
            adUnitID="ca-app-pub-3107661564294379/3018366261" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds // true or false
        />

        </View>
          
      

      

    </View>

  )

  
}


function HomeScreen({ navigation }) {



  const [imagem,setimagem]=useState([
    {source:require('./image/imcmenu.png'),func:'imc',key:1,nome:"Calculadora IMC"},
    {source:require('./image/harrismenu.png'),func:'harrisbenedict',key:2,nome:"Harris Benedict"},
    {source:require('./image/macromenu.png'),func:'macros',key:3,nome:"Distribuição macronutrientes"},
    {source:require('./image/idealmenu.png'),func:'pesoajust',key:4,nome:"Peso ideal e ajustado"},
    {source:require('./image/fatormenu.png'),func:'fatorcorrec',key:5,nome:"Fator de correção"},
    {source:require('./image/gestantemenu.png'),func:'imcgrav',key:6,nome:"IMC grávida"},
    {source:require('./image/tacomenu.png'),func:'tabelataco',key:7,nome:"Tabela TACO"},
    {source:require('./image/partesnmenu.png'),func:'tabelanconvencionais',key:7,nome:"Tabela não convencionais"},
    
    
  ]);
  return (

    <View style={styles.container}>

      
      <Barra />

    
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3107661564294379/3018366261" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
      />

      <View style={{marginTop:5,height:"75%"}}>
         
          

        <FlatList 
          numColumns={2}
          data={imagem}
          keyExtractor={item => item.key}
          renderItem={({item})=>(
            <TouchableOpacity  style={{alignItems:"center"}} onPress={() => navigation.navigate(item.func)} activeOpacity={0.9}>
                  
                
                <Image
                  source={item.source} style={styles.imagem}
                  
                  
                />
                
                <Text style={{width:110,top:'-10%',textAlign:"center"}}>{item.nome}</Text>
                
                
                
            </TouchableOpacity>
            

          )}
        
        
        />




      </View>

      
      
      
       
      




    </View>
  );
}

function Tabelataco({ navigation }) {



  const [imagem,setimagem]=useState([
    {source:require('./image/tacoordemalfa.png'),func:'taconome',key:'1',nome:"Nome"},
    {source:require('./image/tacomicro.png'),func:'',key:'2',nome:"Micronutrientes"},
    {source:require('./image/tacomacro.png'),func:'',key:'3',nome:"Macronutrientes"},
    {source:require('./image/tacotipo.png'),func:'',key:'4',nome:"Tipo"},
    {source:require('./image/outrosmenu.png'),func:'',key:'5',nome:"Outros"},
  
    
    
  ]);

  
  return (

    <View style={styles.container}>

      
      <Barraitens func={() => navigation.navigate('Home')} imagem={require('./image/tacomenu.png')} texto="Tabela TACO"/>

      

      <View style={{marginTop:10,height:"80%"}}>

        <FlatList 
          
          data={imagem}
          keyExtractor={item => item.key}
          renderItem={({item})=>(
            <TouchableOpacity  style={{alignItems:"center"}} onPress={()=>{if(item.func!=''){navigation.navigate(item.func)}else{Alert.alert('Disponível na versão pro.','Baixe a nossa versão pro com essa e muitas outras funcionalidades.',[{text:'Ver depois'},{text:'Saiba mais',onPress:()=>Linking.openURL('https://play.google.com/store/apps/details?id=com.nutriinterativa.calculadorapro')}])}}} activeOpacity={0.9}>
                  
                
                <Image
                  source={item.source} style={styles.imagem}
                  
                  
                />
                <Text style={{width:110,top:'-10%',textAlign:"center"}}>{item.nome}</Text>
                
                
                
            </TouchableOpacity>
            

          )}
        
        
        />




      </View>

      
      
      
       
      




    </View>
  );
}



function Taconome({ navigation }){

  const procurar=(key)=>{

    if(key!=''){
      setdados((itens)=>{
        return itens.filter((todo)=>todo.Desc.toLowerCase().indexOf(key.toLowerCase())>-1);
    });

    }else{
      setdados(tabela)
    }

    
  }
  tabela.sort(function (a, b) {
    if (a.Desc > b.Desc) {
      return 1;
    }
    if (a.Desc < b.Desc) {
      return -1;
    }
    
    return 0;
  });


  const menu=(item)=>{

    if(item.Desc.length==1){

      return(

        <View style={{marginLeft:"5%",borderBottomColor:"#cacacaff",borderBottomWidth:1,marginBottom:'5%'}}>

          

          <Text style={{marginLeft:"5%",fontSize:20,color:"#666666ff"}}>{item.Desc}</Text>
        </View>

      ) 

    }else{


      return(
        <TouchableOpacity   onPress={()=>navigation.navigate('nutrientestaco',{item})} style={{width:"100%",alignItems:"flex-start",left:"3%",padding:10,backgroundColor: "#f9f9f9",marginBottom:"1%"}} >
                    
                  
                  
          <Text style={{fontSize:15}}>{item.Desc}</Text>

              
                  
                  
                  
        </TouchableOpacity>
      ) 
    }
  }
  const [dados,setdados]=useState(tabela)
  return (

    <View style={[styles.container,{flexDirection:'column'}]}>

      

      
      <Barraitens func={() => navigation.goBack()} imagem={require('./image/tacomenu.png')} texto="Filtrar por nome"/>

      <TextInput placeholder="Procurar..." onChangeText={(texto)=>{procurar(texto)}} style={{paddingLeft:"5%", marginTop:20,width:"80%",height: 40, borderColor: 'gray', borderWidth: 1 }}></TextInput>
 
      <View style={{marginTop:20,height:"80%",width:'90%'}}>

        <FlatList 
          
          data={dados}
          keyExtractor={item => item.Indice}
          
          initialNumToRender={100}
          renderItem={({item})=>(

            menu(item)

            

           
       
            

          )}
        
        
        />




      </View>

      
      
      
       
      




    </View>
  );

}

function Nutrientestaco({ route,navigation }){

  const {item}=route.params

  const passandodados=(dados)=>{
    if(parseFloat(dados).toFixed(1)!='NaN'){
      return parseFloat(dados).toFixed(1)

    }else{
     return dados
    }
  }
  const [dados,setdados]=useState(tabela)
  return (

    <View style={[styles.container1,{flexDirection:'column'}]}>

      

      
      <Barraitens func={() => navigation.goBack()} imagem={require('./image/tacomenu.png')} texto="Filtrar por nome"/>

      
      <ScrollView>
        <View style={{marginLeft:"5%",marginTop:20,alignItems:'flex-start'}}>

          <View style={{borderBottomColor:'#cacaca',width:"70%",borderBottomWidth:1}}>

            <Text style={{fontSize:17,fontWeight: "bold",color:'#666666ff',height:25}}>{passandodados(item.Desc)}</Text>
          </View>

          <Text style={{fontSize:15,height:25,color:'#ff4040'}}>{passandodados(item.Tipo)}</Text>

          
          <View style={{flexDirection:'row',marginVertical:"10%"}}>

            <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Porção(g)</Text>
            <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:"20%",borderBottomWidth:1}}>{passandodados(item.Peso)}</Text>
            
          </View>

              
            



        </View>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3107661564294379/3018366261" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
        />

        <View style={{marginLeft:"5%",width:'90%'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight: "bold",color:'#ff4040'}}>Energia</Text>
            </View>


            <View style={{flexDirection:'column',marginVertical:"5%"}}>
              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Energia (kcal)</Text>
                <Text style={{fontSize:18,borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1,color:'#4d4d4dff'}}>{passandodados(item.Energia1)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Energia (kJ)   </Text>
                <Text style={{fontSize:18,borderBottomColor:'#cacaca',color:'#4d4d4dff',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Energia2)}</Text>

              </View>
            
              
            </View>


            


        </View>  

        <View style={{marginLeft:"5%",width:'90%'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight: "bold",color:'#ff4040'}}>Macronutrientes</Text>
            </View>


            <View style={{flexDirection:'column',marginVertical:"5%"}}>
              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Proteína (g)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Proteina)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Lipídeos (g)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Lipideos)}</Text>

              </View>

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Carboidrato (g)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Carboidrato)}</Text>

              </View>
            
              
            </View>


            


        </View>  

        <View style={{marginLeft:"5%",width:'90%'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight: "bold",color:'#ff4040'}}>Minerais</Text>
            </View>


            <View style={{flexDirection:'column',marginVertical:"5%"}}>
              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Cálcio (mg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Calcio)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Magnésio (mg)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Magnesio)}</Text>

              </View>

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Manganês (mg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Manganes)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Fósforo (mg)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Fosforo)}</Text>

              </View>

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Ferro (mg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Ferro)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Sódio (mg)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Sodio)}</Text>

              </View>

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Potássio (mg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Potassio)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Cobre (mg)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Cobre)}</Text>

              </View>

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Zinco (mg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Zinco)}</Text>

              </View>

            
            
              
            </View>


            


        </View>  
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3107661564294379/2937495271" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
        />

        <View style={{marginLeft:"5%",width:'90%'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:18,color:'#ff4040',fontWeight: "bold"}}>Vitaminas</Text>
            </View>


            <View style={{flexDirection:'column',marginVertical:"5%"}}>
              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Retinol (mcg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Retinol)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>RE (mcg)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.RE)}</Text>

              </View>

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>RAE (mcg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.REA)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Tiamina (mcg)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Tiamina)}</Text>

              </View>

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Riboflavina (mcg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Riboflavina)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Piridoxina (mcg)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Piridoxina)}</Text>

              </View>

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Niacina (mg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Niacina)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Vitamna C (mg)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.VitaminaC)}</Text>

              </View>
            
              
            </View>


            


        </View>  


        <View style={{marginLeft:"5%",width:'90%'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight: "bold",color:'#ff4040'}}>Outros</Text>
            </View>


            <View style={{flexDirection:'column',marginVertical:"5%"}}>
              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Umidade (%)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Umidade)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Cinzas (g)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Cinzas)}</Text>

              </View>

              <View style={{flexDirection:'row',height:40,alignItems:'center',backgroundColor:'#f6f6f6'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Colesterol (mg)</Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Colesterol)}</Text>

              </View>

              <View style={{flexDirection:'row',marginTop:'1%',height:40,alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#4d4d4dff',width:200}}>Fibra alimentar (g)   </Text>
                <Text style={{fontSize:18,color:'#4d4d4dff',borderBottomColor:'#cacaca',marginHorizontal:'20%',borderBottomWidth:1}}>{passandodados(item.Fibra)}</Text>

              </View>
            
              
            </View>


            


        </View>  


        

      
      
      
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3107661564294379/9268945817" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
        />
      


      </ScrollView>

    </View>
  );

}


function imc({ navigation }) {
  
  const [imagem,setimagem]=useState([
    {source:require('./image/peso2.png'),style:'',unidade:'kg',label:'Peso',val:'peso',key:1},
    {source:require('./image/altura2.png'),style:'',unidade:'m',label:'Altura',val:'altura',key:2},
    
    
    
    
  ]);

  


  const [peso,setpeso]=useState(0);
  const [altura,setaltura]=useState(0);

  const vari=()=>{
    var a='';
    if(peso!=0 && altura!=0){
      a="kg/m²"

    }else{
      a=''
    }

    return(a)
  }
  
  

  const fundo=(imc)=>{
    var a ='';
    var imc=parseFloat(imc)

    if(isNaN(imc)||imc==0||peso==0||altura==0){
      a=require('./image/resultado.png')

    }else{
      if(imc<16.00){
        a=require('./image/resultadomagreza.png')
  
      }
      if(imc>=16.00 && imc<=16.99){
        a=require('./image/resultadomagrezamoderado.png')
  
      }
      if(imc>=17.00 && imc<=18.49){
        a=require('./image/resultadomagrezaleve.png')
  
      }
      if(imc>=18.50 && imc<=24.49){
        a=require('./image/resultadonormal.png')
  
      }
      if(imc>=25.00 && imc<=29.99){
        a=require('./image/resultadosobrepeso.png')
  
      }
      if(imc>=30.00 && imc<=34.99){
        a=require('./image/resultadoobesidade.png')
      }
      if(imc>=35.00 && imc<=39.99){
        a=require('./image/resultadoobesidade2.png')
  
      }
      if(imc>=40.00){
        a=require('./image/resultadoobesidade3.png')
  
      }

    }
    

    


    return a    
  }

 const [modal,setmodal]=useState(false)

  
  

  return (
    <View style={styles.container}  >
      
      
      <Barraitens func={() => navigation.navigate('Home')} imagem={require('./image/imcmenu.png')} texto="Calculadora IMC"/>
      
      <Modal  
        entry="bottom"
        backdropPressToClose={true}
        isOpen={modal}
        style={{top:400,backgroundColor: "transparent",alignItems:"center"}}
      >
        <TouchableOpacity onPress={()=>{setmodal(false)}}>
          <Image  style={{top:15}} source={require('./image/slide.png')}/>

        </TouchableOpacity>
        
        <View style={{top:20,backgroundColor:'#ececec',borderTopLeftRadius:20,borderTopRightRadius: 20,}}>
          <Image  style={{top:15}} source={require('./image/tabelaimc.png')}/>
        </View>
      </Modal>

      

      <View enabled  style={{marginTop:20}}>

        <TouchableOpacity onPress={()=>{setmodal(true)}} style={{backgroundColor: "#DDDDDD",width:100,alignItems:'center',borderRadius: 6,borderColor: "black",borderWidth: 2,}}><Text>Ver tabela IMC</Text></TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:"5%",height:'80%',}}>
        

        <FlatList 
          numColumns={2}
          data={imagem}
          keyExtractor={item => item.key}
          renderItem={({item})=>(

          <View style={styles.entradas}>
            <Image style={styles.icones} source={item.source}/>
            
            <TextInput keyboardType="numeric" onChangeText={(val)=>{
              if(item.unidade=='kg'){
                setpeso(val)
              }
              if(item.unidade=='m'){
                setaltura(val)
              }



            } }
            style={styles.input} />
            
            <Text style={styles.label2}>{item.unidade}</Text>
            
              
            
              
            
            <Text style={styles.label}>{item.label}</Text>
          </View>
            

          )}
        
        
        />


        




          

          


        </View>

        <View style={{marginTop:"35%",}}>

          <ImageBackground source={fundo(imcfunc(peso,altura))} style={styles.image}>
            
            <View style={{top:'10%',alignItems:'center'}}>
              <Text style={[styles.text1,{color:'white'}]} >{statusimc(imcfunc(peso,altura))}</Text>
              <View style={styles.view2}>
                <Text style={[styles.text,{fontSize:70,color:'white'}]}>{imcfunc(peso,altura).toString().replace(/\./g,",")}</Text>
                <Text style={[styles.text,{color:'white'}]}>{vari()}</Text>
                
                

              </View>
              
              
              <Text style={[styles.text1,{color:'white'}]} >{pesoideal(peso,altura)}</Text>

            </View>
            
            
          </ImageBackground>
          
          
            
        </View>
      
        
        
        

        




      </View >

      
      
      
       
      




    </View>
   


    
  );
}


function macros({ navigation }) {
  


  const [energia,setenergia]=useState(0);
  const [proteina,setproteina]=useState(0);
  const [carboidrato,setcarboidrato]=useState(0);
  const [lipidio,stelipidio]=useState(0);

  const vari=()=>{
    var a='';
    if(peso!=0 && altura!=0){
      a="g"

    }else{
      a=''
    }

    return(a)
  }

  const vari2=()=>{
    var a='';
    if(pesograv!=0 && altura!=0){
      a="Kcal"

    }else{
      a=''
    }

    return(a)
  }



  const macros=(tipo)=>{
    var proteina1=parseFloat(proteina.toString().replace(/\,/g,"."))
    var lipidio1=parseFloat(lipidio.toString().replace(/\,/g,"."))
    var carboidrato1=parseFloat(carboidrato.toString().replace(/\,/g,"."))

    

    if(tipo=='proteina'){
      var val=proteina1/100

      return((val*energia).toFixed(0))


    }

    if(tipo=='lipidio'){
      var val=lipidio1/100

      return((val*energia).toFixed(0))

    }
    if(tipo=='caboidrato'){
      var val=carboidrato1/100

      return((val*energia).toFixed(0))

    }



  }




  const macrosgrama=(tipo)=>{


    var proteina1=parseFloat(proteina.toString().replace(/\,/g,"."))
    var lipidio1=parseFloat(lipidio.toString().replace(/\,/g,"."))
    var carboidrato1=parseFloat(carboidrato.toString().replace(/\,/g,"."))

    

    if(tipo=='proteina'){
      var val=proteina1/100

      return(((val*energia)/4).toFixed(2))


    }

    if(tipo=='lipidio'){
      var val=lipidio1/100

      return(((val*energia)/9).toFixed(2))

    }
    if(tipo=='caboidrato'){
      var val=carboidrato1/100

      return(((val*energia)/4).toFixed(2))

    }



  }

  const [imagem,setimagem]=useState([
    {source:require('./image/caloria.png'),style:'',unidade:'Kcal',label:'Valor enegético',val:'pesopre',key:1},
    {source:require('./image/proteina.png'),style:'',unidade:'%',label:'%Proteínas',val:'altura',key:2},
    {source:require('./image/carbo.png'),style:'',unidade:'%',label:'%Carboidratos',val:'pesograv',key:3},
    {source:require('./image/lip.png'),style:'',unidade:'%',label:'%Lipídios ',val:'semana',key:4},
    
    
    
  ]);
  const[link,setlink]=useState(require('./image/resultado.png'))

 
  
  
  
  

  
  

  return (
    
    <View style={styles.container}  >
      
      
      <Barraitens func={() => navigation.navigate('Home')} imagem={require('./image/macromenu.png')} texto="Distribuição de macronutrientes"/>
      
      

      

      <View   style={{marginTop:10,height:'50%',}}>


        <View style={{flexDirection:'column',justifyContent:'center',marginTop:"5%",height:'100%',}}>


        <FlatList 
          numColumns={2}
          data={imagem}
          keyExtractor={item => item.key}
          renderItem={({item})=>(

          <View style={styles.entradas}>
            <Image style={styles.icones} source={item.source}/>
            
            <TextInput keyboardType="numeric" onChangeText={(val)=>{
              if(item.key==1){
                setenergia(val)
              }
              if(item.key==2){
                setproteina(val)
              }
              if(item.key==3){
                setcarboidrato(val)

              }
              if(item.key==4){
                stelipidio(val)

              }



            } }
            style={styles.input} />
            
            <Text style={styles.label2}>{item.unidade}</Text>
            
              
            
              
            
            <Text style={styles.label}>{item.label}</Text>
          </View>
            

          )}
        
        
        />




          

          


        </View>

        <View  style={{marginTop:"105%",}}>

          <ImageBackground source={require('./image/resultado.png')} style={[styles.image,{flexDirection:'column'}]}>
            
            <View style={{top:'5%',alignItems:'center'}}>
              
              <View style={styles.view2}>
                <Text style={[styles.text,{fontSize:35}]}>{(proteina/100)*energia+(lipidio/100)*energia+(carboidrato/100)*energia}</Text>
                <Text style={[styles.text,{fontSize:15}]}>Kcal</Text>
                
                

              </View>
              
              
              <Text style={styles.text1} >VET</Text>

            </View>

            <View style={{top:'10%',alignItems:'center',flexDirection:'row'}}>

              <View style={{alignItems:'center',marginHorizontal:'2%'}}>
                <Text style={styles.text1} >Proteínas</Text>
                
                <View style={styles.view2}>
                  <Text style={[styles.text,{fontSize:20}]}>{macrosgrama('proteina').toString().replace(/\./g,",")}</Text>
                  <Text style={[styles.text,{fontSize:12}]}>g</Text>
                  
                  

                </View>

                <View style={styles.view2}>
                  <Text style={[styles.text,{fontSize:20}]}>{macros('proteina')}</Text>
                  <Text style={[styles.text,{fontSize:12}]}>Kcal</Text>
                  
                  

                </View>
                
                
                

              </View>



              <View style={{alignItems:'center',marginHorizontal:'2%'}}>
                <Text style={styles.text1} >Carboidratos</Text>
                
                <View style={styles.view2}>
                  <Text style={[styles.text,{fontSize:20}]}>{macrosgrama('caboidrato').toString().replace(/\./g,",")}</Text>
                  <Text style={[styles.text,{fontSize:12}]}>g</Text>
                  
                  

                </View>

                <View style={styles.view2}>
                  <Text style={[styles.text,{fontSize:20}]}>{macros('caboidrato')}</Text>
                  <Text style={[styles.text,{fontSize:12}]}>Kcal</Text>
                  
                  

                </View>
                
                
                

              </View>

              <View style={{alignItems:'center',marginHorizontal:'2%'}}>
                <Text style={styles.text1} >Lipídios</Text>
                
                <View style={styles.view2}>
                  <Text style={[styles.text,{fontSize:20}]}>{macrosgrama('lipidio').toString().replace(/\./g,",")}</Text>
                  <Text style={[styles.text,{fontSize:12}]}>g</Text>
                  
                  

                </View>

                <View style={styles.view2}>
                  <Text style={[styles.text,{fontSize:20}]}>{macros('lipidio')}</Text>
                  <Text style={[styles.text,{fontSize:12}]}>Kcal</Text>
                  
                  

                </View>
                
                
                

              </View>

            </View>
            
            
            
            
            
            
          </ImageBackground>

          
          
            
        </View>
      
        
        
        

        




      </View >

      
      
      
       
      




    </View>

    
  );
}



function imcgrav({ navigation }) {
  


  const [peso,setpeso]=useState(0);
  const [pesograv,setgrav]=useState(0);
  const [semana,setsemana]=useState(0);
  const [altura,setaltura]=useState(0);

  const vari=()=>{
    var a='';
    if(peso!=0 && altura!=0){
      a="kg/m²"

    }else{
      a=''
    }

    return(a)
  }

  const vari2=()=>{
    var a='';
    if(pesograv!=0 && altura!=0){
      a="kg/m²"

    }else{
      a=''
    }

    return(a)
  }


  const fundo=(imc)=>{
    var a ='';
    var imc=parseFloat(imc)

    if(isNaN(imc)||imc==0||peso==0||altura==0){
      a=require('./image/resultadograv.png')

    }else{
      
  
      
      if(imc<=18.49){
        a=require('./image/gravidabaixopeso.png')
  
      }
      if(imc>=18.50 && imc<=24.49){
        a=require('./image/gravidapesonormal.png')
  
      }
      if(imc>=25.00 && imc<=29.99){
        a=require('./image/gravidasobrepeso.png')
  
      }
      if(imc>=30.00){
        a=require('./image/gravidaobesidade.png')
      }
     

    }
    

    


    return a    
  }
  

  const [imagem,setimagem]=useState([
    {source:require('./image/peso2.png'),style:'',unidade:'kg',label:'Peso anterior',val:'pesopre',key:1},
    {source:require('./image/altura2.png'),style:'',unidade:'m',label:'Altura',val:'altura',key:2},
    {source:require('./image/pesograv.png'),style:'',unidade:'kg',label:'Peso atual',val:'pesograv',key:3},
    {source:require('./image/semana.png'),style:'',unidade:'SG',label:'Semana ',val:'semana',key:4},
    
    
    
  ]);
  const[link,setlink]=useState(require('./image/resultado.png'))

 
  
  
  
  

  
  

  return (
    
    <View style={styles.container}  >
      
      
      <Barraitens func={() => navigation.navigate('Home')} imagem={require('./image/gestantemenu.png')} texto="Calculadora IMC gestante"/>
      
      

      

      <View   style={{marginTop:10,height:'50%',}}>


        <View style={{flexDirection:'column',justifyContent:'center',marginTop:"5%",height:'100%',}}>


        <FlatList 
          numColumns={2}
          data={imagem}
          keyExtractor={item => item.key}
          renderItem={({item})=>(

          <View style={styles.entradas}>
            <Image style={styles.icones} source={item.source}/>
            
            <TextInput keyboardType="numeric" onChangeText={(val)=>{
              if(item.key==1){
                setpeso(val)
              }
              if(item.key==2){
                setaltura(val)
              }
              if(item.key==3){
                setgrav(val)

              }
              if(item.key==4){
                setsemana(val)

              }



            } }
            style={styles.input} />
            
            <Text style={styles.label2}>{item.unidade}</Text>
            
              
            
              
            
            <Text style={styles.label}>{item.label}</Text>
          </View>
            

          )}
        
        
        />




          

          


        </View>

        <View  style={{marginTop:"100%",}}>

          <ImageBackground source={fundo(imcfunc(peso,altura))} style={styles.image}>
            
            <View style={{flexDirection:'row',top:"15%"}}>
              
              <View style={styles.gravida}>
                <Text style={styles.resultadograv} >IMC anterior</Text>
                <View style={styles.view2}>
                  <Text style={[styles.text3,{color:'black'}]}>{imcfunc(peso,altura).toString().replace(/\./g,',')}</Text>
                  <Text style={[styles.text5,{color:'black'}]}>{vari()}</Text>

                </View>
                <Text style={[styles.text4,{color:'black'}]}>{status2(imcfunc(peso,altura))}</Text>
                
              </View>

              <View style={styles.gravida}>
                <Text style={styles.resultadograv}>IMC na SG</Text>
                <View style={styles.view2}>
                  <Text style={[styles.text3,{color:'black'}]}>{imcfunc(pesograv,altura).toString().replace(/\./g,',')}</Text>
                  <Text style={[styles.text5,{color:'black'}]}>{vari2()}</Text>

                </View>
                <Text style={[styles.text4,{fontSize:15,color:'black'}]}>Faixa adequada:</Text>
                <Text style={[styles.text4,{fontSize:13,color:'black',textAlign:'center',width:"100%"}]}>{acharsemana(dadossemanas,'semana',parseFloat(semana),status(imcfunc(peso,altura)))+"kg/m²"}</Text>
              </View>
              
              

            </View>
            
            
            
          </ImageBackground>

          
          
            
        </View>
      
        
        
        

        




      </View >

      
      
      
       
      




    </View>

    
  );
}

function pesoajust({ navigation }) {
  


  const [peso,setpeso]=useState(0);
  
  const [altura,setaltura]=useState(0);
  const [imc,setimc]=useState(0);

  const vari=()=>{
    var a='';
    if(peso!=0 && altura!=0 &&imc!=0){
      a="kg"

    }else{
      a=''
    }

    return(a)
  }


 

  const [imagem,setimagem]=useState([
    {source:require('./image/peso2.png'),style:'',unidade:'kg',label:'Peso anterior',val:'pesopre',key:1},
    {source:require('./image/altura2.png'),style:'',unidade:'m',label:'Altura',val:'altura',key:2},
    {source:require('./image/imcc.png'),style:'',unidade:'kg/m²',label:'IMC Ideal',val:'imc',key:3},
    
    
    
    
  ]);
  const[link,setlink]=useState(require('./image/resultado.png'))

 
  
  
  
  

  
  

  return (
    
    <View style={styles.container}  >
      
      
      <Barraitens func={() => navigation.navigate('Home')} imagem={require('./image/idealmenu.png')} texto="Peso ideal e ajustado"/>
      
      

      

      <View   style={{marginTop:10,height:'50%',}}>


        <View style={{flexDirection:'column',justifyContent:'center',marginTop:"5%",height:'100%',}}>


        <FlatList 
          numColumns={2}
          data={imagem}
          keyExtractor={item => item.key}
          renderItem={({item})=>(

          <View style={styles.entradas}>
            <Image style={styles.icones} source={item.source}/>
            
            <TextInput keyboardType="numeric" onChangeText={(val)=>{
              if(item.key==1){
                setpeso(val)
              }
              if(item.key==2){
                setaltura(val)
              }
              if(item.key==3){
                setimc(val)

              }
              


            } }
            style={styles.input} />
            
            <Text style={styles.label2}>{item.unidade}</Text>
            
              
            
              
            
            <Text style={styles.label}>{item.label}</Text>
          </View>
            

          )}
        
        
        />




          

          


        </View>

        <View  style={{marginTop:"100%",}}>

          <ImageBackground source={require('./image/resultadograv.png')} style={styles.image}>
            
            <View style={{flexDirection:'row',top:"15%"}}>
              
              <View style={styles.gravida}>
                <Text style={styles.resultadograv} >Peso ideal</Text>
                <View style={styles.view2}>
                  <Text style={styles.text3}>{pesoid(imc,altura).toString().replace(/\./g,",")}</Text>
                  <Text style={styles.text5}>{vari()}</Text>

                </View>
                
                
              </View>

              <View style={styles.gravida}>
                <Text style={styles.resultadograv}>Peso Ajustado</Text>
                <View style={styles.view2}>
                  <Text style={styles.text3}>{pesoajus(peso,pesoid(imc,altura)).toString().replace(/\./g,",")}</Text>
                  <Text style={styles.text5}>{vari()}</Text>

                </View>
                
              </View>
              
              

            </View>
            
            
            
          </ImageBackground>

          
          
            
        </View>
      
        
        
        

        




      </View >

      
      
      
       
      




    </View>

    
  );
}


function harrisbenedict({ navigation }) {
  


  const [peso,setpeso]=useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  
  const [altura,setaltura]=useState(0);
  const [idade,setidade]=useState(0);
  


  const vari=()=>{
    var a='';
    if(peso!=0 && altura!=0 && idade!=0){
      a="Kcal"

    }else{
      a=''
    }

    return(a)
  }



  const [imagem,setimagem]=useState([
    {source:require('./image/peso2.png'),style:'',unidade:'kg',label:'Peso ',val:'pesopre',key:1},
    {source:require('./image/altura2.png'),style:'',unidade:'cm',label:'Altura',val:'altura',key:2},
    {source:require('./image/idade.png'),style:'',unidade:'y',label:'Idade',val:'pesograv',key:3},
    {source:require('./image/atividade.png'),style:'',unidade:'',label:'Fator atividade ',val:'semana',key:4},
    
    
    
  ]);
  const[link,setlink]=useState(require('./image/resultado.png'))

  
  const Visu=(item)=>{

    if(item.key==4){

      return(
        <Picker
        selectedValue={selectedValue}
        
        mode='dropdown'
        style={{ height: 50, width: "120%" ,fontSize:30}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Sem fator" value="sem" />
        <Picker.Item label="Sedentário" value="sendent" />
        <Picker.Item label="Leve" value="leve" />
        <Picker.Item label="Moderado" value="moderado" />
        <Picker.Item label="Intenso" value="intenso" />
      </Picker>
      )

    }else{
      return(<TextInput keyboardType="numeric" onChangeText={(val)=>{
        if(item.key==1){
          setpeso(val)
        }
        if(item.key==2){
          setaltura(val)
        }
        if(item.key==3){
          setidade(val)

        }
       



      } }
      style={styles.input} />)


    }



  }
  
  
  

  
  

  return (
    
    <View style={styles.container}  >
      
      
      <Barraitens func={() => navigation.navigate('Home')} imagem={require('./image/harrismenu.png')} texto="Calculadora Harris Benedict"/>
      
      

      

      <View   style={{marginTop:10,height:'50%',}}>


        <View style={{flexDirection:'column',justifyContent:'center',marginTop:"5%",height:'100%',}}>


        <FlatList 
          numColumns={2}
          data={imagem}
          keyExtractor={item => item.key}
          renderItem={({item})=>(

          <View style={styles.entradas}>
            <Image style={styles.icones} source={item.source}/>
            
            
            
            {Visu(item)}


            
            
            <Text style={styles.label2}>{item.unidade}</Text>
            
              
            
              
            
            <Text style={styles.label}>{item.label}</Text>
          </View>
            

          )}
        
        
        />




          

          


        </View>

        <View  style={{marginTop:"110%",}}>

          <ImageBackground source={require('./image/resultadograv.png')} style={styles.image}>
            
            <View style={{flexDirection:'row',top:"15%"}}>
              
              <View style={styles.gravida}>
                <Text style={styles.resultadograv} >Mulheres</Text>
                <View style={styles.view2}>
                <Text style={styles.text3}>{mulher(peso,altura,idade,selectedValue).toString().replace(/\./g,',')}</Text>
                  <Text style={styles.text5}>{vari()}</Text>

                </View>
                
                
              </View>

              <View style={styles.gravida}>
                <Text style={styles.resultadograv}>Homens</Text>
                <View style={styles.view2}>
                <Text style={styles.text3}>{homem(peso,altura,idade,selectedValue).toString().replace(/\./g,',')}</Text>
                  <Text style={styles.text5}>{vari()}</Text>

                </View>
                
              </View>
              
              

            </View>
            
            
            
          </ImageBackground>

          
          
            
        </View>
      
        
        
        

        




      </View >

      
      
      
       
      




    </View>

    
  );
}


function fatorcorrec({ navigation }) {
  


  const [pesobruto,setpesobruto]=useState(0);
  const [unidade, setunidade] = useState("");
  
  const [pesoliquido,setpesoliquido]=useState(0);

  const valor=()=>{
    var pesobruto1=parseFloat(pesobruto.toString().replace(/\,/g,'.'))
    var pesoliquido1=parseFloat(pesoliquido.toString().replace(/\,/g,'.'))
    var a=(pesobruto1/pesoliquido1).toFixed(2).toString().replace(/\./g,",");
                  
    if(a=='NaN'){
      return('')
    }else{

      return(a)
    }
  
  

  

  }
  const vari=()=>{
    var a='';
    if(peso!=0 && altura!=0 && idade!=0){
      a="Kcal"

    }else{
      a=''
    }

    return(a)
  }



  const [imagem,setimagem]=useState([
    {source:require('./image/fatorunidade.png'),style:'',unidade:'',label:'Unidade ',val:'pesopre',key:1},
    {source:require('./image/fatorpesobruto.png'),style:'',unidade:unidade,label:'Peso bruto',val:'altura',key:2},
    {source:require('./image/fatorpesoliq.png'),style:'',unidade:unidade,label:'Peso líquido',val:'pesograv',key:3},
    
    
    
    
  ]);
  const[link,setlink]=useState(require('./image/resultado.png'))

  
  const Visu=(item)=>{
    

    if(item.key==1){

      return(
        <Picker
        selectedValue={unidade}
        
        mode='dropdown'
        style={{ height: 50, width: "120%" ,fontSize:30}}
        onValueChange={(itemValue, itemIndex) => setunidade(itemValue)}
      >
        <Picker.Item label="g" value="g" />
        <Picker.Item label="kg" value="kg" />
        
      </Picker>
      )

    }else{
      return(<TextInput keyboardType="numeric" onChangeText={(val)=>{
        if(item.key==2){
          setpesobruto(val)
        }
        if(item.key==3){
          setpesoliquido(val)
        }
        
       



      } }
      style={styles.input} />)


    }



  }
  
  
  

  
  

  return (
    
    <View style={styles.container}  >
      
      
      <Barraitens func={() => navigation.navigate('Home')} imagem={require('./image/fatormenu.png')} texto="Fator de correção"/>
      
      

      

      <View   style={{marginTop:10,height:'50%',}}>


        <View style={{flexDirection:'column',justifyContent:'center',marginTop:"5%",height:'100%',}}>


        <FlatList 
          numColumns={2}
          data={imagem}
          keyExtractor={item => item.key}
          renderItem={({item})=>(

          <View style={styles.entradas}>
            <Image style={styles.icones} source={item.source}/>
            
            
            
            {Visu(item)}


            
            
            <Text style={styles.label2}>{item.unidade}</Text>
            
              
            
              
            
            <Text style={styles.label}>{item.label}</Text>
          </View>
            

          )}
        
        
        />




          

          


        </View>

        <View  style={{marginTop:"110%",}}>

          <ImageBackground source={require('./image/resultado.png')} style={styles.image}>
            
            <View style={{flexDirection:'row',top:"15%"}}>
              
              <View style={styles.gravida}>
                <Text style={styles.resultadograv} >Fator de correção:</Text>
                <View style={styles.view2}>
                <Text style={styles.text3}>{valor()}</Text>
                  

                </View>
                
                
              </View>

              
              
              

            </View>
            
            
            
          </ImageBackground>

          
          
            
        </View>
      
        
        
        

        




      </View >

      
      
      
       
      




    </View>

    
  );
}

const Stack = createStackNavigator();



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
   
    






  },


  container1: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    
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








function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="primeira"
          screenOptions={{
            headerShown: false
          }}
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="imc" component={imc}/>
        <Stack.Screen name="imcgrav" component={imcgrav}/>
        <Stack.Screen name="harrisbenedict" component={harrisbenedict}/>
        <Stack.Screen name="macros" component={macros}/>
        <Stack.Screen name="pesoajust" component={pesoajust}/>
        <Stack.Screen name="fatorcorrec" component={fatorcorrec}/>
        <Stack.Screen name="barraitens" component={Barraitens}/>
        <Stack.Screen name="tabelataco" component={Tabelataco}/>
        <Stack.Screen name="primeira" component={Primeirapag}/>
        <Stack.Screen name="taconome" component={Taconome}/>
        <Stack.Screen name="nutrientestaco" component={Nutrientestaco}/>
        <Stack.Screen name="tabelanconvencionais" component={Tabelanconvencionais}/>
        <Stack.Screen name="convencionaisnome" component={convencionaisnome}/>
        <Stack.Screen name="nconvencionaisnutrientes" component={nconvencionaisnutrientes}/>

        
       
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}





















export default App;
