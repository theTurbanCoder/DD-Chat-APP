import React from 'react'
import { Container } from 'react-bootstrap'
import { userMessages } from '../interfaces'
import ConversationChatHeader from './ConversationChatHeader'
import ConversationChatWindow from './ConversationChatWindow'

export default function ConversationUI(props: userMessages) {
 return (
  <div style={{ flexGrow: 1, margin: '0,0' }}>
   <ConversationChatHeader />
   <ConversationChatWindow />
  </div>
 )
}
