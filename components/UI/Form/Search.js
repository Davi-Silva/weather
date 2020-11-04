import React, { useState } from 'react'
import slugify from 'slugify'

const Search = ({ setResult }) => {
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [units, setUnits] = useState('metric')

  const onChangeCity = (e) => {
    setCity(e.target.value)
  }

  const onChangeState = (e) => {
    setState(e.target.value)
  }

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const onChangeUnits = (e) => {
    setUnits(e.target.value)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    const response = await fetch(`${process.env.BACKEND_API}/location/weather?city=${slugify(city, '+')}&state=${slugify(state, '+')}&country=${slugify(country, '+')}&units=${units}`)

    const data = await response.json()
    setResult(data)
  }

  return (
    <form onSubmit={handleSearch}>
      <input type='text' onChange={onChangeCity} value={city} />
      <input type='text' onChange={onChangeState} value={state} />
      <input type='text' onChange={onChangeCountry} value={country} />
      <select onChange={onChangeUnits}>
        <option value='metric'>Metric</option>
        <option value='imperial'>Imperial</option>
      </select>
      <button type='submit'>Search</button>
    </form>
  )
}

export default Search
