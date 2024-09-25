import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateHook from './AllHooks/UseStateHook'
import UsestateOne from './AllHooks/UsestateOne'
import UsestateTwo from './AllHooks/UsestateTwo'
import UseEffectHook from './AllHooks/UseEffectHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseStateHook />

      <UsestateOne />

      <UsestateTwo />

      {/* <UseEffectHook /> */}
    </>
  )
}

export default App
