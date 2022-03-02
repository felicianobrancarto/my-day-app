import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Fest from 'react-native-vector-icons/MaterialCommunityIcons';
import Ponto from 'react-native-vector-icons/FontAwesome';
import Sport from 'react-native-vector-icons/MaterialIcons';
import Cozinhar from 'react-native-vector-icons/MaterialCommunityIcons';
import estilostela3 from '../estilo/estilotela3';

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
}) {
  return (
    <View style={estilostela3.container}>
      <View style={estilostela3.caixa1}>
        <Image style={estilostela3.img} source={img} />
        <Text style={estilostela3.textoprincipal}>{data}</Text>
        <Text style={[estilostela3.textosentimento, {color: color}]}>
          {humor}
        </Text>
        <Text style={estilostela3.textohorario}>{hora}</Text>
      </View>

      <View style={estilostela3.caixa2}>
        <Fest
          style={estilostela3.Iconefest}
          name={icone1}
          color={'#000000'}
          size={20}
        />
        <Text style={estilostela3.textoicones}>{frase1}</Text>
        <Ponto
          style={estilostela3.Ponto}
          name="circle"
          color={'#000000'}
          size={5}
        />

        <Sport
          style={estilostela3.Iconesport}
          name={icone2}
          color={'#000000'}
          size={20}
        />
        <Text style={estilostela3.textoicones}>{frase2}</Text>
        <Ponto
          style={estilostela3.Ponto}
          name="circle"
          color={'#000000'}
          size={5}
        />

        <Cozinhar
          style={estilostela3.Iconecozinha}
          name={icone3}
          color={'#000000'}
          size={20}
        />
        <Text style={estilostela3.textoicones}>{frase3}</Text>
      </View>

      <View style={estilostela3.caixa3}>
        <Text style={estilostela3.textorodape}>{comentario}</Text>
      </View>
    </View>
  );
}

export default Container;
