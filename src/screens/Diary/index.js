import React,{useState, useEffect, useContext} from "react";
import {Text, ImageBackground, TouchableOpacity, StyleSheet, View, Image, ScrollView} from 'react-native';
import {Container, MyHeader, Pergunta, Pergunta2} from './styles.js';
import { Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import database from "../../config/firebaseconfig"
import { UserContext } from '../../contexts/UserContext';


export default () => {
    let day = new Date().getDate(); //Para obter o dia
    let month = new Date().getMonth() + 1; //Para obter o mês
    let year = new Date().getFullYear(); //Para obter o ano
    const diaSemanaAtual = new Date().getDay();
    var weekdays = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"); 
    const navigation = useNavigation();
    const [task, setTask] = useState([]);
    const [task2, setTask2] = useState([]);
    const { state: user } = useContext(UserContext);
    
    const handleTermos = () =>{
        navigation.navigate('Q1')
    }
    
    const handleQ1 = () =>{
        navigation.navigate('Q1')
    }
    const handleQ2 = () =>{
        navigation.navigate('Q2')
    }
    const handleQ3 = () =>{
        navigation.navigate('Q3')
    }
    const handleQ4 = () =>{
        navigation.navigate('Q4')
    }
    const handleQ5 = () =>{
        navigation.navigate('Q5')
    }
    const handleNotas = () =>{
        navigation.navigate('Notas')
    }
    useEffect(() => {
        database.collection("Perguntas").onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id })
            })
            setTask(list)
        })

        database.collection("Usuario").onSnapshot((query) => {
            const list2 = [];
            query.forEach((doc) => {
                    list2.push({ ...doc.data(), id: doc.id })
            })
            setTask2(list2)
        })

    }, [])
    var tupla2 = task2;
    var comp2 = task2.length;
    var id2 = []
    var tupla = task;
    var comp = task.length;
    var prem1 = "0"
    var prem2 = "0"
    var prem3 = "0"
    var prem4 = "0"

    for (var c = 0; c < comp; c++) {
        if (tupla[c]["dia"] != day && tupla[c]["mes"]!=month) {
            var prem1 = tupla[c]["mensagem1"];
            var prem2 = tupla[c]["mensagem2"];
            var prem3 = tupla[c]["mensagem3"];
            var prem4 = tupla[c]["mensagem4"];

        }
    }
    for (var c2 = 0; c2 < comp2; c2++) {
        if (tupla2[c2]["email"] == user.name ) {
            var id2 = tupla2[c2]["notas"];
           
            comp2 =c2;
            
        }
    }
    const [backgroundColor, setBackgroundColor] = useState('#1EEBB8B0');
    const changeBackgroundColor = () => {
        // Lógica para alterar a cor de fundo (por exemplo, alternar entre vermelho e verde)
        const newColor = backgroundColor === '#1EEBB8B0' ? 'lightgreen' : '#1EEBB8B0';
        
        // Atualizar o estado com a nova cor de fundo
        setBackgroundColor(newColor);
      };
      const changeBackgroundColor2 = () => {
        // Lógica para alterar a cor de fundo (por exemplo, alternar entre vermelho e verde)
        const newColor = backgroundColor === '#1EEBB8B0' ? '#EBD400' : '#1EEBB8B0';
        
        // Atualizar o estado com a nova cor de fundo
        setBackgroundColor(newColor);
      };
      const changeBackgroundColor3 = () => {
        // Lógica para alterar a cor de fundo (por exemplo, alternar entre vermelho e verde)
        const newColor = backgroundColor === '#1EEBB8B0' ? '#BE4D00' : '#1EEBB8B0';
        
        // Atualizar o estado com a nova cor de fundo
        setBackgroundColor(newColor);
      };
    
   
  
    return (
        <ScrollView>

        <Container>
            
               <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('../Home/background1.png')}
            >
         <MyHeader>
            <Text style={{fontSize:22, marginLeft:5, marginTop:50, textAlign:'left', fontWeight:"bold"}} >{weekdays[diaSemanaAtual]}: {day}/{month} </Text>
            <TouchableOpacity onPress={handleNotas} style={{marginTop:10  , backgroundColor:'#1EEBB8B0', width:'90%', textAlign:'center', alignItems:'center', borderRadius:15, marginLeft:'5%' }} >
            <Text style={{fontSize:20, margin:10, color:'#103F18'}}  >Adicionar nota diária</Text>
            </TouchableOpacity>
            <Text onPress={handleQ5} style={{   textDecorationLine: 'underline',fontSize:14, marginTop:3, textAlign:'left', color:'#AFAFAF', width:'32%', marginLeft:'34%' }} >ver todas as notas </Text>
             
        </MyHeader>

        

        <Text style={{fontSize:16, margin:10, color:'#103F18', fontWeight:'bold', width:'36%', marginLeft:'32%'}}  >Perguntas Diárias</Text>
        <Pergunta2 style={{backgroundColor}}  >
            <Text style={{fontSize:16, textAlign:'left', margin:10,color:'white', marginTop:22}} > Como vai o dia hoje? </Text>
            <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={changeBackgroundColor}>
             <Image  
                    style={styles.checkbox}
                    source={require('./feliz.png')}
                />
                <Text></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={changeBackgroundColor2}>
                 <Image  
                    style={styles.checkbox}
                    source={require('./surpreso.png')}
                />
                <Text></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={changeBackgroundColor3}>
             <Image  
                    style={styles.checkbox}
                    source={require('./triste.png')}
                />
                <Text></Text>
                </TouchableOpacity>
        </View>
        
        </Pergunta2>
        {/*Checkando se a mensagem 1 está respondida*/
      
        }
        {( id2.includes(prem1) == true ) ? 
        <Pergunta style={{backgroundColor:"green"}} >
        <Text style={{fontSize:16, textAlign:'left', margin:10, color:"white"}} > Mensagem já respondida </Text>
        </Pergunta>      
            : 
            <Pergunta onPress={handleQ1} >
            <Text style={{fontSize:16, textAlign:'left', margin:10}} > {prem1}  </Text>
        </Pergunta>
        }
        {/*Checkando se a mensagem 2 está respondida*/}
        {( id2.includes(prem2) == true ) ? 
        <Pergunta style={{backgroundColor:"green"}} >
        <Text style={{fontSize:16, textAlign:'left', margin:10, color:"white"}} > Mensagem já respondida </Text>
        </Pergunta>      
            : 
            <Pergunta onPress={handleQ2} >
            <Text style={{fontSize:16, textAlign:'left', margin:10}} > {prem2}  </Text>
        </Pergunta>
        }

         {/*Checkando se a mensagem 3 está respondida*/}
         {( id2.includes(prem3) == true ) ? 
        <Pergunta style={{backgroundColor:"green"}} >
        <Text style={{fontSize:16, textAlign:'left', margin:10, color:"white"}} > Mensagem já respondida </Text>
        </Pergunta>      
            : 
            <Pergunta onPress={handleQ3} >
            <Text style={{fontSize:16, textAlign:'left', margin:10}} > {prem3}  </Text>
        </Pergunta>
        }
         {/*Checkando se a mensagem 4 está respondida*/}
         {( id2.includes(prem4) == true ) ? 
        <Pergunta style={{backgroundColor:"green"}} >
        <Text style={{fontSize:16, textAlign:'left', margin:10, color:"white"}} > Mensagem já respondida </Text>
        </Pergunta>      
            : 
            <Pergunta onPress={handleQ4} >
            <Text style={{fontSize:16, textAlign:'left', margin:10}} > {prem4}  </Text>
        </Pergunta>
        }
            </ImageBackground>
        </Container>
                    
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 3
     
    },
    checkbox: {
      alignSelf: 'center',
      height:25,
      width:25
    },
    label: {
      margin: 8,
      textAlign:'center',
      justifyContent:"center",
      fontSize:18,
      fontWeight:"bold",
      marginTop:-1
    },
  });
  