import type {data} from './data';

const Data:Array<data> = [
    { id : 0, date : '12월01일', type : '자전거', part : '하체', time : '1', comment : '아 힘들다~너무 힘들다 너무 힘들어'},
    { id : 1, date : '12월02일', type : '필라테스', part : '상체', time : '1', comment : '운동은 즐거워'},
    { id : 2, date : '12월03일', type : '등산', part : '전신', time : '1', comment : '내일은 쉴래...'},
    { id : 3, date : '12월04일', type : '걷기', part : '하체', time : '1', comment : '아 힘들다~'},
    { id : 4, date : '12월05일', type : '필라테스', part : '전신', time : '1', comment : '오늘 필라테스 진짜 레전드'},
    { id : 5, date : '12월09일', type : '자전거', part : '하체', time : '1', comment : '아 힘들다~'},
    { id : 6, date : '11월01일', type : '걷기', part : '하체', time : '1', comment : '아 재밌다~'},
    { id : 7, date : '11월04일', type : '필라테스', part : '전신', time : '1', comment : '피곤하다'},
    { id : 8, date : '11월05일', type : '걷기', part : '하체', time : '1', comment : '오늘 하체 진짜 뿌셨다!'},
    { id : 9, date : '11월10일', type : '필라테스', part : '상체', time : '1', comment : '근손실 절대 안돼~'},
    { id : 10, date : '11월12일', type : '걷기', part : '하체', time : '1', comment : '아 힘들다~'},
    { id : 11, date : '11월14일', type : '걷기', part : '전신', time : '1', comment : '오늘 운동온거 진짜 뿌듯'},
    { id : 12, date : '11월15일', type : '자전거', part : '하체', time : '1', comment : '오늘 10km 탐!'},
    { id : 13, date : '11월19일', type : '등산', part : '하체', time : '2', comment : '인왕산 최고'},

];

const changeData = (newData : data)=>{
    Data.push(newData);
    return Data;
}

const sortData = ()=>{
    Data.sort((a:data, b:data):number => {
        const A = a.date;
        const B = b.date;
        if (A>B) return 1;
        if (A<B) return -1;
        if (A===B) return 0;
        return 0;
    });
}

const selectData = (month:string)=>{
    const result:data[] = [];
    var i;
    for(i=0;i<Data.length;i++){
        const temp:string =(Data[i].date).split("월")[0];
        if(month==temp) result.push(Data[i]);
    }
    return result;
}

const countMonthData = (month:string)=>{
    var num=0,i;
    for(i=0;i<Data.length;i++) {
        const temp:string =(Data[i].date).split("월")[0];
        if(month==temp) num++;
    }
    return num;
}

const countMonthlyTime = (month:string)=>{
    var num=0,i;
    for(i=0;i<Data.length;i++) {
        const temp:string =(Data[i].date).split("월")[0];
        if(month==temp) num+=parseInt(Data[i].time);
    }
    return num;
}

export {Data, changeData, sortData, selectData, countMonthData, countMonthlyTime};