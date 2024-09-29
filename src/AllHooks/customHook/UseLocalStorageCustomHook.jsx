import React, { useEffect, useState } from 'react'

const UseLocalStorageCustomHook = (key, initialValue) => {

    const [name, setName] = useState(
        localStorage.getItem(key) ?
        localStorage.getItem(key) : initialValue
    );

    useEffect(() => {
        localStorage.setItem(key, name)}, [name, key])

  return [name, setName]
}

export default UseLocalStorageCustomHook