import React, { Profiler } from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from "../components/CustomTabBar";

import Home from "../screens/Home";
import Calendar from "../screens/Home/Calendar";
import Infs from "../screens/Infs";
import Diary from "../screens/Diary";
import Chat from "../screens/Chat";
import Cvv from "../screens/Cvv";
import Profile from "../screens/Profile";
import Q1 from "../screens/Diary/Q1";
import Q2 from "../screens/Diary/Q2";
import Q3 from "../screens/Diary/Q3";
import Q4 from "../screens/Diary/Q4";
import Q5 from "../screens/Diary/Q5";
import Notas from "../screens/Diary/Notas";

const Tab = createBottomTabNavigator();

export default () =>(
    <Tab.Navigator initialRouteName="Home"   screenOptions={{headerShown: false}} tabBar={props=><CustomTabBar  {...props}/>  } >
        
        <Tab.Screen name="Infs" component={Infs} />
        <Tab.Screen name="Diary" component={Diary} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Cvv" component={Cvv} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Q1" component={Q1} />
        <Tab.Screen name="Q2" component={Q2} />
        <Tab.Screen name="Q3" component={Q3} />
        <Tab.Screen name="Q4" component={Q4} />
        <Tab.Screen name="Q5" component={Q5} />
        <Tab.Screen name="Notas" component={Notas} />
        <Tab.Screen name="Calendar" component={Calendar} />
        

    </Tab.Navigator>

); 

