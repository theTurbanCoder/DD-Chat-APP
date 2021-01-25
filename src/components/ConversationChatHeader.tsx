import React from 'react'
import { Container } from 'react-bootstrap'
import { ConversationHeaderProps } from '../interfaces'
import './ConversationChatHeader.css'
export default function ConversationChatHeader(props: ConversationHeaderProps) {
 const { headerInfo } = props

 return (
  <div
   style={{
    backgroundColor: 'white',
    flexBasis: 'auto',
    margin: '0,0',
    minHeight: '120px',
    boxShadow: '0 8px 4px -8px black',
    justifyTracks: 'center',
    alignContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
   }}>
   {/* <div
    style={{
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     alignContent: 'center',
     height: '120px',
     width: '100%',
    }}>
   
   </div> */}
   <Container
    className='headerColor'
    style={{
     display: 'flex',
     marginTop: '1rem',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     alignContent: 'center',
    }}>
    <h3>{headerInfo.name}</h3>
    <p className='headerP'>{headerInfo.users.join(', ')}</p>
   </Container>
  </div>
 )
}
