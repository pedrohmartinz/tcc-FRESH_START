import React, { useState, useContext, useEffect } from 'react';
import {Image, ImageBackground, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Container,InputArea,CustomButton,CustombuttonText, SignMessageButton, SignmessageButtonText,SignmessageButtonTextBold } from './styles';
import SignInput from '../../components/SignInput';
import { UserContext } from '../../contexts/UserContext';
//import Logo from '../../assets/camaleao.png';
//import IconEmail from '../../assets/cadeado.png';
//import IconSenha from '../../assets/cadeado.png';




export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();
    const { state: user } = useContext(UserContext);
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButtonClick = () =>{
        navigation.reset({
            routes:[{name:'SignUp'}]
        });

    }
    const handleSignClick = () =>{

        
    }


    return (
        


        <Container>
             <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('./DegradeTelaDeCadastro.png')}
            >
            <View style={{alignItems:'center', height:150, width:'100%', marginTop:150, justifyContent:'center'}} >
            <Image
                    style={{height:130, width:84}}
                    source={require('./Bolinhas.png')}
                />
                    <Text style={{marginTop:10, fontSize:25, color:'#1CBAA4'}} >FRESH START</Text>  
            </View>
       
        <InputArea>
          {/*email*/}
          <SignInput placeholder="Digite seu e-mail" keyboardType='email-address' value={emailField} onChangeText={t => setEmailField(t)} />
            {/*senha*/}
            <SignInput placeholder="Digite sua senha" value={passwordField} onChangeText={t => setPasswordField(t)} password={true} />
        </InputArea>
        <CustomButton onPress={handleSignClick}>
                    <CustombuttonText>LOGIN</CustombuttonText>
            </CustomButton>
        <SignMessageButton onPress={handleMessageButtonClick} >
            <SignmessageButtonText>Ainda não possui uma conta? </SignmessageButtonText>
            <SignmessageButtonTextBold>Cadastre-se</SignmessageButtonTextBold>

        </SignMessageButton>
        </ImageBackground>
        </Container>
    );

};