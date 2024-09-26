import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateHook from './AllHooks/UseStateHook'
import UsestateOne from './AllHooks/UsestateOne'
import UsestateTwo from './AllHooks/UsestateTwo'
import UseEffectHook from './AllHooks/UseEffectHook'
import UseRefHook from './AllHooks/UseRefHook'
import UseRefOne from './AllHooks/UseRefOne'
import UseMemoHook from './AllHooks/UseMemoHook'
import UsememoOne from './AllHooks/UsememoOne'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseStateHook />

      <UsestateOne />

      <UsestateTwo />

      <UseEffectHook />

      <UseRefHook />

      <UseRefOne />

      <UseMemoHook />

      <UsememoOne />
    </>
  )
}

export default App
