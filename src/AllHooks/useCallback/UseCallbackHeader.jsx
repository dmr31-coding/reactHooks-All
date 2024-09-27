import React from 'react'

const UseCallbackHeader = () => {

    console.log("Header renderd...")
  return (
    <div>
        <h2>UseCallbackHeader</h2>
    </div>
  )
}

export default React.memo(UseCallbackHeader)