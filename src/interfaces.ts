import { Dispatch, SetStateAction } from 'react'

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

export interface messagesApi {
 results: Array<{ name: string; message: string; id: string; reaction: string | null }>
}

export interface userMessages {
 chatHeaderDetails: roomsInfoApi
 chatMessages: messagesApi['results']
}
