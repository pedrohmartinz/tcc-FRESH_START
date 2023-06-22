import React from "react";
import styled from "styled-components";

export const Container = styled.SafeAreaView``;

export const MyHeader = styled.SafeAreaView`
    height:190px;
    background-color: #11CED480;
    border-bottom-left-radius: 27px;
    border-bottom-right-radius: 27px;
`;
export const MidBox = styled.SafeAreaView`
    height:130px;
    background-color: white;
    border-radius: 13px;
    width:200px;
    text-align:center;
    justify-content:center;
    margin-left:25%;
    margin-top:40px;
`;
export const DownBox = styled.SafeAreaView`
    height:128px;
    background-color: white;
    border-radius: 13px;
    width:312px;
    text-align:center;
    justify-content:center;
    margin-left:10%;
    margin-top:10px;
`;
export const Linha = styled.SafeAreaView`
    justifyContent: space-between;
    flexDirection: row;
`;



