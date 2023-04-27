import React, {useEffect} from 'react';
import { Image } from 'react-native';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Navigate } from 'react-router-dom';

export default () => {
    
    const navigation = useNavigation();
    
               
    useEffect(() =>{
        const checkToken = async () =>{
            const token = await AsyncStorage.getItem('token');
            if(token!==null){
                //validar o token
               
               
                
            }else{
                navigation.navigate('SignIn');
               

            }

        }
        checkToken();


    },[]);

    return (
        <Container>
                <Image
                    style={{height:315, width:'84%'}}
                    source={require('./camaleao.png')}
                />
                <LoadingIcon size="large" color="#11CED48A"  />
        </Container>
    );

};