import { useMemo, useState } from 'react'
import GEOGRAPHY from './data/geography'

export default function CityPicker() {
  const continents = useMemo(() => Object.keys(GEOGRAPHY), [])

  const [selectedContinent, setSelectedContinent] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  const countries = useMemo(() => {
    if (!selectedContinent) return [] as string[]
    return Object.keys(GEOGRAPHY[selectedContinent])
  }, [selectedContinent])

  const cities = useMemo(() => {
    if (!selectedContinent || !selectedCountry) return [] as string[]
    return GEOGRAPHY[selectedContinent][selectedCountry] ?? []
  }, [selectedContinent, selectedCountry])

  const onContinentChange = (value: string) => {
    setSelectedContinent(value)
    setSelectedCountry('')
    setSelectedCity('')
  }

  const onCountryChange = (value: string) => {
    setSelectedCountry(value)
    setSelectedCity('')
  }

  const onCityChange = (value: string) => {
    setSelectedCity(value)
  }

  return (
    <div style={{ textAlign: 'left', maxWidth: 480, margin: '1rem auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div>
          <label htmlFor="continent" style={{ display: 'block', marginBottom: 4 }}>Continent</label>
          <select
            id="continent"
            value={selectedContinent}
            onChange={e => onContinentChange(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="">Select continent…</option>
            {continents.map(continent => (
              <option key={continent} value={continent}>{continent}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="country" style={{ display: 'block', marginBottom: 4 }}>Country</label>
          <select
            id="country"
            value={selectedCountry}
            onChange={e => onCountryChange(e.target.value)}
            disabled={!selectedContinent}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="">Select country…</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="city" style={{ display: 'block', marginBottom: 4 }}>City</label>
          <select
            id="city"
            value={selectedCity}
            onChange={e => onCityChange(e.target.value)}
            disabled={!selectedCountry}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="">Select city…</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}


