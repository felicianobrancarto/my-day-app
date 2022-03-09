import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import tela2 from '../Tela2';
import Eye from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width;

function Login({navigation}) {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <>
      <View style={styles.principal}>
        <View style={styles.sectionContainer}>
          <Image
            style={styles.Image}
            resizeMode="contain"
            source={require('../../components/assets/login.png')}
          />

          <TextInput
            style={styles.TextInput}
            placeholder="Digite seu e-mail: "
          />

          <View style={styles.inputArea}>
            <TextInput
              style={styles.textInputSenha}
              placeholder="Digite sua senha: "
              value={input}
              onChangeText={texto => setInput(texto)}
              secureTextEntry={hidePass}></TextInput>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHidePass(!hidePass)}>
              {hidePass ? (
                <Eye name="eye" color="#000" size={25} />
              ) : (
                <Eye name="eye-off" color="#000" size={25} />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Routestab')}>
            <Text style={styles.textobotao}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#304FFE',
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: '10%',
    paddingVertical: '10%',
  },
  Image: {
    width: 228,
    height: 228,
    resizeMode: 'center',
    paddingHorizontal: '50%',
    paddingVertical: 100,
  },

  botao: {
    backgroundColor: '#C6CEFF',
    marginTop: 50,
    marginHorizontal: 90,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
  },
  textobotao: {
    color: '#304FFE',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  principal: {
    width: '100%',
    height: '100%',
    backgroundColor: '#304FFE',
  },
  TextInput: {
    backgroundColor: '#F6F6F6',
    marginHorizontal: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    fontSize: 18,
  },

  inputArea: {
    flexDirection: 'row',
    width: '93%',
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    height: 47,
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 15,
  },
  textInputSenha: {
    width: '85%',
    height: 50,
    padding: 8,
    fontSize: 18,
  },
  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Login;
