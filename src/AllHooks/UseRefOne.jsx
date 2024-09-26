import React, { useRef } from 'react'

const UseRefOne = () => {

    const inputElem = useRef();

    const btnClicked = () => {
        console.log(inputElem.current);
        inputElem.current.style.background = "blue";
    }


  return (
    <>
    <input type="text" ref={inputElem} />
    <button onClick={btnClicked}>Click here</button>
    </>
  )
}

export default UseRefOne