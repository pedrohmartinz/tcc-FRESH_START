import React, {useEffect, useContext} from 'react';
import { Image } from 'react-native';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Navigate } from 'react-router-dom';
import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();
    
               
    useEffect(() =>{
        const checkToken = async () =>{
            const token = await AsyncStorage.getItem('token');
            if(token){
                //validar o token
                let res = await Api.checkToken(token);
                if(res.token){
                    
                    await AsyncStorage.setItem('token', res.token);
                    userDispatch({
                        type:'setAvatar',
                        payload:{
                            avatar:res.data.avatar
                        }
                    });
                
                    navigation.reset({
                        routes:[{name:'MainTab'}]
                    });


               } else{
                navigation.navigate('SignIn');
               }
                
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