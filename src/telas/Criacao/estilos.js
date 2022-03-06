import React from "react"
import { StyleSheet } from "react-native"

const estilosFlatList = StyleSheet.create({


textoFlatlist: {
    fontSize: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
  },

  Caixa3: {
   flex: 1,
   padding: 5,
   marginTop: 5,
   alignItems: "center",
   height: 80,
   
  },

  estilobotaoflat:{
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    marginTop:16
  },
  
  estiloiconeflat:{
    color:"#000000",
    fontSize: 30,
    borderWidth:2,
    borderColor: "#4169e1",
    borderRadius: 30,
    width:60,
    height: 60,
    textAlign: "center",
    textAlignVertical: "center"

  },
  estiloFlat:{
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 360,
    height: 290,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#4169e1',
  },

});

export default estilosFlatList

