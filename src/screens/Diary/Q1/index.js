import React,{useState, useEffect} from "react";
import {Text, ImageBackground, TouchableOpacity, StyleSheet, View, Image, ScrollView} from 'react-native';
import {Container, MyHeader, Pergunta, Pergunta2} from './styles.js';
import { Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import database from "../../../config/firebaseconfig"
import { TextInput } from "react-native-gesture-handler";


export default () => {
    let day = new Date().getDate(); //Para obter o dia
    let month = new Date().getMonth() + 1; //Para obter o mês
    let year = new Date().getFullYear(); //Para obter o ano
    const diaSemanaAtual = new Date().getDay();
    var weekdays = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"); 
    const navigation = useNavigation();
    const [task, setTask] = useState([]);
    const [message, setMessage] = useState('')
    
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

    for (var c = 0; c < comp; c++) {
        if (tupla[c]["dia"] != day && tupla[c]["mes"]!=month) {
            var prem1 = tupla[c]["mensagem1"];
          

        }
    }
    return (
        <Container>
         <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('../../Home/background1.png')}
            >
             <MyHeader>
            <Text style={{fontSize:20, marginLeft:5, marginTop:20, textAlign:'left', fontWeight:"bold", textAlign:"center"}} >{prem1} </Text>
            <TextInput  value={message} onChangeText={t => setMessage(t)} multiline placeholder="Escreva aqui como foi seu dia, o que está sentindo, suas vontades..." style={{marginTop:-20, marginLeft:15, marginRight:15, fontSize:20, height:200}} />
        </MyHeader>
       
       </ImageBackground>
        </Container>
    );
}
