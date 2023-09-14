import React, {useState} from "react";
import {Text,ImageBackground, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Container, Comentario, Conteudo} from './styles.js';
import { ScrollView } from "react-native-gesture-handler";
import { A } from '@expo/html-elements';
import { Calendar } from 'react-native-calendars';


export default () => {
    const [selected, setSelected] = useState('');

    return (
    
        <Container>
                  <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('../../Home/background1.png')}
            >
        

         <Calendar  style={{marginTop:100, marginLeft:10, marginRight:10}}
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                }}
                />
                <View style={styles.container} >
                <Text style={{marginLeft:100}} >Última recaida: {selected}</Text>
                <Text style={{marginLeft:100}} >Você está há 0 dias sóbrios!</Text>
                
                </View>
            
            </ImageBackground>
        </Container>
       
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      width:'100%',
      textAlign:"center"
    },
  });
  

