import React from 'react'
import { Nav } from 'react-bootstrap'
import { RoomsProps } from '../interfaces'
import './RoomsUI'
export default function RoomsUI(props: RoomsProps) {
 return (
  <React.Fragment>
   {props.rooms.map((room) => {
    return (
     <div className='navLinks'>
      <Nav.Item
       onClick={(event: React.MouseEvent) => {
        console.log(room)
       }}
       key={room.id}>
       <Nav.Link>{room.name}</Nav.Link>
      </Nav.Item>
     </div>
    )
   })}
  </React.Fragment>
 )
}
