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
                <SignInput  placeholder="Digite seu e-mail"  />

                <SignInput  placeholder="Digite sua senha" />


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