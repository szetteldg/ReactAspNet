import './CityPicker.css'
import { useEffect, useMemo, useState } from 'react'
import GEOGRAPHY from './data/geography'
import type { GeographyData } from './data/geography'

export type GeoDataProps = {
  title: string,
  cityChanged?: (cityName: string) => void
}

export default function CityPicker({ title, cityChanged }: GeoDataProps) {
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

  useEffect(() => {
    if (cityChanged) {
      cityChanged(selectedCity)
    }
  }, [selectedCity, cityChanged])

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
    <div className="citypicker-container">
      <h3>{title}</h3>
      <div className="citypicker-stack">
        <div>
          <label htmlFor="continent" className="citypicker-label">Continent</label>
          <div className="select-wrapper">
            <select
              id="continent"
              value={selectedContinent}
              onChange={e => onContinentChange(e.target.value)}
              className="citypicker-select"
            >
              <option value="">Select continent…</option>
              {continents.map(continent => (
                <option key={continent} value={continent}>{continent}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="country" className="citypicker-label">Country</label>
          <div className="select-wrapper">
            <select
              id="country"
              value={selectedCountry}
              onChange={e => onCountryChange(e.target.value)}
              disabled={!selectedContinent}
              className="citypicker-select"
            >
              <option value="">Select country…</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="city" className="citypicker-label">City</label>
          <div className="select-wrapper">
            <select
              id="city"
              value={selectedCity}
              onChange={e => onCityChange(e.target.value)}
              disabled={!selectedCountry}
              className="citypicker-select"
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
                className="citypicker-check"
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
            <div className="add-link-wrapper">
              <button
                type="button"
                onClick={openAddCity}
                disabled={!selectedCountry}
                className="add-link"
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
            className="add-panel"
          >
            <input
              id="new-city"
              value={newCityName}
              onChange={e => setNewCityName(e.target.value)}
              className="add-input"
              placeholder="City name"
            />
            <button
              type="button"
              onClick={confirmAddCity}
              title="Add city"
              aria-label="Add city"
              className="add-btn-confirm"
            >Add</button>
            <button
              type="button"
              onClick={cancelAddCity}
              title="Cancel"
              aria-label="Cancel"
              className="add-btn-cancel"
            >Cancel</button>
          </div>
        )}
      </div>
    </div>
  )
}


