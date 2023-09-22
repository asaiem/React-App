import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScoreKeeper from './ScoreKeeper'
import UsernameForm from './newUserForm'
import ShoppingForm from './ShoppingForm'
import ShoppingList from './ShoppingList'
import ValidatedShoppingForm from'./ValidatedShoppingForm'
function App() {

  return (
    <>
      <ValidatedShoppingForm/>
      {/* <ShoppingList/> */}
      {/* <ShoppingForm/> */}
      {/* <UsernameForm/> */}
      {/* <UsernameForm/> */}
      
      {/* <ScoreKeeper/> */}
    </>
  )
}

export default App
