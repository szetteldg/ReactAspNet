import './App.css'

import CityPicker from './components/citypicker/CityPicker'

function App() {

  return (
    <>
      <p>City picker hosted a plain vanilla react component</p>
      <div style={ { backgroundColor: 'darkseagreen', padding: '1rem'} } >
        <CityPicker title='Where did it happened?' cityChanged={(cityName) => alert('Selected city: ' + cityName)} />      
      </div>      
    </>
  )
}

export default App
