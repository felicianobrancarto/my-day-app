import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tela2 from '../../../telas/Tela2';
import Tela3 from '../../../telas/tela3';
import Icone from 'react-native-vector-icons/Entypo';
import Icone2 from 'react-native-vector-icons/AntDesign';
import Criacao from '../../../telas/Criacao';
import Routes3 from '../Routes3';

const Tab = createBottomTabNavigator();

function Routestab() {
  const Tela6 = () => <View />
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icone name="home" color={'#304FFE'} size={24} />,
        }}
        name="tela2"
        component={Tela2}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Icone name="circle-with-plus" color={'#304FFE'} size={50} />
          ),
        }}
        name="Routes3"
        component={Routes3}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icone2 name="bars" color={'#304FFE'} size={24} />,
        }}
        name="Tela6"
        component={Tela6}
        listeners = {({navigation}) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate("Criacao")
          }
        })}
      />
    </Tab.Navigator>
  );
}

export default Routestab;
