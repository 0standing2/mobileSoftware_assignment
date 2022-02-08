import React, {useState, useCallback} from 'react';
import { useColorScheme } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer, DefaultTheme, DarkTheme} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import FontawesomeIcon from "react-native-vector-icons/FontAwesome";
import type {RouteProp, ParamListBase} from "@react-navigation/native";

import Settings from './screens/Settings'
import Today from './screens/Today'
import Report from './screens/Report'
import MonthlyReport from './screens/MonthlyReport'
import Calendar from './screens/Calendar';
import SelectMonth from './screens/SelectMonth';
import { ToggleThemeProvider } from './ToggleThemeProvider';


const stack = createStackNavigator();
const Tab = createBottomTabNavigator();
type TabBarIconProps = {focused : boolean, color : string, size : number};



const App = () => {
  const scheme = useColorScheme();

  const [fontFlag, setFontFlag] = useState(false);
  const toggleFont = useCallback( ()=>{
    setFontFlag( (fontFlag)=>{return fontFlag ? false : true});
  },[]);

  const [colorFlag, setColorFlag] = useState(false);
  const toggleColor = useCallback( ()=>{
    setColorFlag( (colorFlag)=>{return colorFlag ? false : true});
  },[]);

  const stackScreen = () => {
    return(
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name="Calendar" component={Calendar}/>
        <stack.Screen name="Report" component={Report}/>
        <stack.Screen name="MonthlyReport" component={MonthlyReport}/>
        <stack.Screen name="SelectMonth" component={SelectMonth}/>
      </stack.Navigator>
    );
  }
  
  const screenOptions = useCallback( ({route}:{route:RouteProp<ParamListBase, string>})=>{
    return{
      tabBarIcon : ({focused, color, size}:TabBarIconProps) => {
        const {name} = route;
        size = focused ? size + 4 : size;
        color = focused ? '#5584ac' : 'gray'
        switch(name) {
          case "Report" : return <FontawesomeIcon name = "file-text" size={size} color={color}/>;
          case "Today" : return <FontawesomeIcon name = "plus-circle" size={size} color={color}/>;
          case "Settings" : return <FontawesomeIcon name="gear" size={size} color={color}/>;
        }
        return <FontawesomeIcon name = "home" size={size} color={color}/>;
      },
      headerShown : false,
    }
  },[]);
  

  return(
    <ToggleThemeProvider fontFlag={fontFlag} font={toggleFont} fontColor={colorFlag} colorChange={toggleColor}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name = "Home" component = {stackScreen}/>
          <Tab.Screen name = "Today" component = {Today}/>
          <Tab.Screen name = "Settings" component = {Settings} options={{tabBarBadge:"!"}}/>
        </Tab.Navigator>

      </NavigationContainer>
    </ToggleThemeProvider>

  )
}

export default App;