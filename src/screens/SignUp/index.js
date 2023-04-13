import React from 'react';
import { Text,ImageBackground } from 'react-native';
import {Container, InputArea, CustomButton, CustombuttonText} from './styles';
import SignInput from '../../components/SignInput';

export default () => {
    return (
        <Container>
            <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('./ImagemTelaCadastro.png')}
            >

                <Text style={{width:"100%", textAlign:"center", justifyContent:"center", fontSize:28, padding:40, paddingTop:70}} >Sua nova jornada começa aqui </Text>
                         
                <Text style={{width:"100%", textAlign:"center", justifyContent:"center", fontSize:20, padding:40}} >Converse, inspire-se e progrida. Ajudaremos você nessa tarefa  </Text>
                    
                         
                         <CustomButton>
                            <CustombuttonText>Começar</CustombuttonText>
                         </CustomButton>

            </ImageBackground>
            
            
           
        
                
        </Container>
    );

};