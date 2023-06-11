import React from "react";
import {Text,ImageBackground} from 'react-native';
import {Container} from './styles.js';


export default () => {
    return (
        <Container>
                  <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('../Home/background1.png')}
            >




            </ImageBackground>
        </Container>
    );
}
