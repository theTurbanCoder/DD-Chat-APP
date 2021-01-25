import React from 'react'
import { configure, mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import Adapter from 'enzyme-adapter-react-16'

import Dashboard from './Dashboard'
import { ChatApi } from '../chatFetch/chatApi'

configure({ adapter: new Adapter() })

const rooms = [
 { name: 'Tea Chats', id: 0 },
 { name: 'Coffee Chats', id: 1 },
]

const ChatWindowHeader = {
 name: 'Tea Chats',
 id: 0,
 users: ['Ryan', 'Nick', 'Danielle', 'Tanveer Anand', 'Aman Anand'],
}

ChatApi.prototype.getDDRooms = jest.fn().mockImplementation(() => Promise.resolve(rooms))
ChatApi.prototype.getDDRoomInfo = jest
 .fn()
 .mockImplementation(() => Promise.resolve({ ...ChatWindowHeader }))

describe('test for useEffect to run ', () => {
 it('should fetch the rooms from the api url', async () => {
  React.useState = jest
   .fn()
   .mockReturnValueOnce([rooms, {}])
   .mockReturnValueOnce([1, {}])
  const wrapper = mount(<Dashboard username='tanveer' />)

  await act(async () => {
   wrapper.update()
  })
  expect(wrapper.text()).toContain('Tea Chats')
 })
})
