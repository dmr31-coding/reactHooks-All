import React, { useCallback, useState } from 'react'
import UseCallbackHeader from './UseCallbackHeader'

const UseCallbackHook = () => {

    const [count, setCount] = useState(0);

    const newFn = useCallback(() => {}, [])
  return (
    <>
    <UseCallbackHeader newFn={newFn} />

    <h1>{count}</h1>
    <button onClick={() => setCount(prev=> prev+1)}>Click Here</button>
    </>
  )
}

export default UseCallbackHook