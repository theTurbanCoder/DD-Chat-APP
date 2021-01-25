import React, { useCallback } from 'react'
import { ConversationChatWindowProps } from '../interfaces'
import './ConversationChatWindow.css'
export default function ConversationChatWindow(props: ConversationChatWindowProps) {
 const setRef = useCallback((node: HTMLDivElement) => {
  if (node) node.scrollIntoView(true)
 }, [])

 return (
  <div className='flex-grow-1 overflow-auto'>
   <div className='h-100 d-flex flex-column align-items-start'>
    {props.chatmessages.map((msgObj, index: number) => {
     const lastMessage = props.chatmessages.length - 1 === index
     const fromMe = msgObj.name === props.userName
     return (
      <div
       ref={lastMessage ? setRef : null}
       key={index}
       className={`my-2 py-2 d-flex flex-column m-4 ${
        fromMe ? 'align-self-end align-items-end' : 'align-items-start'
       }`}>
       <div
        className={`messageBox ${fromMe ? 'messageFromMe' : 'border'} px-4 px-4`}
        style={{
         maxWidth: '500px',
         wordWrap: 'break-word',
         borderRadius: '50px',
         padding: '20px 20px',
        }}>
        {msgObj.message}
       </div>
       {!fromMe && <div>{msgObj.name}</div>}
      </div>
     )
    })}
   </div>
  </div>
 )
}
