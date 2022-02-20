import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../../telas/Login';
import Main from '../../../telas/Main';
import Tela4 from '../../../telas/tela4';
import Routestab from '../Routestab';

const Stack = createNativeStackNavigator();


function Routes1() {
return (
<Stack.Navigator>
<Stack.Screen options= {{headerShown: false}} name="login" component={Login} />
<Stack.Screen options= {{headerShown: false}} name="Routestab" component={Routestab} />
<Stack.Screen options= {{headerShown: false}} name="Tela4" component={Tela4} />

</Stack.Navigator>
);
}

export default Routes1;