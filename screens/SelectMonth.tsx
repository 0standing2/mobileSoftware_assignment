import React from 'react';
import {SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Text} from '../theme/Text'
import Header from '../theme/Header';

import { useToggleThemeContext } from "..//ToggleThemeProvider";


const SelectMonth = ()=>{
    const navigation = useNavigation();

    const fontFlag = useToggleThemeContext().fontFlag;
    const colorFlag = useToggleThemeContext().fontColor;

    return(
        <SafeAreaView style={styles.safe}>
            <Header/>
            <View style={styles.titleView}>
                <Text colorFlag={colorFlag} fontFlag={fontFlag} style={styles.titleStyle}>{new Date().getFullYear()}년의 1월~12월 중{"\n"}          선택하세요</Text>
            </View>
            
            <View style={styles.leftView}>
                <TouchableOpacity style={styles.monthView} onPress={()=>navigation.navigate('MonthlyReport', {month : '1'})}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle} > 1월</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.monthView} onPress={()=>navigation.navigate('MonthlyReport', {month : '2'})}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle} > 2월</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.monthView} onPress={()=>navigation.navigate('MonthlyReport', {month : '3'})}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle} > 3월</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.leftView}>
                <TouchableOpacity style={styles.monthView} onPress={()=>navigation.navigate('MonthlyReport', {month : '4'})}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle} > 4월</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.monthView} onPress={()=>navigation.navigate('MonthlyReport', {month : '5'})}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle} > 5월</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.monthView} onPress={()=>navigation.navigate('MonthlyReport', {month : '6'})}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle} > 6월</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.leftView}>
                <TouchableOpacity style={styles.monthView} onPress={()=>navigation.navigate('MonthlyReport', {month : '7'})}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle} > 7월</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.monthView} onPress={()=>navigation.navigate('MonthlyReport', {month : '8'})}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle} > 8월</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.monthView} onPress={()=>navigation.navigate('MonthlyReport', {month : '9'})}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle} > 9월</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.leftView}>
                <TouchableOpacity style={styles.monthView} onPress={()=>navigation.navigate('MonthlyReport', {month : '10'})}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle} > 10월</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.monthView} onPress={()=>navigation.navigate('MonthlyReport', {month : '11'})}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle} > 11월</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.monthView} onPress={()=>navigation.navigate('MonthlyReport', {month : '12'})}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.textStyle} > 12월</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection : 'row', justifyContent : 'center'}}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("Report")}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={{fontWeight:"bold"}}>전체보기</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe : {
        flex : 1,
        backgroundColor : "white",
    },
    titleView: {
        flexDirection:'row', 
        justifyContent : 'center',
        margin : 20,
        marginTop : 40
    },
    leftView : {
        flexDirection : 'row',
        justifyContent : 'center',
    },
    monthView : {
        width : 90,
        height : 90,
        borderRadius : 45,
        backgroundColor : "#d0e8f2",
        margin : 10,
        justifyContent : 'center',
        paddingLeft : 18
    },
    titleStyle : {
        fontSize : 20,
        fontWeight:'bold'
    },
    textStyle : {
        fontSize : 25,
    },
    buttonStyle : {
        backgroundColor : "#fcf8ec",
        borderWidth : 1,
        borderRadius : 10,
        borderColor : "#fcf8ec",
        margin : 20,
        marginBottom : 0,
        padding : 15
    }
})

export default SelectMonth;