import React, { useContext } from 'react'
import { AppContext } from './UseContextProvider'

const Footer = () => {

    const {phone, name} = useContext(AppContext);

  return (
    <div>
        <h2>Footer</h2>
        <h3>Phone: {phone}</h3>
        <h4>Name: {name}</h4>
    </div>
  )
}

export default Footer