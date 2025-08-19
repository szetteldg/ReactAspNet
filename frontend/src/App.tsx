import { useState } from 'react'
import Greeting from './components/Greeting'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting name="Web Compoonent" sayHelloFunc={(msg) => alert(msg)} />


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
