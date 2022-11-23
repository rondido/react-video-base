import React, { useRef, useState } from 'react'


import {add,format,sub,differenceInHours} from 'date-fns';
import addWeeks from 'date-fns/addWeeks';
import {ko} from 'date-fns/locale';
import {format as timeZoneFormat,toDate } from 'date-fns-tz'

export default function DateFnsExample() {
    const [day,setDay] = useState("");
    const birthDayRef = useRef(null);
    const handleBirthDayChange = (e) =>{
        setDay(format (new Date(e.target.value),"EEEE",{ locale: ko }));
    }

    const dateFnsDate = new Date();
    const newDateFnsDate = add(dateFnsDate,{weeks:1});
    const cloneNewDateFnsDate = addWeeks(newDateFnsDate,1);
   
  return (
    <div>
        <h1>date-fns</h1>
        <div>Immutable Check</div>
        <div>
            <span style={{color:'red'}}>dateFnsDate: </span>{format(dateFnsDate,'yyyy-MM-dd')}
            <br/>
            <span style={{color:'blue'}}>newDateFnsDate: </span>{format(newDateFnsDate,'yyyy-MM-dd')}
            <br/>
            <span style={{color:'green'}}>cloneNewDateFnsDate: </span>{format(cloneNewDateFnsDate,'yyyy-MM-dd')}
        </div>
        <div>Leap year (윤년 구하기)</div>
        <div>
            2017년 1월 1일에 1년 빼기:
            {format(sub(new Date("2017-01-01"),{years:1}), 'yyyy-MM-dd')}
        </div>
        <div>
             2017년 1월 1일에 365일 빼기:
             {format(sub(new Date("2017-01-01"),{days:365}), 'yyyy-MM-dd')}
        </div>
        <br/>
        <div>한국어로 표기 (11-23-2022을 2022년 11월 23일로 표기)</div>
        <div>{format(new Date("07-23-2022"), 'yyyy년 MM월 dd일')}</div>
        <br/>
        <div>자기 생일 요일 찾기</div>
        <div>
            <input type="date" ref={birthDayRef} onChange={handleBirthDayChange}/>
            <div>무슨 요일일까요?</div>
            <div>{day}</div>
        </div>
        <br/>
        <div>두 날짜 비교</div>
        <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇시간 차이인가?</div>
        <div>{differenceInHours(new Date("2021-07-17 03:00"),new Date("2021-07-18 02:00"))}시간</div>
        <br/>
        <div> Summer Time (new-york)</div>        
        <div>2018년 3월 10일 13시에 하루 더하기:</div>
        {timeZoneFormat(add(toDate(new Date("2018-03-10 13:00:00"),{timeZone:'America/New_York'}),{days:1}),"yyyy-MM-dd HH:mm:ssXXX",{timeZone:"America/New_York"})}
        <div>2018년 3월 10일 13시에 24시간 더하기</div>
        {timeZoneFormat(add(new Date("2018-03-10 13:00:00"),{days:24}),"yyyy-MM-dd HH:mm:ssXXX",{timeZone:"America/New_York"})}

    </div>
  )
}
