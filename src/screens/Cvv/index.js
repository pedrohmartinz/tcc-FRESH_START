import React from "react";
import {Text,ImageBackground, Image, View, TouchableOpacity} from 'react-native';
import {Container} from './styles.js';


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
         
           



            </ImageBackground>
        </Container>
    );
}
