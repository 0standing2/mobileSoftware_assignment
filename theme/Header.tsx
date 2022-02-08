import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = ()=>{
    const navigation = useNavigation();
    return(
    <View style={styles.view}>
        <Icon style={styles.icon} name="angle-left" size={45} onPress={()=>{navigation.canGoBack() && navigation.goBack();}}/>
        <Text style={styles.text}>💪🏻 Exercise 💪🏻</Text>
        
    </View>
    )
}
const styles = StyleSheet.create({
    view : {
        flexDirection : 'row',
        width : "100%",
        height : 50,
        
        backgroundColor : "#5584ac"
    },
    icon : {
        paddingLeft : 20
    },
    text : {
        fontWeight:"bold",
        fontSize : 30,
        marginLeft : 60,
        paddingTop:7
        
    }
})
export default Header;