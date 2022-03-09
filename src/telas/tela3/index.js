import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import estilostela3 from '../tela3/estilo/estilotela3';
import Container from './componentes/Container';
import Icone from './componentes/Icone';
import Api from '../../Services/api';

function Tela3({navigation}) {
  let itemSave = {};

  const [atividades, setAtividades] = useState([]);
  useEffect(() => {
    async function getStorage() {
      Api.get('daily_entries/?username=FelicianoBrancarto')
        .then(response => {
          const data = response.data;
          setAtividades(data);
        })
        .catch(error => console(error));
    }
    getStorage();
  }, []);

  console.warn(atividades);

  return (
    <>
      <View style={estilostela3.principal}>
        <FlatList
          data={atividades}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                itemSave = item;

                navigation.navigate('Tela4', {itemSave});
              }}>
              <Container {...item} />
            </TouchableOpacity>
          )}
          keyExtractor={({id}) => String(id)}
        />
      </View>
    </>
  );
}

export default Tela3;
