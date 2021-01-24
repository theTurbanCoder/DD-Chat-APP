import React, { FunctionComponent, useState, useEffect } from 'react'

export const TimerRunner = React.createContext({
 seconds: 0,
 minutes: 0,
 hours: 0,
})

const TimerContext: FunctionComponent = ({ children }) => {
 let loginTime = localStorage.getItem('loginTime')

 let currentDate = new Date()

 let loginTimeDate = new Date()

 if (loginTime) loginTimeDate = new Date(+loginTime)

 const diffDate: number = +currentDate - +loginTimeDate

 const [time, setTime] = useState({
  seconds: 0,
  minutes: Math.round(((diffDate % 86400000) % 3600000) / 60000),
  hours: Math.floor((diffDate % 86400000) / 3600000),
 })

 useEffect(() => {
  let isCancelled = false

  const startTimer = () => {
   setTimeout(() => {
    let nSeconds = time.seconds
    let nMinutes = time.minutes
    let nHours = time.hours

    nSeconds++

    if (nSeconds > 59) {
     nMinutes++
     nSeconds = 0
    }
    if (nMinutes > 59) {
     nHours++
     nMinutes = 0
    }
    if (nHours > 24) {
     nHours = 0
    }

    !isCancelled &&
     setTime((prevTime) => {
      return { ...prevTime, seconds: nSeconds, minutes: nMinutes, hours: nHours }
     })
   }, 1000)
  }

  startTimer()

  // cleanup function to de register the original set timeout
  return () => {
   isCancelled = true
  }
 }, [time])

 return <TimerRunner.Provider value={time}>{children}</TimerRunner.Provider>
}

export default TimerContext
