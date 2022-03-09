import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Fest from 'react-native-vector-icons/MaterialCommunityIcons';
import Ponto from 'react-native-vector-icons/FontAwesome';
import Sport from 'react-native-vector-icons/MaterialIcons';
import Cozinhar from 'react-native-vector-icons/MaterialCommunityIcons';
import estilostela3 from '../estilo/estilotela3';
import BoxAtividades from './BoxAtividades';
import Criacao from '../../Criacao';

function Container({
  img,
  data,
  humor,
  hora,
  icone1,
  frase1,
  icone2,
  frase2,
  icone3,
  frase3,
  comentario,
  color,
  mood,
  activities,
  short_description,
}) {
  const [pegarHumor, setPegarHumor] = useState();
  const [pegarTexto, setPegarTexto] = useState();
  const [pegarCor, setPegarCor] = useState();

  useEffect(() => {
    if (mood === 'happy') {
      setPegarHumor(require('../../../components/assets/happy.png'));
      setPegarTexto('BEM');
      setPegarCor('red');
    }
    if (mood === 'confused') {
      setPegarHumor(require('../../../components/assets/confused.png'));
      setPegarTexto('CONFUSO');
      setPegarCor('#AFAF');
    }
    if (mood === 'nervous') {
      setPegarHumor(require('../../../components/assets/nervous.png'));
      setPegarTexto('MAL');
      setPegarCor('blue');
    }
    if (mood === 'sad') {
      setPegarHumor(require('../../../components/assets/sad.png'));
      setPegarTexto('TRISTE');
      setPegarCor('green');
    }
    if (mood === 'sleeping') {
      setPegarHumor(require('../../../components/assets/sleeping.png'));
      setPegarTexto('DORMINDO');
      setPegarCor('purple');
    }
    return () => {};
  }, []);

  return (
    <View style={estilostela3.container}>
      <View style={estilostela3.caixa1}>
        <Image style={estilostela3.img} source={pegarHumor} />
        <Text style={estilostela3.textoprincipal}> HOJE, 08 DE MARÇO</Text>
        <Text style={[estilostela3.textosentimento, {color: pegarCor}]}>
          {pegarTexto}
        </Text>
        <Text style={estilostela3.textohorario}>20:45</Text>
      </View>

      <View style={estilostela3.caixa2}>
        {activities.map(activities => (
          <BoxAtividades {...activities} />
        ))}
      </View>

      <View style={estilostela3.caixa3}>
        <Text style={estilostela3.textorodape}>{short_description}</Text>
      </View>
    </View>
  );
}

export default Container;
