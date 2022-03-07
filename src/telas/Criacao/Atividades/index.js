import React, {useState, useEffect} from "react"
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import estilosFlatList from "../estilos";

function Atividades({name}) {

const[atividades, setAtividades] = useState()
const[texto, setTexto] = useState()
useEffect(() => {
    function selecaoAtividades() {
        if(name ==="sports"){
            setAtividades("dribbble")
            setTexto("sports")
        }
        if(name === "shopping"){
            setAtividades("shoppingcart")
            setTexto("shopping")
        }
        if(name === "rest"){
            setAtividades("Trophy")
            setTexto("descanso")
        }
        if(name === "party"){
            setAtividades("play")
            setTexto("festa")
        }
        if(name === "movies"){
            setAtividades("videocamera")
            setTexto("cinema")
        }
        if(name === "good_meal"){
            setAtividades("rest")
            setTexto("refeiçao")
        }
        if(name === "games"){
            setAtividades("customerservice")
            setTexto("games")
        }
        if(name === "date"){
            setAtividades("team")
            setTexto("encontro")
        }
        if(name === "cooking"){
            setAtividades("apple1")
            setTexto("cozinhar")
        }
        
    }
    selecaoAtividades()
},[])
return(
    <View style={estilosFlatList.Caixa3}>

    <TouchableOpacity>
              <Icon style={estilosFlatList.estiloiconeflat} name={atividades}></Icon>
              <Text style={estilosFlatList.textoFlatlist}>{texto}</Text>
              </TouchableOpacity>
    
    </View>
)
}
export default Atividades