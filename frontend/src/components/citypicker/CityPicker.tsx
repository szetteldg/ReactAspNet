import { useEffect, useMemo, useState } from 'react'
import GEOGRAPHY from './data/geography'
import type { GeographyData } from './data/geography'

export default function CityPicker() {
  const [data, setData] = useState<GeographyData>(GEOGRAPHY)
  const continents = useMemo(() => Object.keys(data), [data])

  const [selectedContinent, setSelectedContinent] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [isAddCityOpen, setIsAddCityOpen] = useState(false)
  const [newCityName, setNewCityName] = useState('')

  useEffect(() => {
    if (!selectedContinent || !selectedCountry) {
      setIsAddCityOpen(false)
      setNewCityName('')
    }
  }, [selectedContinent, selectedCountry])

  const countries = useMemo(() => {
    if (!selectedContinent) return [] as string[]
    return Object.keys(data[selectedContinent])
  }, [selectedContinent, data])

  const cities = useMemo(() => {
    if (!selectedContinent || !selectedCountry) return [] as string[]
    return data[selectedContinent][selectedCountry] ?? []
  }, [selectedContinent, selectedCountry, data])

  const onContinentChange = (value: string) => {
    setSelectedContinent(value)
    setSelectedCountry('')
    setSelectedCity('')
    cancelAddCity()
  }

  const onCountryChange = (value: string) => {
    setSelectedCountry(value)
    setSelectedCity('')
    cancelAddCity()
  }

  const onCityChange = (value: string) => {
    setSelectedCity(value)
    cancelAddCity()
  }

  const openAddCity = () => {
    if (!selectedContinent || !selectedCountry) return
    setNewCityName('')
    setIsAddCityOpen(true)
  }

  const cancelAddCity = () => {
    setIsAddCityOpen(false)
    setNewCityName('')
  }

  const confirmAddCity = () => {
    const trimmed = newCityName.trim()
    if (!trimmed || !selectedContinent || !selectedCountry) {
      setIsAddCityOpen(false)
      setNewCityName('')
      return
    }

    setData(prev => {
      const continentData = prev[selectedContinent] || {}
      const existingCities = continentData[selectedCountry] || []

      if (existingCities.some(c => c.toLowerCase() === trimmed.toLowerCase())) {
        return prev
      }

      return {
        ...prev,
        [selectedContinent]: {
          ...continentData,
          [selectedCountry]: [...existingCities, trimmed],
        },
      }
    })

    setSelectedCity(trimmed)
    setIsAddCityOpen(false)
    setNewCityName('')
  }

  return (
    <div style={{ textAlign: 'left', maxWidth: 480, margin: '1rem auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div>
          <label htmlFor="continent" style={{ display: 'block', marginBottom: 4 }}>Continent</label>
          <div style={{ position: 'relative', paddingRight: 28 }}>
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
        </div>

        <div>
          <label htmlFor="country" style={{ display: 'block', marginBottom: 4 }}>Country</label>
          <div style={{ position: 'relative', paddingRight: 28 }}>
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
        </div>

        <div>
          <label htmlFor="city" style={{ display: 'block', marginBottom: 4 }}>City</label>
          <div style={{ position: 'relative', paddingRight: 28 }}>
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
            {selectedCity && (
              <svg
                aria-label="Selected"
                role="img"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                style={{
                  color: '#16a34a',
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          {selectedContinent && (
            <div style={{ marginTop: 6 }}>
              <button
                type="button"
                onClick={openAddCity}
                disabled={!selectedCountry}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: !selectedCountry ? '#9ca3af' : '#2563eb',
                  textDecoration: !selectedCountry ? 'none' : 'underline',
                  cursor: !selectedCountry ? 'not-allowed' : 'pointer',
                  fontSize: '0.9rem',
                }}
              >
                Add a city
              </button>
            </div>
          )}
        </div>
        {isAddCityOpen && (
          <div
            role="group"
            aria-label="Add city"
            style={{
              marginTop: 8,
              border: 'none',
              borderRadius: 6,
              padding: 0,
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <input
              id="new-city"
              value={newCityName}
              onChange={e => setNewCityName(e.target.value)}
              style={{ flex: 1, padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: 4 }}
              placeholder="City name"
            />
            <button
              type="button"
              onClick={confirmAddCity}
              title="Add city"
              aria-label="Add city"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 32,                
                background: 'black',
                color: '#16a34a',
                cursor: 'pointer',
              }}
            >Add</button>
            <button
              type="button"
              onClick={cancelAddCity}
              title="Cancel"
              aria-label="Cancel"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 32,
                background: 'black',
                color: 'gainsboro',
                cursor: 'pointer',
              }}
            >Cancel</button>
          </div>
        )}
      </div>
    </div>
  )
}


