import React,{useState, useEffect, useContext} from "react";
import {Text, ImageBackground, TouchableOpacity, StyleSheet, View, Image, ScrollView} from 'react-native';
import {Container, MyHeader, Pergunta, Pergunta2} from './styles.js';
import { Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import database from "../../../config/firebaseconfig"
import { TextInput } from "react-native-gesture-handler";
import { UserContext } from '../../../contexts/UserContext';



export default () => {
    let day = new Date().getDate(); //Para obter o dia
    let month = new Date().getMonth() + 1; //Para obter o mês
    let year = new Date().getFullYear(); //Para obter o ano
    const diaSemanaAtual = new Date().getDay();
    var weekdays = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"); 
    const navigation = useNavigation();
    const [task, setTask] = useState([]);
    const [task2, setTask2] = useState([]);
    const [message, setMessage] = useState('');
    const { state: user } = useContext(UserContext);
    
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
    var tupla = task;
    var comp = task.length;
    var comp2 = task2.length;
    var prem1 = "0"
    var id2 = ""

    for (var c = 0; c < comp; c++) {
        if (tupla[c]["dia"] != day && tupla[c]["mes"]!=month) {
            var prem1 = tupla[c]["mensagem1"];
            //igualar dia mes e mensagem

        }
    }
  
    for (var c2 = 0; c2 < comp2; c2++) {
        if (tupla2[c2]["email"] == user.name ) {
            var id2 = tupla2[c2]["mensagensRespondidas"];
            var identificador = tupla2[c2]["id"]
            
            comp2 =c2;
           
            
        }
    }
    
   console.log(id2.concat(prem1))
    const handleQ4 = () =>{
       
       database.collection("Usuario").doc(identificador).update({mensagensRespondidas: id2.concat(prem1)})
        navigation.navigate('Diary')
    }
    
    
    return (
   
        <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('../../Home/background1.png')}
            >
        <Container>
                 <ScrollView>
        
                <TouchableOpacity style={{marginTop:50, marginBottom:-60, alignItems:"flex-end", marginRight:30 }} onPress={handleQ4} ><Text style={{fontSize:18}} >Salvar</Text></TouchableOpacity>
             <MyHeader>
            <Text style={{fontSize:20, marginLeft:5, marginTop:20, textAlign:'left', fontWeight:"bold", textAlign:"center"}} >{prem1} </Text>
            <TextInput  value={message} onChangeText={t => setMessage(t)} multiline placeholder="Escreva aqui como foi seu dia, o que está sentindo, suas vontades..." style={{marginTop:-20, marginLeft:15, marginRight:15, fontSize:20, height:200}} />
        </MyHeader>
       
       
            
       </ScrollView>
        </Container>
        </ImageBackground>
    );
}
