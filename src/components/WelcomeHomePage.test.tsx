import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WelcomePage from './WelcomePage'
configure({ adapter: new Adapter() })

describe('shallow mount welcome component', () => {
 it('should display the welcome message after user is loooged in', () => {
  const wrapper = shallow(<WelcomePage />)
  expect(wrapper.text()).toContain('Doordash Room')
 })
})
