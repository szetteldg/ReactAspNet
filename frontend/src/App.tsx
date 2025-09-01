import './App.css'

import CityPicker from './components/citypicker/CityPicker'

function App() {

  return (
    <>
      <p>City picker hosted a plain vanilla react component which can add cities</p>
      <div style={ { backgroundColor: 'darkseagreen', padding: '1rem'} } >
        <CityPicker 
          title='Pick or add city' 
          cityChanged={(cityName) => alert('Selected city: ' + cityName)} />
      </div>      

      <p>City picker which cannot add new cities</p>
      <div style={ { backgroundColor: 'darkcyan', padding: '1rem'} } >
        <CityPicker 
          title='Where did it happened?'
          canAddCity={false} 
          cityChanged={(cityName) => alert('Selected city: ' + cityName)} />
      </div> 
    </>
  )
}

export default App
