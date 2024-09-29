// in this we dont use the custom hook so to use custom hook we write hook name generally start from 'use'
// it is used for applying same logic on diff. components instead of writin same code frequently.

// import React, { useEffect } from 'react'
// import { useState } from 'react'

// const CustomHook = () => {

//     const [name, setName] = useState(
//         localStorage.getItem('username') ?
//         localStorage.getItem('username') : ''
//     );

//     useEffect(() => {
//         localStorage.setItem('username', name)}, [name])

//   return (
//     <>
//         <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
//         <h2>Hello, {name}...</h2>
//     </>
//   )
// }

// export default CustomHook
//mathi ko comment gareko code chai custom hook use garnu aggadi ko code

// aba tala chai custom hook use gare paxi ko code same output but less effort

import React from 'react'
import UseLocalStorageCustomHook from './UseLocalStorageCustomHook'

const CustomHook = () => {

    const [name, setName] = UseLocalStorageCustomHook('username', '')
    const [id, setId] = UseLocalStorageCustomHook('userid', '')


  return (
    <>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
        <h2>Hello, {name}...</h2>

        <input type="text" placeholder='Enter your Id' value={id} onChange={(e) => setId(e.target.value)} />
        <h2>Your Id: {id}...</h2>
    </>
  )
}

export default CustomHook