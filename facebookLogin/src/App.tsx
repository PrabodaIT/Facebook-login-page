import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './login.tsx'
import Login from './login.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Login></Login>
      
    </>
  )
}

export default App