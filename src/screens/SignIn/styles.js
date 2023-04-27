import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    flex:1;
    justify-content: center;
    align-items:center;

`;

export const InputArea= styled.View`
    padding:40px;
    width:100%;
    
`;

export const CustomButton= styled.TouchableOpacity`
    height: 60px;
    background-color: #11CED4;
    border-radius:30px;
    justify-content:center;
    align-items:center;
    width:85%;
    margin-left:30px;
    
`;
export const CustombuttonText= styled.Text`
    font-size:18px;
`;


export const SignMessageButton= styled.TouchableOpacity`
    flex-direction:row;
    justify-content:center;
    margin-top:50px;
    margin-bottom:20px;

`;
export const SignmessageButtonText= styled.Text`
    font-size:16px;
    color:#4C4C4C;
`;
export const SignmessageButtonTextBold= styled.Text`
    font-size:16px;
    color:#4C4C4C;
    font-weight:bold;
    margin-left:5px;
`;


