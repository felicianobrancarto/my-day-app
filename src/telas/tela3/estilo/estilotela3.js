import {StyleSheet} from 'react-native';

const estilostela3 = StyleSheet.create({
  principal: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#E5E5E5',
  },

  container: {
    backgroundColor: '#FFFFFF',
    width: 320,
    height: 150,
    left: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  caixa1: {
    width: '100%',
    height: '50%',
    borderRadius: 20,
  },
  textoprincipal: {
    textAlign: 'center',
    bottom: 35,
    lineHeight: 24,
    fontWeight: '400',
    color: '#ACACAC',
  },

  img: {
    width: 57,
    height: 57,
    top: 15,
    left: 15,
  },

  textosentimento: {
    width: 90,
    height: 37,
    bottom: 35,
    left: 80,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
  },

  textohorario: {
    width: 100,
    height: 60,
    bottom: 63,
    left: 140,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    color: '#ACACAC',
  },
  caixa2: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    paddingLeft: 22,
    paddingTop: 5,
  },

  Iconefest: {
    width: 20,
    height: '100%',
    fontWeight: 600,
    marginLeft: 7,
  },
  Iconesport: {
    fontWeight: 600,
    marginLeft: 7,
  },
  Iconecozinha: {
    fontWeight: 600,
    marginLeft: 7,
  },

  Ponto: {
    marginTop: 8,
    marginLeft: 7,
  },

  textoicones: {
    marginLeft: 7,
    fontWeight: '900',
    color: 'black',
  },

  caixa3: {
    width: '100%',
    height: '30%',
    borderRadius: 20,
  },
  textorodape: {
    width: 250,
    height: 20,
    top: 10,
    fontSize: 13,
    paddingLeft: 10,
  },
});

export default estilostela3;
