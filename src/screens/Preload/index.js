import React, {useEffect} from 'react';
import { Image } from 'react-native';
import {Container, LoadingIcon} from './styles';
import {AsyncStorage} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import Logo from '../../assets/camaleao.png'

export default () => {

    const navigation = useNavigation();

    useEffect(() =>{
        const checkToken = async () =>{
            const token = await AsyncStorage.getItem('token');
            if(token){
                //validar o token
                
            }else{
                navigation.navigate('SignIn');

            }

        }
        checkToken();


    },[]);

    return (
        <Container>
            
                <LoadingIcon size="large" color="#11CED48A"  />
        </Container>
    );

};