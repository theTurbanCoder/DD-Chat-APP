import { useEffect, useState } from 'react'
import { localStorageProps } from '../interfaces'
const PREFIX = 'doordash-userName-'

export default function useLocalStorage(props: localStorageProps) {
 const { key, initialValue } = props
 const prefixedKey = PREFIX + key

 const [value, setValue] = useState(() => {
  const jsonValue = localStorage.getItem(prefixedKey)
  if (jsonValue != null) return JSON.parse(jsonValue)
  else return initialValue
 })

 useEffect(() => {
  value !== undefined && localStorage.setItem(prefixedKey, JSON.stringify(value))
 }, [prefixedKey, value])

 return [value, setValue]
}
