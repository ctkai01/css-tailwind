import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './main.css'
import { Pagoda } from './Pagoda'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='test'>OK</div>
      <Pagoda/>
    </>
  )
}

export default App
