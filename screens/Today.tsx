import React, { useCallback, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Alert, TextInput, TouchableOpacity, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {Data, changeData} from '../src/exData';
import Header from '../theme/Header';

import { useToggleThemeContext } from "..//ToggleThemeProvider";
import {Text} from '../theme/Text';

const Today = () => {
    const [selectedType, setSelectedType] = useState<string>("필라테스");
    const [selectedPart, setSelectedPart] = useState<string>("상체");
    const [selectedTime, setSelectedTime] = useState<string>("1");
    const [selectedReview, setSelectedReview] = useState<string>("오늘의 운동 기록중");

    const types = ["필라테스", "자전거", "걷기", "등산"]
    const parts = ["상체", "하체", "전신"]
    const times = ["1","2","3","4"]

    const fontFlag = useToggleThemeContext().fontFlag;
    const colorFlag = useToggleThemeContext().fontColor;

    const month = new Date().getMonth()+1;
    const date = new Date().getDate();

    const [fontFamily, setFontFamily] = useState<string|undefined>(fontFlag ? "NanumMyeongjo" : undefined);
    const [fontColor, setFontColor] = useState<string|undefined>(colorFlag ? "#293b5f" : undefined);

    useEffect( ()=>{
        setFontFamily(fontFlag ? "NanumMyeongjo" : undefined);
        setFontColor(colorFlag ? "#293b5f" : undefined);
    },[fontFlag, colorFlag])


    const insert = useCallback(() => {
        Alert.alert(selectedType+" "+selectedPart+" "+selectedTime+"시간\n"+ selectedReview);
        if (date<10) 
            changeData({id : Data.length, date : month+"월0"+date+"일", type : selectedType, part : selectedPart, time : selectedTime, comment : selectedReview});
        else 
            changeData({id : Data.length, date : month+"월"+date+"일", type : selectedType, part : selectedPart, time : selectedTime, comment : selectedReview});
    }, [selectedType,selectedPart,selectedTime,selectedReview]);

    return(
        <SafeAreaView style={styles.safe}>
            <Header/>
            <View style={styles.titleView}>
                <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.titleText}>오늘의 운동기록</Text>
                <Text fontFlag={fontFlag} colorFlag={colorFlag} style={{fontSize:15, margin :10}}>{month+"월 "+date+"일"}</Text>
            </View>
            <View style={styles.inputView}>
                <View style={styles.typeView}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={{fontSize : 20}}>종류</Text>
                    <SelectDropdown
                        data={types}
                        onSelect={(selectedItem, index)=>{
                            setSelectedType(selectedItem);
                        }}
                        buttonTextAfterSelection={(selectedItem, index)=>{
                            return selectedItem;
                        }}
                        rowTextForSelection={(item,index)=>{
                            return item;
                        }}
                        dropdownStyle={styles.dropstyle}
                        buttonStyle={styles.dropButton}
                        buttonTextStyle={{fontFamily:fontFamily, color:fontColor}}
                        defaultValue={types[0]}
                    />
                </View>
                <View style={styles.typeView}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={{fontSize : 20}}>부위</Text>
                    <SelectDropdown
                        data={parts}
                        onSelect={(selectedItem, index)=>{
                            setSelectedPart(selectedItem);
                        }}
                        buttonTextAfterSelection={(selectedItem, index)=>{
                            return selectedItem;
                        }}
                        rowTextForSelection={(item,index)=>{
                            return item;
                        }}
                        dropdownStyle={styles.dropstyle}
                        buttonStyle={styles.dropButton}
                        buttonTextStyle={{fontFamily:fontFamily, color:fontColor}}
                        defaultValue={parts[0]}
                    />
                </View>
                <View style={styles.typeView}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={{fontSize:20}}>시간</Text>
                    <SelectDropdown
                        data={times}
                        onSelect={(selectedItem, index)=>{
                            setSelectedTime(selectedItem);
                        }}
                        buttonTextAfterSelection={(selectedItem, index)=>{
                            return selectedItem;
                        }}
                        rowTextForSelection={(item,index)=>{
                            return item;
                        }}
                        dropdownStyle={styles.dropstyle}
                        buttonStyle={styles.dropButton}
                        buttonTextStyle={{fontFamily:fontFamily, color:fontColor}}
                        defaultValue={times[0]}
                    />
                </View>
                <View style={styles.typeView}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={{fontSize:20}}>기록</Text>
                    <TextInput style={[styles.textInputStyle, {fontFamily : fontFamily}]}
                        multiline={true}
                        maxLength={40}
                        placeholder="한줄평을 기록하세요(최대 40자)"
                        onChangeText={(text:string)=>setSelectedReview(text)}
                    />
                </View>
                <View style={styles.typeView}>
                    <TouchableOpacity onPress={insert} style={styles.buttonStyle}>
                        <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.buttonText}>추가하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe : {
        flex : 1,
        backgroundColor : "white"    
    },
    titleView : {
        justifyContent : 'center',
        alignItems : 'center',
        padding : 10
    },
    titleText : {
        fontSize:35,
        marginTop : 15,
        fontWeight : 'bold'
    },
    inputView : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    textStyle : {
        fontSize : 20,
        color : "black"
    },
    typeView: {
        flexDirection : 'row',
        justifyContent:'space-around',
        alignItems:'center',
        margin : 3
    },
    dropstyle : {
        backgroundColor:'#D0E8FE',
        width : 250,
    },
    dropButton : {
        backgroundColor:'#D0E8FE',
        margin : 15,
        borderWidth : 1,
        borderRadius : 10,
        borderColor:'#D0E8FE',
        width : 250,

    },
    textInputStyle : {
        borderWidth : 1,
        borderRadius : 10,
        width : 250,
        height : 150,
        margin : 15,
        fontSize:20,
    },
    buttonStyle : {
        width : 150,
        height : 50,
        backgroundColor : "#5584AC",
        borderRadius : 20,
        justifyContent : 'center',
        alignItems : 'center'
    },
    buttonText : {
        fontSize : 20
    }
})
export default Today;