import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScoreKeeper from './ScoreKeeper'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScoreKeeper/>
    </>
  )
}

export default App
