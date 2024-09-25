import React, { useState } from 'react'

const UsestateOne = () => {

    const [car, setCar] = useState({
        brand: "Ferrari",
        model: "Roma",
        year: "2022",
        color: "Red"
    });

    const changeColor = () => {
        setCar((prev) => {
            return {...prev, color: "blue"}
        })
    }
    
  return (
    <>
    <h1>My {car.brand}</h1>
    <h2>It is a {car.color} {car.model} from {car.year}</h2>
    <button onClick={changeColor}>Blue</button>
    </>
  )
}

export default UsestateOne