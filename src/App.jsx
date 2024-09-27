import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateHook from './AllHooks/useState/UseStateHook'
import UsestateOne from './AllHooks/useState/UsestateOne'
import UsestateTwo from './AllHooks/useState/UsestateTwo'
import UseEffectHook from './AllHooks/useEffect/UseEffectHook'
import UseRefHook from './AllHooks/useRef/UseRefHook'
import UseRefOne from './AllHooks/useRef/UseRefOne'
import UseMemoHook from './AllHooks/useMemo/UseMemoHook'
import UsememoOne from './AllHooks/useMemo/UsememoOne'
import UseCallbackHook from './AllHooks/useCallback/UseCallbackHook'
import Profile from './AllHooks/useContext/Profile'
import Footer from './AllHooks/useContext/Footer'
import UseeReducerHook from './useReducer/UseeReducerHook'


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

      <UseCallbackHook />

      <Profile />

      <Footer />

      <UseeReducerHook />
    </>
  )
}

export default App
