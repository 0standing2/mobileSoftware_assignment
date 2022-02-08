import React, { useEffect, useMemo} from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';

import {Data, sortData,} from '../src/exData';
import Header from '../theme/Header';

import { useToggleThemeContext } from "..//ToggleThemeProvider";
import {Text} from '../theme/Text';

const Report = () => {
    const navigation = useNavigation();

    const fontFlag = useToggleThemeContext().fontFlag;
    const colorFlag = useToggleThemeContext().fontColor;

    const month = (new Date().getMonth()+1).toString();

    useEffect( ()=>{datas},[Data])
    
    const datas =useMemo(()=>{
        sortData();
        return Data.map((oneData,index)=>{
            return (
                <View style={styles.view} key={index}>
                    <View style={[styles.subView]}>
                        <View style={[styles.subView]}>
                            <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.title}>날짜</Text>
                            <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.text}>{oneData.date}</Text>
                        </View>
                        <View style={styles.subView}>
                            <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.title}>종류</Text>
                            <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.text}>{oneData.type}</Text>
                        </View>
                        <View style={styles.subView}>
                            <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.title}>부위</Text>
                            <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.text}>{oneData.part}</Text>
                        </View>
                    </View>

                    <View style={styles.subView}>
                        <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.title}>한줄평</Text>
                        <Text fontFlag={fontFlag} colorFlag={colorFlag} style={[styles.text, {width : "80%"}]}>{oneData.comment}</Text>
                    </View>
            </View>
            )})
    },[Data]);

    return(
        <SafeAreaView style={styles.safe}>
            <View style={{justifyContent : 'center', alignItems :'center'}}>
                <Header/>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("MonthlyReport", {month:month})}>
                        <Text fontFlag={fontFlag} colorFlag={colorFlag} style={{fontWeight:"bold"}}>이번달 모아보기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("SelectMonth")}>
                        <Text fontFlag={fontFlag} colorFlag={colorFlag} style={{fontWeight:"bold"}}>월 별 모아보기</Text>
                    </TouchableOpacity>
                </View> 

                <ScrollView>
                    {datas}
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe : {
        flex:1,
        backgroundColor : "white"
    },
    view : {
        borderWidth : 1, 
        borderRadius : 20,
        margin : 10,
        padding : 10,
        
    },
    subView : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        padding :5,
    },
    title : {
        fontSize : 17,
        backgroundColor : "#d0e8f2",
        marginTop:5,
        marginBottom:5,
        color : "black"
    },
    text : {
        fontSize : 17,
        marginLeft : 10,
        marginRight: 10,
        marginTop:5,
        marginBottom:5
    },
    buttonStyle : {
        backgroundColor : "#d0e8f2",
        borderWidth : 1,
        borderRadius : 10,
        borderColor : "#d0e8f2",
        margin : 10,
        marginBottom : 0,
        padding : 10
    }
})

export default Report;