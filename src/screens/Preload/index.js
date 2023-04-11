import React, {useEffect} from 'react';
import { Image } from 'react-native';
import {Container, LoadingIcon} from './styles';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default () => {
    
    const navigation = useNavigation();

    useEffect(() =>{
        const checkToken = async () =>{
            const token = await AsyncStorage.getItem('token');
            if(token!==null){
                //validar o token
                navigation.navigate('SignIn');
               
                
            }else{
                navigation.navigate('SignUp');
               

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