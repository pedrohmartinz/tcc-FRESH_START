import React from "react";
import {Text, ImageBackground, TouchableOpacity, StyleSheet, Button, View, Platform, ScrollView } from 'react-native';
import {Container} from './styles.js';
import ExamplePdf from './boleto.pdf';
import { StatusBar } from 'expo-status-bar';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import {WebView} from 'react-native-webview'
import YoutubePlayer from 'react-native-youtube-iframe';



export default () => {
    const downloadFromUrl = async () => {
        const filename = "boleto.pdf";
        const result = await FileSystem.downloadAsync(
           'https://lume.ufrgs.br/bitstream/handle/10183/232487/001134345.pdf?sequence=1',
          FileSystem.documentDirectory + filename
        );
        console.log(result);
    
        save(result.uri, filename, result.headers["Content-Type"]);
      };
    
      const downloadFromAPI = async () => {
        const filename = "MissCoding.pdf";
        const localhost = Platform.OS === "android" ? "10.0.2.2" : "127.0.0.1";
        const result = await FileSystem.downloadAsync(
          `http://${localhost}:5000/generate-pdf?name=MissCoding&email=hello@tripwiretech.com`,
          FileSystem.documentDirectory + filename,
          {
            headers: {
              "MyHeader": "MyValue"
            }
          }
        );
        console.log(result);
        save(result.uri, filename, result.headers["Content-Type"]);
      };
    
      const save = async (uri, filename, mimetype) => {
        if (Platform.OS === "android") {
          const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
          if (permissions.granted) {
            const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
            await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filename, mimetype)
              .then(async (uri) => {
                await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
              })
              .catch(e => console.log(e));
          } else {
            shareAsync(uri);
          }
        } else {
          shareAsync(uri);
        }
      };
      return (
        <ScrollView>

       
        <Container>

     
        <ImageBackground
        style={{height:'100%', width:'100%'}}
        source={require('../Home/background1.png')}
    >
        <Text style={{fontSize:32, width:'51%', marginLeft:'27.5%', fontWeight:"bold", marginTop:30}} >Informações</Text>

       <Text style={{fontSize:32, width:'30%', marginLeft:'39%', marginTop:30}} >Sobre</Text>
        <Text style={{justifyContent:"center", textAlign:"center"}} >Esta é uma tela para aprendizado e autoconhecimento. Aproveite para ler livros, assistir a vídeos interessantes e praticas técnicas de meditação...</Text>
       
        <View style={{backgroundColor:'white', borderRadius:30, marginTop:30, opacity:0.9}} >
     
       <Text style={{fontSize:32, width:'30%', marginLeft:'39%'}} >Livros</Text>
       <View style={{width:'100%', alignItems:"center"}} >
            <TouchableOpacity onPress={downloadFromUrl} >
                <Text style={{fontStyle:"italic", textDecorationLine:"underline", marginTop:10, fontSize:17}} >- "Beber sem Parar" por Allen Carr</Text>
                <Text>Este livro explora o alcoolismo de uma perspectiva única, usando a abordagem do autor, conhecido por ajudar pessoas a parar de fumar. Carr desafia as crenças comuns sobre o álcool e oferece insights sobre como superar o vício.</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={downloadFromUrl} >
                <Text style={{fontStyle:"italic", textDecorationLine:"underline", marginTop:10, fontSize:17}} >- "Vencer o Alcoolismo" por Charles Dederich</Text>
                <Text>Charles Dederich foi o fundador dos Alcoólicos Anônimos, e neste livro, ele compartilha sua visão e experiência na luta contra o alcoolismo. Ele oferece uma abordagem esclarecedora sobre a recuperação e a importância do apoio social.</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={downloadFromUrl} >
                <Text style={{fontStyle:"italic", textDecorationLine:"underline", marginTop:10, fontSize:17}} >- "Deixando o Álcool" por William G. Borchert</Text>
                <Text>Este livro apresenta relatos pessoais de indivíduos que superaram o alcoolismo. Através de histórias inspiradoras e depoimentos, o autor destaca o poder da recuperação e fornece insights sobre como encontrar esperança e apoio na jornada de recuperação.</Text>
            </TouchableOpacity>
            </View>
            <Text style={{fontSize:15, color:'gray', textDecorationLine:"underline", width:'32%', marginLeft:'44%', marginTop:10}} >ver mais</Text>  
                        
        </View>
            <Text style={{fontSize:32, width:'32%', marginLeft:'37%', marginTop:30}} >Vídeos</Text>
            
            <View style={{marginLeft:20, marginRight:20}} >
              <YoutubePlayer
                
                height={300}
                play={true}
                videoId={'84WIaK3bl_s'}
              />
            </View>
            <Text style={{fontSize:15, color:'gray', textDecorationLine:"underline", width:'32%', marginLeft:'44%', marginTop:-95, marginBottom:40}} >ver mais</Text>  
                    
      
        </ImageBackground>
        </Container>
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });