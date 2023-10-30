import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
     width:90%;
    height:50px;
    background-color: #FCFCFC;
    flex-direction:row;
    
border-radius:20px;
    align-items:center;
    margin-bottom:40px;
    margin-top:10px;
    margin-left:10px;
    border-color: #000000;
    border-width: 1px;

`;

const Input = styled.TextInput`
    flex:1;
    font-size:16px;
    color:black;
    padding-left:15px;
    
`;

export default ({ placeholder, value, onChangeText, password, keyboardType }) => {
    return (
        <InputArea>
            
            <Input
                placeholder={placeholder}
                placeholderTextColor="black"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                keyboardType={keyboardType}

            />
        </InputArea>
        
        );

}

