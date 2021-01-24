import React, { FormEvent, useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { LoginProps } from '../interfaces'
import './Login.css'

export default function Login(props: LoginProps) {
 const userNameRef = useRef<HTMLInputElement>(null)
 const { onUserSubmit } = props
 const handleSubmit = (event: FormEvent) => {
  event.preventDefault() // stops the page from posting

  if (userNameRef.current) {
   localStorage.setItem('loginTime', JSON.stringify(new Date().getTime()))
   onUserSubmit(userNameRef.current.value)
  } else localStorage.clear()
  return
 }

 return (
  <Container className='center-screen'>
   <Form onSubmit={handleSubmit} className='w-50'>
    <Form.Group>
     <Form.Control
      type='text'
      placeholder='Type your username...'
      ref={userNameRef}
      required
     />
    </Form.Group>
    <Button className='w-100 login-button' type='submit'>
     Join the DooorDash Chat
    </Button>
   </Form>
  </Container>
 )
}
