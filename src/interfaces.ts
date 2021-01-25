import { Dispatch, FormEvent, SetStateAction } from 'react'

export interface Room {
 name: string
 id: number
}
export interface LoginProps {
 onUserSubmit: Dispatch<SetStateAction<string>>
}

export interface localStorageProps {
 key: string
 initialValue?: string
}

export interface RoomsProps {
 rooms: Array<{
  name: string
  id: number
 }>
 roomId: number
 roomChangeHandler: (event: React.MouseEvent, room: Room) => void
}

export interface dashBoardProps {
 username: string
}

export interface sideBarProps {
 username: string
 rooms: roomsAPI['results']
 roomId: number
 roomChangeHandler: (event: React.MouseEvent, room: Room) => void
}

export interface userInfoProps {
 username: string
}

export interface roomsAPI {
 results: Array<{
  name: string
  id: number
 }>
}

export interface roomsInfoApi {
 name: string
 id: number
 users: Array<string>
}

export interface messageObject {
 name: string
 message: string
 id: string
 reaction: string | null
}
export interface messagesApi {
 results: Array<messageObject>
}

export interface PostApiReturn {
 results: messageObject
}

export interface postChatApi {
 name: string
 message: string
 reaction: string | null
}

export interface userMessages {
 chatHeaderDetails: roomsInfoApi
 chatMessages: messagesApi['results']
 roomId: number
 username: string
 setChatDetails: Dispatch<
  SetStateAction<{
   chatHeaderDetails: roomsInfoApi
   chatMessages: messagesApi['results']
  }>
 >
}

export interface ConversationHeaderProps {
 headerInfo: roomsInfoApi
}

export interface ConversationChatWindowProps {
 chatmessages: messagesApi['results']
 userName: string
}

export interface ConversationFooterProps {
 chatMessageTextChangeHandler: (value: string) => void
 chatText: string
 handleSendMessage: (evern: FormEvent) => void
}
