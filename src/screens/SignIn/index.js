import React from 'react';
import {Image } from 'react-native';
import {Container,InputArea,CustomButton,CustombuttonText, SignMessageButton, SignmessageButtonText,SignmessageButtonTextBold } from './styles';

//import Logo from '../../assets/camaleao.png';
//import IconEmail from '../../assets/cadeado.png';
//import IconSenha from '../../assets/cadeado.png';


import SignInput from '../../components/SignInput';

export default () => {
    return (
        <Container>
        
        
        <InputArea>

        
        <Image
            style={{height:315, width:'84%'}}
            source={require('./camaleao.png')}
        />

            <CustomButton>
                    <CustombuttonText>LOGIN</CustombuttonText>
            </CustomButton>

        </InputArea>
        <SignMessageButton>
            <SignmessageButtonText>Ainda não possui uma conta? </SignmessageButtonText>
            <SignmessageButtonTextBold>Cadastre-se</SignmessageButtonTextBold>

        </SignMessageButton>
        
        </Container>
    );

};