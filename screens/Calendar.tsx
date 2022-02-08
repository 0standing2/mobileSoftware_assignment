import React, {useCallback, useEffect, useState} from 'react';
import { Alert, SafeAreaView,StyleSheet, View, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {useNavigation} from "@react-navigation/native";
import {Data, countMonthData} from '../src/exData';
import { useToggleThemeContext } from "..//ToggleThemeProvider";
import {Text} from "../theme/Text";
import Header from '../theme/Header';

const Calendar = () => {
    const navigation = useNavigation();

    const [selectedDate, setSelectedDate] = useState<string>("");
    const [detail, setDetail] = useState<string>("");

    const fontFlag = useToggleThemeContext().fontFlag;
    const colorFlag = useToggleThemeContext().fontColor;

    const [fontFamily, setFontFamily] = useState<string|undefined>(fontFlag ? "NanumMyeongjo" : undefined);
    const [fontColor, setFontColor] = useState<string|undefined>(colorFlag ? "#293b5f" : undefined);

    const [month,setMonth] = useState<string>((new Date().getMonth()+1).toString());

    useEffect(()=>{if (detail!= "") {
        Alert.alert("운동한 날입니다!")}
    },[detail]);

    const changeMonthType =  useCallback( (date:string)=>{
        const list = date.split(' ');
        switch(list[1]){
            case "Jan" : list[1]="1"; break;
            case "Feb" : list[1]="2"; break;
            case "Mar" : list[1]="3"; break;
            case "Apr" : list[1]="4"; break;
            case "May" : list[1]="5"; break;
            case "Jun" : list[1]="6"; break;
            case "Jul" : list[1]="7"; break;
            case "Aug" : list[1]="8"; break;
            case "Sep" : list[1]="9"; break;
            case "Oct" : list[1]="10"; break;
            case "Nov" : list[1]="11"; break;
            case "Dec" : list[1]="12"; break;
        } 
        return list[1];
    },[])

    const onDateChange = useCallback((date:string)=>{
        date = date.toString();
        const list = date.split(' ');
        list[1] = changeMonthType(date);
        setSelectedDate(list[1]+"월" + list[2]+"일");
        var i;
        var flag =false;
        for(i=0;i<Data.length;i++){
            if((list[1]+"월" + list[2]+"일").localeCompare(Data[i].date)==0){
                flag=true;
                const val = "  [날짜]   " +Data[i].date+"\n  [종류]   "+Data[i].type+"\n  [부위]   "+Data[i].part+ "\n[한줄평] "+Data[i].comment;
                setDetail(()=>val);
            }
        }
        if(flag==false) setDetail(()=>"");
    },[Data.length, detail]);

    return(
        <SafeAreaView style={styles.safe}>
            <Header/>
            <View style={styles.calendar}>
                <View style={{marginTop:10}}></View>
                <CalendarPicker 
                    onDateChange={onDateChange} 
                    selectedDayColor="#79a3b1"
                    weekdays={["일","월","화","수","목","금","토"]}
                    months={["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]}
                    monthNamesShort={["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]}
                    previousTitle={"이전 달"}
                    nextTitle={"다음 달"}
                    textStyle={{fontFamily:fontFamily, color:fontColor}}
                    onMonthChange={(date:string)=>{setMonth(changeMonthType(date.toString()))}}
                    minDate={new Date(2020,12,1)}
                    maxDate={new Date(2021,11,31)}
                />
                <View style={{justifyContent:'center', flexDirection:'row'}}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.titleText}>이번 달 운동 횟수 : {countMonthData(month)}</Text>
                </View>
                <View style={{justifyContent:'center', flexDirection:'row'}}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={styles.titleText}>운동 내역</Text>
                </View>
                <View style={styles.detailStyle}>
                    <Text fontFlag={fontFlag} colorFlag={colorFlag} style={{fontSize:20, fontWeight:"bold"}}>{detail}</Text>
                </View>
                <View style={{flexDirection : 'row', justifyContent : 'center'}}>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Report')}> 
                        <Text fontFlag={fontFlag} colorFlag={colorFlag}>전체보기</Text>
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
    calendar : {
        width : "100%",
        
    },
    titleText : {
        fontWeight : "bold",
        marginTop:10,
        fontSize:20
    },
    detailStyle : {
        margin:20,
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
        marginBottom : 15,
        borderWidth : 1,
        borderRadius : 10,
        padding : 30
    },
    button : {
        borderRadius : 20,
        borderWidth : 1, 
        borderColor : '#5584ac',
        backgroundColor : '#5584ac',
        padding : 15
    }
})
export default Calendar;
