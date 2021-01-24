import React from 'react'
import { ChatApi } from './chatFetch/chatApi'
import useLocalStorage from './customHooks/useLocalStorage'
import LoginComponent from './components/Login'
import './App.css'
import Dashboard from './components/Dashboard'

const chatAPI = new ChatApi()
export const apiContext = React.createContext(chatAPI)

function App() {
 const [userName, setUserName] = useLocalStorage({ key: 'userName' })

 return (
  <apiContext.Provider value={chatAPI}>
   <div className='App'>
    {userName ? (
     <Dashboard username={userName} />
    ) : (
     <LoginComponent onUserSubmit={setUserName} />
    )}
   </div>
  </apiContext.Provider>
 )
}

export default App
