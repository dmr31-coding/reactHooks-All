import React from 'react'
import { createContext } from 'react'

export const AppContext = createContext();

const UseContextProvider = (props) => {

    const phone = "+97563453992"
    const name = "Ram"

  return (
    <AppContext.Provider value={{phone, name}}>
        {props.children}
    </AppContext.Provider>
  )
}

export default UseContextProvider