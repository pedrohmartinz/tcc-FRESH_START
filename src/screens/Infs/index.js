import React from "react";
import {Text, ImageBackground, TouchableOpacity, StyleSheet, Button, View, Platform } from 'react-native';
import {Container} from './styles.js';
import ExamplePdf from './boleto.pdf';
import { StatusBar } from 'expo-status-bar';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';



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
        <View style={styles.container}>
            <TouchableOpacity onPress={downloadFromUrl} >
                <Text>Teste</Text>
            </TouchableOpacity>

        
        </View>
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