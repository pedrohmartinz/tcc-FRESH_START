import React,{useState} from "react";
import {ImageBackground,StyleSheet, View,Text, Button, Image, TouchableOpacity} from 'react-native';
import {Container, MyHeader, MidBox, Linha} from './styles.js';
import {Checkbox} from 'expo-checkbox';

export default () => {
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
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
                <Text style={{fontSize:56, marginTop:1, textAlign:'center', fontWeight: "bold"}} >20</Text> 
                <Text style={{fontSize:19, marginTop:-1, textAlign:'center'}} >dias</Text> 
                <Text style={{fontSize:14, marginTop:-1, marginLeft:18}} >inicio: 00/00/0000 </Text> 

                <TouchableOpacity style={{alignItems:'flex-end', marginTop:-70, marginRight:10}} >
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
        <Text>+Adicionar mais</Text>
           </MidBox>



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