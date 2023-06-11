import React, {useContext } from 'react';
import styled from 'styled-components';
import { Image } from 'react-native';

import { UserContext, foto } from '../contexts/UserContext';

const Vazio= styled.View`  

`;
const TabArea = styled.View`
    height:60px;
    background-color:#11CED480;
    flex-direction:row;
    

`;

const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width:70px;
    height:70px;
    justify-content: center;
    align-items:center;
    background-color:#11CED480;
    border-radius:35px;
    border:3px solid white;
    margin-top:-20px;
`;

const AvatarIcon = styled.Image`
    width:38px;
    height:38px;
    border-radius:20px;    

`;

export default ({ state, navigation }) => {

    const { state:user } = useContext(UserContext);
    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }


    return (

        
        <TabArea>
            <TabItem onPress={() => goTo('Infs')} >
                <Image
                    fill="#FFFFFF"
                    style={{ height: 30, width: 30, opacity: state.index === 0 ? 1 : 0.5 }}
                    source={require('./book.png')}
                />
            </TabItem>
            
            <TabItem onPress={() => goTo('Diary')} >
                <Image

                    style={{ height: 30, width: 30, opacity: state.index===1?1 : 0.5 }}
                    source={require('./diary.png')}
                />
            </TabItem>


            <TabItemCenter onPress={() => goTo('Home')} >
                <Image
                    fill="#FFFFFF"
                    style={{ height: 40, width: 40, opacity: state.index === 2 ? 1 : 0.5 }}
                    source={require('./home.png')}
                />
            </TabItemCenter>


            <TabItem onPress={() => goTo('Chat')} >
                <Image
                    fill="#FFFFFF"
                    style={{ height: 30, width: 30, opacity: state.index === 3 ? 1 : 0.5 }}
                    source={require('./chat.png')}
                />

            </TabItem>

            
            <TabItem onPress={() => goTo('Cvv')} >
                <Image
                    fill="#FFFFFF"
                    style={{ height: 45, width: 45, opacity: state.index === 4 ? 1 : 0.5 }}
                    source={require('./phone.png')}
                />
                
            </TabItem>
        </TabArea>
        );
}


