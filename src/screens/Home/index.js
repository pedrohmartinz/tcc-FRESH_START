import React,{useState, useContext, useEffect} from "react";
import {ImageBackground,StyleSheet, View,Text, Button, Image, TouchableOpacity} from 'react-native';
import {Container, MyHeader, MidBox, Linha, DownBox} from './styles.js';
import {Checkbox} from 'expo-checkbox';
import { UserContext } from '../../contexts/UserContext';
import database from "../../config/firebaseconfig"
import { useNavigation } from '@react-navigation/native';

export default () => {
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const { state: user } = useContext(UserContext);
    const navigation = useNavigation();
   

    const [task, setTask] = useState([]);
        useEffect(() => {
          database.collection("Usuario").onSnapshot((query) => {
              const list = [];
              query.forEach((doc) => {
                      list.push({ ...doc.data(), id: doc.id })
              })
              setTask(list)
          })
      }, [])
      var tupla = task;
      var comp = task.length;
    console.log(user.name)
      for (var c = 0; c < comp; c++) {
          if (tupla[c]["email"] == user.name ) {
              var prem1 = tupla[c]["dataI"];
              
          }
      }
      const startDate  = '2020-01-01';
      const endDate    = '2020-03-15';
      const today = new Date();

      function formatDate(date, format) {
        const map = {
          aaaa: date.getFullYear(),
            mm: date.getMonth() + 1,
            dd: date.getDate(),
            
        }
    
        return format.replace(/mm|dd|aaaa/gi, matched => map[matched])
    }
      var u = formatDate(today, 'aaaa-mm-dd');

      const diffInMs   = new Date(u) - new Date(prem1)
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
      const calendargo = () =>{
        navigation.navigate('Calendar')
      }

    return (
        <Container>
            
                 <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('./background1.png')}
            >
            <MyHeader>
        
            <TouchableOpacity style={{maxWidth:26}} >
            <Image
                    style={{height:26, width:26, marginTop:26, marginLeft:10}}
                    source={require('./engranagem.png')}
                />
                </TouchableOpacity>
               
               

                <Text style={{fontSize:22, marginTop:-12, textAlign:'center'}} >Estou sóbrio(a) há:</Text>
                <Text style={{fontSize:56, marginTop:1, textAlign:'center', fontWeight: "bold"}} >0 </Text> 
                <Text style={{fontSize:19, marginTop:-1, textAlign:'center'}} >dias</Text> 
                <Text style={{fontSize:14, marginTop:-1, marginLeft:18, color:"gray"}} >inicio: {prem1} </Text> 

                <TouchableOpacity onPress={calendargo} style={{alignItems:'flex-end', marginTop:-70, marginRight:10}} >
                <Image
                    style={{height:26, width:26, marginTop:26, marginLeft:'100%'}}
                    source={require('./calendario.png')}
                />
                </TouchableOpacity>
            </MyHeader>
           <MidBox>
           <Text style={{fontSize:18,  textAlign:'center', fontWeight: "bold"}} >Metas Semanais</Text>

           <View style={styles.checkboxContainer}>
           <Text style={styles.label}>Comer frutas</Text>
        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      
        </View>
        <View style={styles.checkboxContainer}>
           <Text style={styles.label}>Se exercitar</Text>
        <Checkbox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
      
        </View>
        <TouchableOpacity style={{textAlign:"center", justifyContent:"center", marginLeft:45, marginTop:5}} >
        <Text style={{color:"gray"}}>+Adicionar mais</Text>
        </TouchableOpacity>
        
           </MidBox>

        <Text style={{textAlign:"center", alignItems:"center", justifyContent:"center", fontWeight: "bold", fontSize:18, marginTop:70 }} >
          O que/quem me motiva é</Text>

          <DownBox>
          <Text style={{textAlign:"center", alignItems:"center", justifyContent:"center", fontWeight: "bold", fontSize:20}} >
          Minha família</Text>
          </DownBox>

          <TouchableOpacity style={{borderWidth:1, textAlign:"center", alignItems:"center", width:312, marginLeft:'10%', marginTop:10 }} >
              <Text style={{fontSize:20}} >+Adicionar motivação</Text>
          </TouchableOpacity>

            </ImageBackground>
        </Container>
    );
}
const styles = StyleSheet.create({
    checkboxContainer: {
        textAlign:'center',
      flexDirection: 'row',
      marginBottom: -5,
      justifyContent:'center'
    },
    checkbox: {
      alignSelf: 'center',
    },
    label: {
      margin: 8,
    },
  });