import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Fest from 'react-native-vector-icons/MaterialCommunityIcons';
import Sport from 'react-native-vector-icons/MaterialIcons';
import Cozinhar from 'react-native-vector-icons/MaterialCommunityIcons';
import Clock from 'react-native-vector-icons/AntDesign';
import Calendar from 'react-native-vector-icons/AntDesign';
import Retorno from 'react-native-vector-icons/AntDesign';

function Tela4 ({route:{params},navigation}) {
    const itemSave = params.itemSave;


    return <>
    <View style={estilostela4.Telaprincipal}>
        <TouchableOpacity style={estilostela4.botao} onPress={() => navigation.goBack ()}>

            <Retorno style={estilostela4.retorno} name ="leftcircleo"  size={23}/>
            
            </TouchableOpacity>

    <View style={estilostela4.Caixa1}>

        <Clock style={estilostela4.iconeclock} name="clockcircleo"  size={15} />
        <Text style= {estilostela4.TextoHora}>{itemSave.hora}</Text>
        <Calendar style={estilostela4.iconecalendario} name="calendar" size={15} />
        <Text style={estilostela4.TextoPrincipal}>{itemSave.data}</Text>
        <Image style={estilostela4.Image} source={itemSave.img} />
        <Text style={[estilostela4.TextoBem, {color:itemSave.color}]}>{itemSave.humor}</Text>
        </View>
    
    <View style={estilostela4.Caixa2}>
        <Fest style={estilostela4.Iconefest} name="dance-ballroom" color={"white"} size={40} />
        <Text style={estilostela4.textoicones}>festa</Text>

        <Sport style={estilostela4.Iconesport} name="sports-handball" color={"white"} size={40} />
        <Text style={estilostela4.textoicones}>esporte</Text>

        <Cozinhar style={estilostela4.Iconecozinha} name="food-turkey" color={"white"} size={40} />
    <Text style={estilostela4.textoicones}>cozinhar</Text>
    
        </View>   
     <View style={estilostela4.Caixa3}>
         <Text style={estilostela4.Textocaixa3}>
         {itemSave.comentario}
         </Text>
         </View>   

        </View>
    
    </>

};    

const estilostela4 = StyleSheet.create({

    Telaprincipal: {
        width: '100%',
        height: '100%',
        backgroundColor: "#E5E5E5",
        resizeMode: 'cover',

    },    

    botao: {
        width: 50,
        height: 50,
        marginLeft: 30,
        top: 30,
        color: "#304FFE",
        
    },       

    retorno: {
        width: 50,
        height: 50,

    },

      Caixa1: {
          width: '90%',
          height: 160,
          borderRadius: 16,
          marginTop: 20,
          marginLeft: 17
      },

      TextoHora: {
        width: 45,
        height: 25,
        color: '#969696',
        marginLeft: 144
    },
    iconeclock: {
        color: '#969696',
        top: 18,
        left: 120
    },
    iconecalendario: {
        color: '#969696',
        top: 18,
        left: 70

    },

      TextoPrincipal: {
        width: 150,
        height: 25,
        color: '#969696',
        marginLeft: 90,
        color: '#969696'

      },

      Image: {
        width: 50,
        height: 50,
        resizeMode: 'center',
        paddingHorizontal: '50%',
        marginTop: 15
        

      },

      TextoBem: {
          width: 50,
          height: 50,
          color: '#E24B4B',
          marginLeft: 147,
          marginTop: 4,
          fontWeight: 'bold'

      },


      Caixa2: {
          backgroundColor: '#FFFFFF',
          width: '90%',
          height: 110,
          borderRadius: 16,
          marginTop: 35,
          marginLeft: 17,
          flexDirection: "row",
          
        
      },
      
      textoicones: {
        
        width: 47,
        height: 50,
        fontWeight: 'bold',
        fontSize: 12,
        color: '#000000',
        marginTop: 70,
        left: -37
    
    },

      Iconefest: {
        width: 42,
        height: 42,
        fontWeight: 600,
        marginLeft: 30,
        marginTop: 25,
        backgroundColor: 'blue',
        borderRadius: 1000 

    },

    Iconesport: {
        width: 42,
        height: 42,
        fontWeight: 500,
        marginLeft: 30,
        marginTop: 25,
        backgroundColor: 'blue',
        borderRadius: 1000 

     },

     Iconecozinha: {
        width: 42,
        height: 42,
        fontWeight: 600,
        marginLeft: 20,
        marginTop: 25,
        backgroundColor: 'blue',
        borderRadius: 1000 
     },

     Caixa3: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: 80,
        borderRadius: 16,
        marginTop: 15,
        marginLeft: 17,

    },

     Textocaixa3: {
        width: 290,
        height: 70,
        fontSize: 13,
        lineHeight: 19.5,
        marginTop: 10,
        marginLeft: 18,
        color: '#000000',
        
    },


    
});      

export default Tela4;