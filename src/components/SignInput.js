import React from "react";
import styled from "styled-components/native";

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color:#FCFCFC;
    flex-direction:row;
    border-radius:30px;
    padding-left:15px;
    align-items:center;
    margin-bottom:15px;
`;

const Input = styled.TextInput`
    flex:1;
    font-size:16px;
    color: #11CED4;
    margin-left:10px;

`;


export default ({IconSvg,placeholder}) =>{
    return(
        <InputArea>
            <IconSvg width="24" height="24" fill="#7EE5E8"/>
            <Input placeholder={placeholder} placeholderTextColor="#7EE5E8"/>
        </InputArea>
    );

}
