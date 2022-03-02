import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function Tela2() {
  return (
    <>
      <View style={estilostela2.Tela}>
        <Image
          style={estilostela2.img}
          source={require('../../components/assets/neutral1.png')}
        />

        <Text style={estilostela2.Text}>
          Você ainda não tem nenhum registro diário. Para começar, toque no
          ícone de adicionar na tela.
        </Text>
      </View>
    </>
  );
}

const estilostela2 = StyleSheet.create({
  Tela: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E5E5E5',
    resizeMode: 'cover',
  },

  Text: {
    width: 358,
    height: 69,
    top: 200,
    left: 1,
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#ACACAC',
  },
  img: {
    width: 50,
    height: 50,
    top: 170,
    left: 150,
  },
});

export default Tela2;
