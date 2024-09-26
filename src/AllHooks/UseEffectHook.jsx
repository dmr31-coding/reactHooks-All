import React from 'react'
import { useState, useEffect } from 'react';

const UseEffectHook = () => {

    const [count, setCount] = useState(0);

    useState

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1);
        }, 2000)
    }, [count])

  return (
    <>
    <h1>I've rendered {count} times...</h1>
    </>
  )
}

export default UseEffectHook