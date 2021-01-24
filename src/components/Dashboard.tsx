import React, { useEffect, useContext, useState } from 'react'
import { apiContext } from '../App'
import { dashBoardProps, roomsAPI } from '../interfaces'
import Sidebar from './Sidebar'
import ConversationUI from './ConversationUI'

export default function Dashboard(props: dashBoardProps) {
 const { username } = props
 const api = useContext(apiContext)
 const [rooms, setRooms] = useState<roomsAPI['results']>([])
 useEffect(() => {
  const fetchRooms = async () => {
   try {
    const rooms = await api.getDDRooms()
    console.log(rooms, 'results')
    setRooms(rooms)
   } catch (error) {}
  }
  fetchRooms()
 }, [])

 return (
  <div className='d-flex' style={{ height: '100vh' }}>
   <Sidebar username={username} rooms={rooms} />
   <ConversationUI />
  </div>
 )
}
