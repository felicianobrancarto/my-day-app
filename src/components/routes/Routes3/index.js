import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela3 from '../../../telas/tela3';
import Tela4 from '../../../telas/tela4';

const Stack = createNativeStackNavigator();


function Routes3() {
return (
<Stack.Navigator>
<Stack.Screen options= {{headerShown: false}} name="Tela3" component={Tela3} />
<Stack.Screen options= {{headerShown: false}} name="Tela4" component={Tela4} />

</Stack.Navigator>
);
}

export default Routes3;