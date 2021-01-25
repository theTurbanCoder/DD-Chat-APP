import {
 messagesApi,
 PostApiReturn,
 postChatApi,
 roomsAPI,
 roomsInfoApi,
} from '../interfaces'

export class ChatApi {
 baseUrl = 'http://localhost:8080/api'

 async getDDRooms(): Promise<roomsAPI['results']> {
  const response = await fetch(`${this.baseUrl}/rooms`).then((res) => res.json())
  return await response
 }

 async getDDRoomInfo(roomId: number): Promise<roomsInfoApi> {
  const response: roomsInfoApi = await fetch(
   `${this.baseUrl}/rooms/${roomId}`
  ).then((res) => res.json())

  return await { ...response }
 }

 async getDDRoomMessages(roomId: number): Promise<messagesApi> {
  const response = await fetch(`${this.baseUrl}/rooms/${roomId}/messages`).then((res) =>
   res.json()
  )

  return await { results: response }
 }

 async postMessageFromUserToRoom(
  roomid: number,
  postObj: postChatApi
 ): Promise<PostApiReturn> {
  const response = await fetch(`${this.baseUrl}/rooms/${roomid}/messages`, {
   method: 'post',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(postObj),
  }).then((res) => res.json())

  return await { results: response }
 }
}
