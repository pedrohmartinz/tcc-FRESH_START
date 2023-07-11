import React from "react";
import {Text,ImageBackground, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Container, Comentario, Conteudo} from './styles.js';
import { ScrollView } from "react-native-gesture-handler";


export default () => {
    return (
    
        <Container>
                  <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('../Home/background1.png')}
            >

               
<ImageBackground source={require('./maos.jpg')} style={{width: '100%', height: '78%'}}>
   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
     <TouchableOpacity style={{marginTop:-80  , backgroundColor:'#1EEBB8B0', width:'90%', textAlign:'center', alignItems:'center', borderRadius:15 }} >
     <Text style={{fontSize:24, margin:10, color:'#103F18'}}  >Ligue para o CVV</Text>
     </TouchableOpacity>
     <Text style={{fontSize:24,  color:'white', width:280, alignItems:'center', textAlign:'center', fontWeight:'bold'}}  >Ligue para o CVV quando precisar de ajuda</Text>
     
   </View>
</ImageBackground>
<Text style={{marginTop:-90,fontSize:20,  color:'white', width:280, alignItems:'center', textAlign:'center',marginLeft:'13%'}}  >Lembre que essas pessoas estão com você</Text>
         
<Comentario>
            <View style={styles.checkboxContainer}>
            <Image
                    style={styles.checkbox}
                    source={require('../../components/phone.png')}
                />
        <Text style={styles.label}>Pai</Text>
        <Text style={{marginLeft:10, marginTop:20, fontSize:15}}>(11)11111-1111</Text>
       
        </View>
            
            </Comentario>

            <Comentario>
            <View style={styles.checkboxContainer}>
            <Image
                    style={styles.checkbox}
                    source={require('../../components/phone.png')}
                />
        <Text style={styles.label}>Pai</Text>
        <Text style={{marginLeft:10, marginTop:20, fontSize:15}}>(11)11111-1111</Text>
       
        </View>
            
            </Comentario>

           



            </ImageBackground>
        </Container>
       
    );
}
const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 3
   
  },
  checkbox: {
    alignSelf: 'center',
    height:40,
    width:40
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
