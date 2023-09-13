import React, {Fragment, useContext, useEffect, useState} from "react";
import {Text, ImageBackground, View, StyleSheet,TextInput, Image, ScrollView,  KeyboardAvoidingView, SafeAreaView, TouchableOpacity, Keyboard} from 'react-native';
import {Container, Comentario, Usuario, Conteudo} from './styles.js';
import { UserContext } from '../../contexts/UserContext';
import database from "../../config/firebaseconfig"
import { FlatList } from "react-native-gesture-handler";

export default () => {
    const { state: user } = useContext(UserContext);
    const [message, setMessage] = useState('')
    const KEYBOARD_AVOIDING_BEHAVIOR = Platform.select({
        ios: 'padding',
        android: 'height',
    });
    const hoje = new Date()
    if(hoje.getHours() <12){
        var texto="Bom dia"
    }
    else if(hoje.getHours() >=12 && hoje.getHours()<18){
        var texto="Boa tarde"
    }
    else{
        var texto="Boa noite"
    }
    const handleSignClick = async () =>{
        database.collection("Chat").add({
            conteudo:message,
            name:user.name
            })
            setMessage('');
            Keyboard.dismiss()
        
}
const [task, setTask] = useState([]); // <—— variável de estado
useEffect(() => {
 database.collection("Chat").onSnapshot((query)=>{
  const list =[];
  query.forEach((doc)=>{
    list.push({...doc.data(), id:doc.id})
  })
  setTask(list)
 })
}, []);

   console.log(task)

    return (
        <Fragment>

       
        <ScrollView>
        <Container>
                  <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('../Home/background1.png')}
            >
                    <Text style={{fontSize:30, textAlign:"center", justifyContent:"center", marginTop:30}} >{texto}, {user.email}</Text>
      
                    <View>
              <FlatList showsVerticalScrollIndicator={false} data={task} 
                renderItem={({item})=>{
                  return(
                    <Comentario>
                    <View style={styles.checkboxContainer}>
                    <Image
                            style={styles.checkbox}
                            source={require('../SignUp3/usuario.png')}
                        />
                <Text style={styles.label}>{item.name}</Text>
                </View>
                        <Conteudo> {item.conteudo} </Conteudo>      
                    </Comentario>
                  )
                }}
              />
            </View >
            </ImageBackground>
        </Container>
        </ScrollView>
        <Container>

        </Container>
        <KeyboardAvoidingView
        behavior={KEYBOARD_AVOIDING_BEHAVIOR}
        keyboardVerticalOffset={76}>
        <SafeAreaView>
          <View style={styles.messageTextInputContainer}>
            <TextInput
              style={styles.messageTextInput}
              placeholder="Digite sua mensagem..."
              multiline
              value={message}
              onChangeText={t => setMessage(t)}
              blurOnSubmit={true}
            />
            <TouchableOpacity
              style={styles.sendButton}
              disabled={!message}
              onPress={handleSignClick}>
              <Text>Enviar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
        </Fragment>
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
    container: {
        marginTop: 16,
        marginHorizontal: 16,
      },
      scrollViewContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        top: 10,
      },
      sendButton: {
        backgroundColor: 'white',
        color: 'black',
        height: 40,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 5,
      },
      messageTextInputContainer: {
        justifyContent: 'flex-end',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderColor: 'transparent',
        borderTopColor: 'green',
        alignItems: 'center',
        flexDirection: 'row',
      },
      messageTextInput: {
        flex: 1,
        minHeight: 40,
        maxHeight: 90,
        paddingHorizontal: 12,
        fontSize: 17,
        paddingTop: 1,
        marginHorizontal: 5,
        borderColor: 'lightblue',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 20,
      },
  });
  