import './App.css'
import Greeting from './components/greeting/Greeting'
import CityPicker from './components/citypicker/CityPicker'

function App() {

  return (
    <>

      <div>Before</div>
      <Greeting name="Web Compoonent" sayHelloFunc={(msg) => alert(msg)} />

      <div>After</div>
      <CityPicker cityChanged={(cityName) => alert('Selected city: ' + cityName)} />
      
    </>
  )
}

export default App
