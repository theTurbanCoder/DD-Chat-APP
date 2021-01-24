import React, { useEffect, useContext, useState } from 'react'
import { apiContext } from '../App'
import { dashBoardProps, messagesApi, roomsAPI, roomsInfoApi } from '../interfaces'
import Sidebar from './Sidebar'
import ConversationUI from './ConversationUI'

export default function Dashboard(props: dashBoardProps) {
 const { username } = props
 const api = useContext(apiContext)
 const [rooms, setRooms] = useState<roomsAPI['results']>([])
 const [roomID, setRoomID] = useState(-1)
 const [chatDetails, setChatDetails] = useState<{
  chatHeaderDetails: roomsInfoApi
  chatMessages: messagesApi['results']
 }>({
  chatHeaderDetails: {
   name: '',
   id: 0,
   users: [],
  },
  chatMessages: [],
 })
 const roomChangeHandler = (
  event: React.MouseEvent,
  room: { id: number; name: string }
 ) => {
  setRoomID(room.id)
 }

 useEffect(() => {
  const fetchRooms = async () => {
   try {
    const rooms = await api.getDDRooms()
    console.log(rooms, 'results')
    setRooms(rooms)
   } catch (error) {}
  }
  fetchRooms()
 }, [api])

 useEffect(() => {
  const fetchRoomDetails = async () => {
   try {
    const roomDetails = await Promise.all([
     await api.getDDRoomInfo(roomID),
     await api.getDDRoomMessages(roomID),
    ])

    setChatDetails((prevState) => {
     return {
      ...prevState,
      chatHeaderDetails: roomDetails[0],
      chatMessages: roomDetails[1].results,
     }
    })
   } catch (error) {}
  }

  if (roomID !== -1) fetchRoomDetails()
 }, [api, roomID])

 return (
  <div style={{ display: 'flex', height: '100%' }}>
   <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
    <Sidebar
     username={username}
     rooms={rooms}
     roomId={roomID}
     roomChangeHandler={roomChangeHandler}
    />
   </div>

   <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
    <ConversationUI {...chatDetails} />
   </div>
  </div>
 )
}
