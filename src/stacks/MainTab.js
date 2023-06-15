import React, { Profiler } from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from "../components/CustomTabBar";

import Home from "../screens/Home";
import Infs from "../screens/Infs";
import Diary from "../screens/Diary";
import Chat from "../screens/Chat";
import Cvv from "../screens/Cvv";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default () =>(
    <Tab.Navigator initialRouteName="Home"   screenOptions={{headerShown: false}} tabBar={props=><CustomTabBar  {...props}/>  } >
        
        <Tab.Screen name="Infs" component={Infs} />
        <Tab.Screen name="Diary" component={Diary} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Cvv" component={Cvv} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>

); 

