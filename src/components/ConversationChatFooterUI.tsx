import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { ConversationFooterProps } from '../interfaces'

export default function ConversationChatFooterUI(props: ConversationFooterProps) {
 return (
  <div
   style={{
    display: 'flex',
    backgroundColor: 'light-blue',
    boxShadow: '0 8px 6px 6px black',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
   }}>
   <div
    className='d-flex justify-content-center align-items-center w-100'
    style={{ height: '200px' }}>
    <Form onSubmit={props.handleSendMessage} className='w-75'>
     <Form.Group>
      <InputGroup>
       <Form.Control
        style={{ height: '42px' }}
        as='textarea'
        required
        value={props.chatText}
        placeholder='Type a message'
        onChange={(event) => {
         props.chatMessageTextChangeHandler(event.target.value)
        }}></Form.Control>
       <InputGroup.Append>
        <Button type='submit'> Send</Button>
       </InputGroup.Append>
      </InputGroup>
     </Form.Group>
    </Form>
   </div>
  </div>
 )
}
