import React from 'react'
import { Nav } from 'react-bootstrap'
import { RoomsProps } from '../interfaces'
import './RoomsUI.css'
export default function RoomsUI(props: RoomsProps) {
 return (
  <React.Fragment>
   {props.rooms.map((room) => {
    const classNames =
     room.id === props.roomId
      ? 'navLinks navLinksDiv nav-item-active'
      : 'navLinks navLinksDiv'
    return (
     <div
      className={classNames}
      key={`${room.id}#${room.name}`}
      style={{ width: '250px' }}>
      <Nav.Item
       onClick={(event: React.MouseEvent) => {
        props.roomChangeHandler(event, room)
       }}
       key={room.id}>
       <Nav.Link eventKey={`link-${room.id}`}>{room.name}</Nav.Link>
      </Nav.Item>
     </div>
    )
   })}
  </React.Fragment>
 )
}
