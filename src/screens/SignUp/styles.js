import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    flex:1;
    justify-content: center;
    alignItems:center;
    text-align:center;
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
    margin-top:320px;
    margin-left:80px;
    margin-right:80px;
`;
export const CustombuttonText= styled.Text`
    font-size:18px;
`;