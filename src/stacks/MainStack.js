import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import SignUp2 from '../screens/SignUp2';
import SignUp3 from '../screens/SignUp3';
import SignUp4 from '../screens/SignUp4';


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator initialRouteName="Preload"  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUp2" component={SignUp2} />
        <Stack.Screen name="SignUp3" component={SignUp3} />
        <Stack.Screen name="SignUp4" component={SignUp4} />

    </Stack.Navigator>

);