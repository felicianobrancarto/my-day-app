import React from 'react';
import {View, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, Text } from 'react-native';
import tela2 from '../Tela2';

const width = Dimensions.get('screen').width;

function Login({navigation}) {
    return <>
      
      <View style= {styles.principal}>

<View style={styles.sectionContainer}>
        
        <Image style={styles.Image} resizeMode='contain' source={require('../../components/assets/login.png')} />
        
        <TextInput style={styles.TextInput} placeholder='Digite seu e-mail: '></TextInput>
        <TextInput style={styles.TextInput} placeholder='Digite sua senha: '></TextInput>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Main")}>
          <Text style={styles.textobotao}>ENTRAR</Text>                           
        </TouchableOpacity>

        
      </View>


      </View>

    </>
  }
  const styles = StyleSheet.create({
    sectionContainer: {
      backgroundColor: '#304FFE',
      width: '100%',
      flexDirection: 'column',
      paddingHorizontal: '10%',
      paddingVertical: '10%'
    },
    Image: {
      width: 228,
      height: 228,
      resizeMode: 'center',
      paddingHorizontal: '50%',
      paddingVertical: 100
  
    },
    TextInput:{
      backgroundColor: '#F6F6F6',
      marginHorizontal: 10,
      marginTop: 20,
      paddingHorizontal: 20,
      borderRadius: 10

    },

    botao:{
      backgroundColor: '#C6CEFF',
      marginTop: 50,
      marginHorizontal: 90,
      height: 50,
      justifyContent: 'center',
      borderRadius: 10

    },
    textobotao: {
      color:'#304FFE',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '700'
    },
    principal: {
      width: '100%',
      height: '100%',
      backgroundColor: '#304FFE'
    }
  });
  export default Login;