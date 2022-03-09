import {ESLint} from 'eslint';
import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ponto from 'react-native-vector-icons/FontAwesome';

export default function BoxAtividades({name, id}) {
  const [atividades, setAtividades] = useState();
  const [texto, setTexto] = useState();
  useEffect(() => {
    function selecaoAtividades() {
      if (name === 'sports') {
        setAtividades('dribbble');
        setTexto('sports');
      }
      if (name === 'shopping') {
        setAtividades('shoppingcart');
        setTexto('shopping');
      }
      if (name === 'rest') {
        setAtividades('Trophy');
        setTexto('descanso');
      }
      if (name === 'party') {
        setAtividades('play');
        setTexto('festa');
      }
      if (name === 'movies') {
        setAtividades('videocamera');
        setTexto('cinema');
      }
      if (name === 'good_meal') {
        setAtividades('rest');
        setTexto('refeiçao');
      }
      if (name === 'games') {
        setAtividades('customerservice');
        setTexto('games');
      }
      if (name === 'date') {
        setAtividades('team');
        setTexto('encontro');
      }
      if (name === 'cooking') {
        setAtividades('apple1');
        setTexto('cozinhar');
      }
    }
    selecaoAtividades();
  }, []);

  return (
    <>
      <View style={estiloBox.boxView}>
        <Icon style={estiloBox.estiloIcon} name={atividades} size={20} />
        <Text style={estiloBox.estiloTexto}>{texto}</Text>
        <Ponto
          style={estiloBox.estiloPonto}
          name="circle"
          color={'black'}
          size={4}
        />
      </View>
    </>
  );
}

const estiloBox = StyleSheet.create({
  boxView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  estiloIcon: {
    width: 30,
    height: 30,
  },

  estiloTexto: {
    color: '#000000',
    fontSize: 13,
    fontWeight: 'bold',
    height: 35,
    marginTop: 8,
  },
  estiloPonto: {
    height: 5,
    width: 5,
    bottom: 4,
    marginLeft: 7,
  },
});
