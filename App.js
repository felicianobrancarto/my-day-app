import React from 'react';
import {Text, View}from 'react-native'
import Routes1 from "./src/components/routes/Routes1";
import {NavigationContainer} from "@react-navigation/native"
import Login from './src/telas/Login';

function App() {

  return (
    <NavigationContainer>

      <Routes1 />

    </NavigationContainer>
  );
}

export default App;
