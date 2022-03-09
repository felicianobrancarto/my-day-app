import {min} from 'moment';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Modal,
  FlatList,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Api from '../../Services/api';
import Atividades from '../../telas/Criacao/Atividades';
import estilosFlatList from './estilos';

function Criacao({navigation}) {
  const [data, setData] = useState('');
  const [horas, setHoras] = useState('');

  function zeroFill(n) {
    return n < 10 ? `0${n}` : `${n}`;
  }

    useEffect(() => {
      let date = new Date().getDate(); //dia
      let ano = new Date().getFullYear();
      let month = new Date().getMonth();
      let meses = new Array(
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro',
      );
      let hours = new Date().getHours() - 3;
      let minut = zeroFill(new Date().getMinutes());

      setData('HOJE,  ' + date + ' DE ' + meses[month].toUpperCase());
      setHoras(hours + ':' + minut);

      return () => {};
    }, []);

  const [atividades, setAtividades] = useState([]);
  useEffect(() => {
    async function getStorage() {
      Api.get('activities/')
        .then(response => {
          const data = response.data;
          setAtividades(data);
        })
        .catch(error => console(error));
    }
    getStorage();
  }, []);

  const [user1, setUser1] = useState({
    daily_entry: {
      mood: 'sleeping',
      activity_ids: [5, 2, 9],
      description: 'hoje dormi...',
      username: 'FelicianoBrancarto',
    },
  });

  function postApi(dailyentries) {
    Api.post('daily_entries/', dailyentries)

      .then(response => {
        const data = response.data;

        console.warn(data);
      })

      .catch(error => console.warn(error));
  }

  return (
    <Modal animationType="slide">
      <View style={estilostelacriacao.Telaprincipal}>
        <KeyboardAvoidingView style={estilostelacriacao.key}>
          <TouchableOpacity
            style={estilostelacriacao.botao}
            onPress={() => navigation.goBack()}>
            <Icon style={estilostelacriacao.retorno} name="close" size={23} />
          </TouchableOpacity>

          <View style={estilostelacriacao.Caixa1}>
            <Text style={estilostelacriacao.TextoPrincipal}>
              Como você está?
            </Text>
            <Icon
              style={estilostelacriacao.iconeclock}
              name="clockcircleo"
              size={15}>
              {' '}
              {horas}
            </Icon>

            <Icon
              style={estilostelacriacao.iconecalendario}
              name="calendar"
              size={15}>
              {' '}
              {data}
            </Icon>
          </View>

          <View style={estilostelacriacao.Caixa2}>
            <TouchableOpacity style={estilostelacriacao.botaoimoji}>
              <Image
                style={estilostelacriacao.estilosEmoji}
                source={require('../../components/assets/happy.png')}
              />
              <Text style={estilostelacriacao.textoemoji}>BEM</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilostelacriacao.botaoimoji}>
              <Image
                style={estilostelacriacao.estilosEmoji}
                source={require('../../components/assets/confused.png')}
              />
              <Text style={estilostelacriacao.textoemoji}>CONFUSO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilostelacriacao.botaoimoji}>
              <Image
                style={estilostelacriacao.estilosEmoji}
                source={require('../../components/assets/sad.png')}
              />
              <Text style={estilostelacriacao.textoemoji}>TRISTE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilostelacriacao.botaoimoji}>
              <Image
                style={estilostelacriacao.estilosEmoji}
                source={require('../../components/assets/sleeping.png')}
              />
              <Text style={estilostelacriacao.textoemoji}>SONO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilostelacriacao.botaoimoji}>
              <Image
                style={estilostelacriacao.estilosEmoji}
                source={require('../../components/assets/nervous.png')}
              />
              <Text style={estilostelacriacao.textoemoji}>MAL</Text>
            </TouchableOpacity>
          </View>

          <View style={estilosFlatList.estiloFlat}>
            <FlatList
              data={atividades}
              keyExtractor={item => item.id.toString()}
              numColumns={3}
              renderItem={({item}) => <Atividades {...item} />}
            />
          </View>

          <View style={estilostelacriacao.Caixa4}>
            <TextInput
              placeholder="Escreva aqui o que aconteceu hoje..."
              style={estilostelacriacao.textocaixa4}
            />
          </View>
          <View>
            <TouchableOpacity
              style={estilostelacriacao.estilobotaosalvar}
              onPress={() => {
                [postApi(user1), navigation.navigate('Routestab')];
              }}>
              <Text style={estilostelacriacao.textobotaosalvar}>SALVAR</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const estilostelacriacao = StyleSheet.create({
  Telaprincipal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    resizeMode: 'cover',
  },
  key: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 80,
  },
  botao: {
    width: 50,
    height: 35,
    marginLeft: 20,
    marginTop: 25,
  },

  retorno: {
    width: 30,
    height: 26,
    color: '#697FFF',
    backgroundColor: '#E5E5E5',
    textAlign: 'center',
  },
  Caixa1: {
    width: '90%',
    height: 85,
    borderRadius: 18,
    marginLeft: 17,
  },
  TextoPrincipal: {
    width: 200,
    height: 25,
    color: '#969696',
    marginLeft: 82,
    color: '#000000',
    fontSize: 23,
    fontWeight: 'bold',
  },

  textodata: {
    width: 150,
    height: 20,
    marginLeft: 50,
  },

  TextoHora: {
    width: 45,
    height: 25,
    color: '#969696',
    marginLeft: 230,
    bottom: 20,
  },
  iconeclock: {
    color: '#969696',
    left: 210,
    top: 32,
  },
  iconecalendario: {
    color: '#969696',
    top: 18,
    left: 30,
  },

  Caixa2: {
    width: '90%',
    height: 70,
    borderRadius: 16,
    marginTop: 12,
    marginLeft: 17,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  estilosEmoji: {
    width: 40,
    height: 40,
    marginTop: 10,
  },

  textoemoji: {
    fontSize: 10,
    color: '#969696',
  },
  botaoimoji: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  Caixa4: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 50,
    borderRadius: 16,
    marginTop: 15,
    marginLeft: 17,
    borderColor: '#000',
    borderWidth: 1,
  },

  textocaixa4: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  estilobotaosalvar: {
    marginTop: 10,
    height: 53,
    width: 350,
    marginLeft: 17,
    backgroundColor: '#304FFE',
    borderRadius: 8,
    justifyContent: 'center',
  },
  textobotaosalvar: {
    fontSize: 17,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Criacao;
