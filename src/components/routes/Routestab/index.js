import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tela2 from "../../../telas/Tela2";
import Tela3 from "../../../telas/tela3";
import Tela4 from "../../../telas/tela4";
import Icone from "react-native-vector-icons/Entypo"

const Tab = createBottomTabNavigator();

function Routestab() {
return (
<Tab.Navigator>
<Tab.Screen options={{
    tabBarIcon: () => <Icone name="home" color={'#304FFE'} size={24} />
}} name="tela2" component={Tela2} />
<Tab.Screen options={{
    tabBarIcon: () => <Icone name="circle-with-plus" color={'#304FFE'} size={30} />
}} name="tela3" component={Tela3} />
<Tab.Screen options={{
    tabBarIcon: () => <Icone name="menu" color={'#304FFE'} size={24} />
}} name="tela4" component={Tela4} />
</Tab.Navigator>
);
}

export default Routestab;