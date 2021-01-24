import { Dispatch, SetStateAction } from 'react'

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
}

export interface dashBoardProps {
 username: string
}

export interface sideBarProps {
 username: string
 rooms: roomsAPI['results']
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
