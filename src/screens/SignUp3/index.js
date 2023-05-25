import React, { useState, useContext, useEffect } from 'react';
import {Image, ImageBackground, View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Container,InputArea,CustomButton,CustombuttonText, SignMessageButton, SignmessageButtonText,SignmessageButtonTextBold } from './styles';
import SignInput from '../../components/SignInput';
import { UserContext } from '../../contexts/UserContext';
import Checkbox from 'expo-checkbox';
//import Logo from '../../assets/camaleao.png';
//import IconEmail from '../../assets/cadeado.png';
//import IconSenha from '../../assets/cadeado.png';
import AsyncStorage from '@react-native-community/async-storage';




export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();
    const { state: user } = useContext(UserContext);
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [nameField, setField] = useState('');
    const [cpfField, setCpfField] = useState('');
    const [telefoneField, setTelefoneField] = useState('');
    const [isSelected, setSelection] = useState(false);
    
    const handleSignClick = () =>{
            navigation.navigate('SignUp3')
        
    }
    const handleTermos = () =>{
        navigation.navigate('SignUp4')
    
}


    return (
        


        <Container>
             <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('./DegradeTelaDeCadastro.png')}
            >
            <View style={{alignItems:'center', height:150, width:'100%', marginTop:70, justifyContent:'center', marginBottom:10}} >
            
            <Image
                    style={{height:140, width:150}}
                    source={require('./usuario.png')}
                />
            </View>
       
        <InputArea>
               {/*Nome*/}
               <SignInput placeholder="Digite seu nome" keyboardType='email-address' value={nameField} onChangeText={t => setNameField(t)} />
          {/*email*/}
          <SignInput placeholder="Digite seu e-mail" keyboardType='email-address' value={emailField} onChangeText={t => setEmailField(t)} />
              {/*Telefone*/}
          <SignInput placeholder="Digite seu telefone" keyboardType='phone-pad' value={telefoneField} onChangeText={t => setTelefoneField(t)} />
         
          <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text onPress={handleTermos}  style={styles.label}>Termos e condições</Text>
        </View>

        </InputArea>
        <CustomButton onPress={handleSignClick}>
                    <CustombuttonText>Finalizar</CustombuttonText>
            </CustomButton>
        
        </ImageBackground>
        </Container>
    );

};
const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
