import React, { useContext } from 'react'
import { TimerRunner } from './timerContext'
import { userInfoProps } from '../interfaces'
import './UserInfo.css'
export default function UserInfo(props: userInfoProps) {
 const time = useContext(TimerRunner)

 return (
  <div>
   <div>{props.username}</div>
   <div>
    <p>
     {`   
     Online for
          ${time.hours < 10 ? '0' + time.hours : time.hours} :
          ${time.minutes < 10 ? '0' + time.minutes : time.minutes} :
          ${time.seconds < 10 ? '0' + time.seconds : time.seconds}
        `}
    </p>
   </div>
  </div>
 )
}
