import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, Modal, navigation, FlatList, Image  } from 'react-native';
import Clock from 'react-native-vector-icons/AntDesign';
import Calendar from 'react-native-vector-icons/AntDesign';
import Retorno from 'react-native-vector-icons/AntDesign';
import Api from "../../Services/api"

class Criacao extends Component {
  constructor(props) {
      super(props)
      this.state = {
          modalVisible: true,
          atividades: []
      }
      this.navigation
  }

  async componentDidMount() {
      const response = await Api.get('activities/')
      this.setState({
          atividades: response.data
      })

  }
  

  render() {
    console.warn(this.state.atividades)
    return (
      <>
        <View style={estilostelacriacao.Telaprincipal}>
          
    
            <TouchableOpacity
              style={estilostelacriacao.botao}
              onPress={() => this.props.navigation.goBack()}>
              <Retorno
                style={estilostelacriacao.retorno}
                name="close"
                size={23}
              />
            </TouchableOpacity>

            <View style={estilostelacriacao.Caixa1}>
              <Text style={estilostelacriacao.TextoPrincipal}>
                Como você está?
              </Text>
              <Clock style={estilostelacriacao.iconeclock} name="clockcircleo" size={15}>"08:35"</Clock>
              
              <Calendar style={estilostelacriacao.iconecalendario} name="calendar" size={15}>"HOJE, 23 DE JANEIRO"</Calendar>
         
            </View>

            <View style={estilostelacriacao.Caixa2}>
              
              <TouchableOpacity style={estilostelacriacao.botaoimoji}>
              <Image style={estilostelacriacao.estilosEmoji} source ={require("../../components/assets/happy.png")} />
              <Text style={estilostelacriacao.textoemoji}>BEM</Text>
              </TouchableOpacity>

              <TouchableOpacity style={estilostelacriacao.botaoimoji}>
              <Image style={estilostelacriacao.estilosEmoji} source ={require("../../components/assets/confused.png")} />
              <Text style={estilostelacriacao.textoemoji}>CONFUSO</Text>
              </TouchableOpacity>

              <TouchableOpacity style={estilostelacriacao.botaoimoji}>
              <Image style={estilostelacriacao.estilosEmoji} source ={require("../../components/assets/sad.png")} />
              <Text style={estilostelacriacao.textoemoji}>TRISTE</Text>
              </TouchableOpacity>

              <TouchableOpacity style={estilostelacriacao.botaoimoji}>
              <Image style={estilostelacriacao.estilosEmoji} source ={require("../../components/assets/sleeping.png")} />
              <Text style={estilostelacriacao.textoemoji}>SONO</Text>
              </TouchableOpacity>

              <TouchableOpacity style={estilostelacriacao.botaoimoji}>
              <Image style={estilostelacriacao.estilosEmoji} source ={require("../../components/assets/nervous.png")} />
              <Text style={estilostelacriacao.textoemoji}>MAL</Text>
              </TouchableOpacity>

            </View>

            <View style={estilostelacriacao.Caixa3}>
              <FlatList
              data={this.state.atividades}
              keyExtractor={item => item.id.toString()}
              numColumns={3}
              renderItem={({item}) =>

              <Text style={estilostelacriacao.textoFlatlist}>
                {item.name}
              </Text>
            
      
            }
              />
              
            </View>

            <View style={estilostelacriacao.Caixa4}>
              <Text style={estilostelacriacao.textocaixa4}>
                Escreva aqui o que aconteceu hoje...
              </Text>
          
            </View>

            <Button title="Sair" onPress={() => this.sair(false)} />
          
        </View>
      </>
    );
  }
}

const estilostelacriacao = StyleSheet.create({
  Telaprincipal: {
    flex: 1, 
    backgroundColor: '#E5E5E5',
    resizeMode: 'cover',
    
  },
  botao: {
    width: 50,
    height: 50,
    marginLeft: 20,
    top: 20,
    color: '#304FFE',
  },

  retorno: {
    width: 50,
    height: 50,
  },
  Caixa1: {
    width: '90%',
    height: 85,
    borderRadius: 18,
    marginLeft: 17,
    backgroundColor: '#FFFFFF',


  },
  TextoPrincipal: {
    width: 150,
    height: 22,
    color: '#969696',
    marginLeft: 82,
    color: '#000000',
    fontSize: 19,
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
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 70,
    borderRadius: 16,
    marginTop: 12,
    marginLeft: 17,
    flexDirection: "row",
    justifyContent: "space-around"
    
  },


  estilosEmoji: {
    width: 40,
    height: 40,
    marginTop: 10,

  },


  textoemoji: {
    fontSize: 10

  
  },
  botaoimoji: {
    flexDirection: "column",
    alignItems: "center"

  },

  Caixa3: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 280,
    borderRadius: 16,
    marginTop: 15,
    marginLeft: 17,
    alignItems: 'center'
  },
  textocaixa3: {
    width: 50,
    height: 50,
    
  },
  textoFlatlist: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 35,
  },

  Caixa4: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 60,
    borderRadius: 16,
    marginTop: 15,
    marginLeft: 17,
  },
  textocaixa4: {
    width: 250,
    height: 50,
    fontSize: 13,
    marginLeft: 10,
    marginTop: 10,
    color: '#969696',
  },
});

export default Criacao;

//<Button title="Entrar" onPress={ this.entrar } />
