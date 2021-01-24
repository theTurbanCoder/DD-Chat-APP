import { roomsAPI } from '../interfaces'

export class ChatApi {
 baseUrl = 'http://localhost:8080/api'

 async getDDRooms(): Promise<roomsAPI['results']> {
  const response = await fetch(`${this.baseUrl}/rooms`).then((res) => res.json())
  return await response
 }
}
