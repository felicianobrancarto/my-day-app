import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import estilostela3 from "../tela3/estilo/estilotela3";
import Container from './componentes/Container';
import Icone from './componentes/Icone';

function Tela3 ({navigation}) {
    let itemSave = {}
    return <>

<View style={estilostela3.principal}>
    <FlatList 
    data={Icone}
    renderItem={({item}) => 
    <TouchableOpacity onPress={() => {
        itemSave = item

        navigation.navigate("Tela4", {itemSave})

    }
    }
    >

    <Container {...item} />
    </TouchableOpacity>}
    keyExtractor={({ id }) => String(id)}
    />

    </View>
    
    </>

    };

export default Tela3;   