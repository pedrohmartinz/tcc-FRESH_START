import React,{useState, useEffect} from "react";
import {Text, ImageBackground, TouchableOpacity, StyleSheet, View, Image, ScrollView} from 'react-native';
import {Container, MyHeader, Pergunta, Pergunta2} from './styles.js';
import { Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import database from "../../config/firebaseconfig"


export default () => {
    let day = new Date().getDate(); //Para obter o dia
    let month = new Date().getMonth() + 1; //Para obter o mês
    let year = new Date().getFullYear(); //Para obter o ano
    const diaSemanaAtual = new Date().getDay();
    var weekdays = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"); 
    const navigation = useNavigation();
    const [task, setTask] = useState([]);
    
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
    useEffect(() => {
        database.collection("Perguntas").onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id })
            })
            setTask(list)
        })
    }, [])
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

    return (
        <ScrollView>

        <Container>
            
               <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('../Home/background1.png')}
            >
         <MyHeader>
            <Text style={{fontSize:22, marginLeft:5, marginTop:50, textAlign:'left', fontWeight:"bold"}} >{weekdays[diaSemanaAtual]}: {day}/{month} </Text>
            <TouchableOpacity style={{marginTop:10  , backgroundColor:'#1EEBB8B0', width:'90%', textAlign:'center', alignItems:'center', borderRadius:15, marginLeft:'5%' }} >
            <Text style={{fontSize:20, margin:10, color:'#103F18'}}  >Adicionar nota diária</Text>
            </TouchableOpacity>
            <Text style={{   textDecorationLine: 'underline',fontSize:14, marginTop:3, textAlign:'left', color:'#AFAFAF', width:'32%', marginLeft:'34%' }} >ver todas as notas </Text>
             
        </MyHeader>

        

        <Text style={{fontSize:16, margin:10, color:'#103F18', fontWeight:'bold', width:'36%', marginLeft:'32%'}}  >Perguntas Diárias</Text>
        <Pergunta2  >
            <Text style={{fontSize:16, textAlign:'left', margin:10, marginTop:22}} > Como vai o dia hoje? </Text>
            <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={handleTermos}>
             <Image  
                    style={styles.checkbox}
                    source={require('../../components/phone.png')}
                />
                <Text></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTermos}>
                 <Image  
                    style={styles.checkbox}
                    source={require('../../components/phone.png')}
                />
                <Text></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTermos}>
             <Image  
                    style={styles.checkbox}
                    source={require('../../components/phone.png')}
                />
                <Text></Text>
                </TouchableOpacity>
        </View>
        
        </Pergunta2>
       
        <Pergunta onPress={handleQ1} >
            <Text style={{fontSize:16, textAlign:'left', margin:10}} > {prem1} </Text>
        </Pergunta>
        <Pergunta onPress={handleQ2}>
            <Text style={{fontSize:16, textAlign:'left', margin:10}} > {prem2} </Text>
        </Pergunta>
        <Pergunta onPress={handleQ3}>
            <Text style={{fontSize:16, textAlign:'left', margin:10}} > {prem3} </Text>
        </Pergunta>
        <Pergunta onPress={handleQ4}>
            <Text style={{fontSize:16, textAlign:'left', margin:10}} > {prem4} </Text>
        </Pergunta>



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
  