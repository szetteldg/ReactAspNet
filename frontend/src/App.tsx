import { useState } from 'react'
import Greeting from './components/greeting/Greeting'
import './App.css'
import CityPicker from './components/citypicker/CityPicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>Before</div>
      <Greeting name="Web Compoonent" sayHelloFunc={(msg) => alert(msg)} />

      <div>After</div>
      <CityPicker />
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
