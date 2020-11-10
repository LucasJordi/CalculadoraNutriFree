
import React, {useState} from 'react';
import { StyleSheet, Text,Picker,SafeAreaView,InteractionManager,KeyboardAvoidingView, ImageBackground,View, Image,ScrollView ,TouchableOpacity,Button,TextInput,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {imcfunc,status,acharsemana,dadossemanas,statusimc,pesoideal} from "./functions/Imc";

import Barra from "./content/barra";
import {status2} from "./functions/Imc";
import {homem,mulher} from "./functions/harris";











function HomeScreen({ navigation }) {



  const [imagem,setimagem]=useState([
    {source:require('./image/imc2.png'),func:imc,key:1,nome:"Calculadora IMC"},
    {source:require('./imagens/harris2.png'),func:harrisbenedict,key:2,nome:"Harris Benedict"},
    {source:require('./imagens/macro2.png'),func:macros,key:3,nome:"Distribuição macronutrientes"},
    {source:require('./imagens/pesoajus1.png'),func:pesoajust,key:4,nome:"Peso ideal e ajustado"},
    {source:require('./imagens/fator1.png'),func:fatorcorrec,key:5,nome:"Fator de correção"},
    {source:require('./imagens/gravi.png'),func:imcgrav,key:6,nome:"IMC grávida"},
    
    
  ]);
  return (

    <View style={styles.container}>

      
      <Barra />

      

      <View style={{marginTop:10,height:"90%"}}>

        <FlatList 
          numColumns={2}
          data={imagem}
          keyExtractor={item => item.key}
          renderItem={({item})=>(
            <TouchableOpacity  style={{alignItems:"center"}} onPress={() => navigation.navigate(item.func)} activeOpacity={0.9}>
                  
                
                <Image
                  source={item.source} style={styles.imagem}
                  
                  
                />
                <Text style={{width:'70%',top:'-10%',textAlign:"center"}}>{item.nome}</Text>
                
                
                
            </TouchableOpacity>
            

          )}
        
        
        />




      </View>

      
      
      
       
      




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
  

  
 

  
  

  return (
    <View style={styles.container}  >
      
      
      <Barra />
      
      

      

      <View enabled  style={{marginTop:10}}>


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

          <ImageBackground source={require('./image/resultado.png')} style={styles.image}>
            
            <View style={{top:'10%',alignItems:'center'}}>
              <Text style={styles.text1} >{statusimc(imcfunc(peso,altura))}</Text>
              <View style={styles.view2}>
                <Text style={[styles.text,{fontSize:70}]}>{imcfunc(peso,altura).toString().replace(/\./g,",")}</Text>
                <Text style={styles.text}>{vari()}</Text>
                
                

              </View>
              
              
              <Text style={styles.text1} >{pesoideal(peso,altura)}</Text>

            </View>
            
            
          </ImageBackground>
          
          
            
        </View>
      
        
        
        

        




      </View >

      
      
      
       
      




    </View>
   


    
  );
}


function macros() {
  


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

  const [imagem,setimagem]=useState([
    {source:require('./image/caloria.png'),style:'',unidade:'Kcal',label:'Valor enegético',val:'pesopre',key:1},
    {source:require('./image/proteina.png'),style:'',unidade:'%',label:'%Proteínas',val:'altura',key:2},
    {source:require('./image/carbo.png'),style:'',unidade:'%',label:'%Carboidratos',val:'pesograv',key:3},
    {source:require('./image/lip.png'),style:'',unidade:'%',label:'%Lipídios ',val:'semana',key:4},
    
    
    
  ]);
  const[link,setlink]=useState(require('./image/resultado.png'))

 
  
  
  
  

  
  

  return (
    
    <View style={styles.container}  >
      
      
        <Barra />
      
      

      

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

        <View  style={{marginTop:"105%",}}>

          <ImageBackground source={require('./image/resultado.png')} style={[styles.image,{flexDirection:'column'}]}>
            
            <View style={{top:'5%',alignItems:'center'}}>
              
              <View style={styles.view2}>
                <Text style={[styles.text,{fontSize:35}]}>1800</Text>
                <Text style={[styles.text,{fontSize:15}]}>Kcal</Text>
                
                

              </View>
              
              
              <Text style={styles.text1} >VET</Text>

            </View>

            <View style={{top:'10%',alignItems:'center',flexDirection:'row'}}>

              <View style={{alignItems:'center',marginHorizontal:'2%'}}>
                <Text style={styles.text1} >Proteínas</Text>
                
                <View style={styles.view2}>
                  <Text style={[styles.text,{fontSize:20}]}>75</Text>
                  <Text style={[styles.text,{fontSize:12}]}>g</Text>
                  
                  

                </View>

                <View style={styles.view2}>
                  <Text style={[styles.text,{fontSize:20}]}>1000</Text>
                  <Text style={[styles.text,{fontSize:12}]}>Kcal</Text>
                  
                  

                </View>
                
                
                

              </View>



              <View style={{alignItems:'center',marginHorizontal:'2%'}}>
                <Text style={styles.text1} >Carboidratos</Text>
                
                <View style={styles.view2}>
                  <Text style={[styles.text,{fontSize:20}]}>75</Text>
                  <Text style={[styles.text,{fontSize:12}]}>g</Text>
                  
                  

                </View>

                <View style={styles.view2}>
                  <Text style={[styles.text,{fontSize:20}]}>1000</Text>
                  <Text style={[styles.text,{fontSize:12}]}>Kcal</Text>
                  
                  

                </View>
                
                
                

              </View>

              <View style={{alignItems:'center',marginHorizontal:'2%'}}>
                <Text style={styles.text1} >Lipídios</Text>
                
                <View style={styles.view2}>
                  <Text style={[styles.text,{fontSize:20}]}>75</Text>
                  <Text style={[styles.text,{fontSize:12}]}>g</Text>
                  
                  

                </View>

                <View style={styles.view2}>
                  <Text style={[styles.text,{fontSize:20}]}>1000</Text>
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



function imcgrav() {
  


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

  const [imagem,setimagem]=useState([
    {source:require('./image/peso2.png'),style:'',unidade:'kg',label:'Peso anterior',val:'pesopre',key:1},
    {source:require('./image/altura2.png'),style:'',unidade:'m',label:'Altura',val:'altura',key:2},
    {source:require('./image/pesograv.png'),style:'',unidade:'kg',label:'Peso atual',val:'pesograv',key:3},
    {source:require('./image/semana.png'),style:'',unidade:'SG',label:'Semana ',val:'semana',key:4},
    
    
    
  ]);
  const[link,setlink]=useState(require('./image/resultado.png'))

 
  
  
  
  

  
  

  return (
    
    <View style={styles.container}  >
      
      
        <Barra />
      
      

      

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

          <ImageBackground source={require('./image/resultadograv.png')} style={styles.image}>
            
            <View style={{flexDirection:'row',top:"15%"}}>
              
              <View style={styles.gravida}>
                <Text style={styles.resultadograv} >IMC anterior</Text>
                <View style={styles.view2}>
                  <Text style={styles.text3}>{imcfunc(peso,altura).toString().replace(/\./g,',')}</Text>
                  <Text style={styles.text5}>{vari()}</Text>

                </View>
                <Text style={styles.text4}>{status2(imcfunc(peso,altura))}</Text>
                
              </View>

              <View style={styles.gravida}>
                <Text style={styles.resultadograv}>IMC na SG</Text>
                <View style={styles.view2}>
                  <Text style={styles.text3}>{imcfunc(pesograv,altura).toString().replace(/\./g,',')}</Text>
                  <Text style={styles.text5}>{vari2()}</Text>

                </View>
                <Text style={[styles.text4,{fontSize:15}]}>Faixa adequada:</Text>
                <Text style={[styles.text4,{fontSize:13,textAlign:'center',width:"100%"}]}>{acharsemana(dadossemanas,'semana',parseFloat(semana),status(imcfunc(peso,altura)))+"kg/m²"}</Text>
              </View>
              
              

            </View>
            
            
            
          </ImageBackground>

          
          
            
        </View>
      
        
        
        

        




      </View >

      
      
      
       
      




    </View>

    
  );
}

function pesoajust() {
  


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

  const [imagem,setimagem]=useState([
    {source:require('./image/peso2.png'),style:'',unidade:'kg',label:'Peso anterior',val:'pesopre',key:1},
    {source:require('./image/altura2.png'),style:'',unidade:'m',label:'Altura',val:'altura',key:2},
    {source:require('./image/imcc.png'),style:'',unidade:'kg/m²',label:'IMC Ideal',val:'imc',key:3},
    
    
    
    
  ]);
  const[link,setlink]=useState(require('./image/resultado.png'))

 
  
  
  
  

  
  

  return (
    
    <View style={styles.container}  >
      
      
        <Barra />
      
      

      

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

          <ImageBackground source={require('./image/resultadograv.png')} style={styles.image}>
            
            <View style={{flexDirection:'row',top:"15%"}}>
              
              <View style={styles.gravida}>
                <Text style={styles.resultadograv} >Peso ideal</Text>
                <View style={styles.view2}>
                  <Text style={styles.text3}>79</Text>
                  <Text style={styles.text5}>kg</Text>

                </View>
                
                
              </View>

              <View style={styles.gravida}>
                <Text style={styles.resultadograv}>Peso Ajustado</Text>
                <View style={styles.view2}>
                  <Text style={styles.text3}>79</Text>
                  <Text style={styles.text5}>kg</Text>

                </View>
                
              </View>
              
              

            </View>
            
            
            
          </ImageBackground>

          
          
            
        </View>
      
        
        
        

        




      </View >

      
      
      
       
      




    </View>

    
  );
}


function harrisbenedict() {
  


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
      
      
        <Barra />
      
      

      

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


function fatorcorrec() {
  


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
    {source:require('./image/fatorunidade.png'),style:'',unidade:'',label:'Unidade ',val:'pesopre',key:1},
    {source:require('./image/fatorpesobruto.png'),style:'',unidade:'kg',label:'Peso bruto',val:'altura',key:2},
    {source:require('./image/fatorpesoliq.png'),style:'',unidade:'kg',label:'Peso líquido',val:'pesograv',key:3},
    
    
    
    
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
      
      
        <Barra />
      
      

      

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
                  <Text style={styles.text3}>2.2</Text>
                  

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
    
    transform:[{scale:0.5}],
    
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
      <Stack.Navigator initialRouteName="Home"
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
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
