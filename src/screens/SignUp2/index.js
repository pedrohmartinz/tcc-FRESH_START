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
    const [nameField, setField] = useState('');
    const [cpfField, setCpfField] = useState('');
    const [telefoneField, setTelefoneField] = useState('');

    
    const handleSignClick = () =>{
            navigation.navigate('SignUp3')
        
    }


    return (
        


        <Container>
             <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('./DegradeTelaDeCadastro.png')}
            >
            <View style={{alignItems:'center', height:150, width:'100%', marginTop:20, justifyContent:'center', marginBottom:-50}} >
            
                    <Text style={{marginTop:10, fontSize:25, color:'black'}} >Me fale mais sobre você</Text>  
            </View>
       
        <InputArea>
               {/*Nome*/}
               <SignInput placeholder="Digite seu nome" keyboardType='email-address' value={nameField} onChangeText={t => setNameField(t)} />
          {/*email*/}
          <SignInput placeholder="Digite seu e-mail" keyboardType='email-address' value={emailField} onChangeText={t => setEmailField(t)} />
              {/*Telefone*/}
          <SignInput placeholder="Digite seu telefone" keyboardType='phone-pad' value={telefoneField} onChangeText={t => setTelefoneField(t)} />
            {/*cpf*/}
            <SignInput placeholder="Digite seu CPF" value={cpfField} onChangeText={t => setCpfField(t)} />
              {/*senha*/}
              <SignInput placeholder="Digite sua senha" value={passwordField} onChangeText={t => setPasswordField(t)} password={true} />
          

        </InputArea>
        <CustomButton onPress={handleSignClick}>
                    <CustombuttonText>Continuar</CustombuttonText>
            </CustomButton>
        
        </ImageBackground>
        </Container>
    );

};