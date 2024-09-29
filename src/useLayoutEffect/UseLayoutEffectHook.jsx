import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffectHook = () => {

    useEffect(() => {
        console.log("Message from useEffect");
    }, [])

    useLayoutEffect(() => {
        console.log("Message from useLayouteffect");
    }, [])
  return (
    <>
    <h2>Test Message</h2>
    {Array(40).fill('').map((item, index) => (<li key={index}>{Math.pow(Math.random(), 10)}</li>))}
    </>
  )
}

export default UseLayoutEffectHook