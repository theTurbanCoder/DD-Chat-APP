import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import RoomsUI from './RoomsUI'
import UserInfo from './UserInfo'
import TimerContext from './timerContext'
import { sideBarProps } from '../interfaces'
import './Sidebar.css'

export default function Sidebar(props: sideBarProps) {
 return (
  <div style={{ width: '250px', backgroundColor: 'rgb(235, 23, 0)' }}>
   <Nav className='side-nav'>
    <Container className='container-user'>
     <TimerContext>
      <UserInfo username={props.username} />
     </TimerContext>
    </Container>

    <RoomsUI rooms={props.rooms} />
   </Nav>
  </div>
 )
}
