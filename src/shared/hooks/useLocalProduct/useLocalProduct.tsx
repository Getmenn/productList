import { useEffect, useState } from "react"

export function useLocalProduct<T>(key: string, defaultState?: T | (() => T)) {
    let itemStorage = null

    if (typeof window !== 'undefined') {
        itemStorage = localStorage.getItem(key) 
    }

    const stateValue = itemStorage ? JSON.parse(itemStorage) : defaultState
    const [value, setValue] = useState(stateValue)

    useEffect(() => {
        value && localStorage.setItem(key, JSON.stringify(value))
    },  [value])

    return [value, setValue]
}