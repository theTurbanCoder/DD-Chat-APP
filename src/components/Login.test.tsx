import React, { FormEvent } from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'
import WelcomePage from './WelcomePage'
import Login from './Login'
configure({ adapter: new Adapter() })

const onUserSubmit = jest.fn().mockImplementation((value: string) => {
 return true
})
const userNameRef = {
 current: {
  value: 'Tanveer',
 },
}
const handleSubmit = spy()
const text = 'tanveer'
describe('to mount the loign Component', () => {
 it('shoud test if the login button is clicked', () => {
  const wrapper = mount(<Login onUserSubmit={onUserSubmit} />)
  const submitForm = wrapper.find('#submitForm').first()
  submitForm.simulate('submit', { preventDefault: () => {} })
  expect(onUserSubmit).toHaveBeenCalled()
 })
})
