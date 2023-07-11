import React from "react";
import {Text, ImageBackground, View, StyleSheet, Image, ScrollView} from 'react-native';
import {Container, Comentario, Usuario, Conteudo} from './styles.js';


export default () => {
    return (
        <ScrollView>

      
        <Container>
                  <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('../Home/background1.png')}
            >
                    <Text style={{fontSize:30, textAlign:"center", justifyContent:"center", marginTop:30}} >Chat</Text>
      
         {/* Comentario1*/}
            <Comentario>
            <View style={styles.checkboxContainer}>
            <Image
                    style={styles.checkbox}
                    source={require('../SignUp3/usuario.png')}
                />
        <Text style={styles.label}>Termos e condições</Text>
        </View>
                <Conteudo> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </Conteudo>      
            </Comentario>

            <Comentario>
                <View style={styles.checkboxContainer}>
                <Image
                        style={styles.checkbox}
                        source={require('../SignUp3/usuario.png')}
                    />
                <Text style={styles.label}>Termos e condições</Text>
                </View>
                    <Conteudo> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </Conteudo>      
                </Comentario>
                 {/* Comentario3*/}
            <Comentario>
            <View style={styles.checkboxContainer}>
            <Image
                    style={styles.checkbox}
                    source={require('../SignUp3/usuario.png')}
                />
        <Text style={styles.label}>Termos e condições</Text>
        </View>
                <Conteudo> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </Conteudo>      
            </Comentario>
             {/* Comentario4*/}
             <Comentario>
            <View style={styles.checkboxContainer}>
            <Image
                    style={styles.checkbox}
                    source={require('../SignUp3/usuario.png')}
                />
        <Text style={styles.label}>Termos e condições</Text>
        </View>
                <Conteudo> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </Conteudo>      
            </Comentario>
             {/* Comentario5*/}
             <Comentario>
            <View style={styles.checkboxContainer}>
            <Image
                    style={styles.checkbox}
                    source={require('../SignUp3/usuario.png')}
                />
        <Text style={styles.label}>Termos e condições</Text>
        </View>
                <Conteudo> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </Conteudo>      
            </Comentario>
             {/* Comentario6*/}
             <Comentario>
            <View style={styles.checkboxContainer}>
            <Image
                    style={styles.checkbox}
                    source={require('../SignUp3/usuario.png')}
                />
        <Text style={styles.label}>Termos e condições</Text>
        </View>
                <Conteudo> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </Conteudo>      
            </Comentario>
             {/* Comentario7*/}
             <Comentario>
            <View style={styles.checkboxContainer}>
            <Image
                    style={styles.checkbox}
                    source={require('../SignUp3/usuario.png')}
                />
        <Text style={styles.label}>Termos e condições</Text>
        </View>
                <Conteudo> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </Conteudo>      
            </Comentario>
            


            </ImageBackground>
        </Container>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 3
     
    },
    checkbox: {
      alignSelf: 'center',
      height:20,
      width:20
    },
    label: {
      margin: 8,
    },
  });
  