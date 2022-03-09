import React from 'react';
import {StyleSheet} from 'react-native';

const estilosFlatList = StyleSheet.create({
  textoFlatlist: {
    fontSize: 13,
    marginVertical: 10,
  },

  Caixa3: {
    flex: 1,
    padding: 5,
    marginTop: 15,
    alignItems: 'center',
    height: 80,
  },

  estilobotaoflat: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },

  estiloiconeflat: {
    color: '#000000',
    fontSize: 32,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 30,
    width: 43,
    height: 43,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  estiloFlat: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 360,
    height: 300,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

export default estilosFlatList;
