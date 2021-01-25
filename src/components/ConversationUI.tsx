import React, { FormEvent, useState, useContext } from 'react'

import { userMessages } from '../interfaces'
import ConversationChatFooterUI from './ConversationChatFooterUI'
import ConversationChatHeader from './ConversationChatHeader'
import ConversationChatWindow from './ConversationChatWindow'
import { apiContext } from '../App'
export default function ConversationUI(props: userMessages) {
 const [text, setText] = useState('')
 const chatApi = useContext(apiContext)
 const { setChatDetails } = props
 const chatMessageTextChangeHandler = (value: string) => {
  setText(value)
 }

 const postUserMessageToDb = async () => {
  try {
   const messagePostResponse = await chatApi
    .postMessageFromUserToRoom(props.roomId, {
     name: props.username,
     message: text,
     reaction: null,
    })
    .then((res) => res.results)

   setChatDetails((prevState) => {
    return {
     ...prevState,
     chatMessages: [...prevState.chatMessages, messagePostResponse],
    }
   })
   setText('')

   //todo update messages
  } catch (error) {}
 }

 const handleSubmit = (event: FormEvent) => {
  event.preventDefault()
  postUserMessageToDb()
 }

 return (
  <div
   style={{ overflowX: 'hidden', maxHeight: '100vh' }}
   className='d-flex flex-column flex-grow-1'>
   <ConversationChatHeader headerInfo={props.chatHeaderDetails} />
   <ConversationChatWindow userName={props.username} chatmessages={props.chatMessages} />
   <ConversationChatFooterUI
    chatMessageTextChangeHandler={chatMessageTextChangeHandler}
    chatText={text}
    handleSendMessage={handleSubmit}
   />
  </div>
 )
}
