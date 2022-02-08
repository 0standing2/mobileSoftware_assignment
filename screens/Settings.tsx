import React from 'react';
import { SafeAreaView,Switch, View, StyleSheet } from 'react-native';
import Header from '../theme/Header';
import {Text} from "../theme/Text";

import { useToggleThemeContext } from "../ToggleThemeProvider";

const Settings = () => {
    const toggleFont = useToggleThemeContext().font;
    const fontFlag = useToggleThemeContext().fontFlag;

    const colorFlag = useToggleThemeContext().fontColor;
    const toggleColor = useToggleThemeContext().colorChange;

    return(
        <SafeAreaView style={styles.safe}>
            <Header/>
            <View style={styles.topView}>
                <View style={styles.titleView}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle}>글씨체 변경하기</Text>
                </View>
                <View style={styles.fontView}>
                    <Text style={styles.textStyle} colorFlag={colorFlag} fontFlag={fontFlag}>명조체   </Text>
                    <Switch value={fontFlag} onValueChange={toggleFont} />
                </View>
                <View style={[styles.titleView, {marginTop : 30}]}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle}>글씨색 변경하기</Text>
                </View>
                <View style={[styles.fontView]}>
                    <View style={{backgroundColor : "#293b5f", width : 70, marginRight: 15}}>
                        <Text fontFlag={fontFlag} style={{color:"white", fontSize:25}}>  색상 </Text>
                    </View>
                    <Switch value={colorFlag} onValueChange={toggleColor} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    safe : {
        backgroundColor : "white",
        flex:1
    },
    topView : {
        marginTop : 30
    },
    fontView : {
        flexDirection : 'row',
        justifyContent : 'center',
        marginTop : 30
    },
    titleView : {
        backgroundColor : "#d0e8f2",
        flexDirection : 'row',
        justifyContent : 'center',
        marginLeft : "20%", 
        marginRight : "20%",
        height : 50,
        paddingTop : 15,
        borderRadius : 20
    },
    textStyle : {
        fontSize : 20,

    }
})

export default Settings;