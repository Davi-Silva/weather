import React, { useState, useEffect } from 'react'
import slugify from 'slugify'
import { FaSearch } from "react-icons/fa";

import {
  Form,
  MainInputsDiv,
  Input,
  Select,
  Button
} from '../../../styles/components/UI/Form/Form'

const Search = ({ setResult, setUnitSymbol, setShowCard, showCard }) => {
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [units, setUnits] = useState('metric')

  useEffect(() => {
    if (units === 'metric') {
      setUnitSymbol('ºC')
    } else if (units === 'imperial') {
      setUnitSymbol('ºF')
    }
  }, [units])

  useEffect(() => {
    setShowCard(false)
  }, [city, state, country, units])


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
    setShowCard(true)
  }

  return (
    <Form onSubmit={handleSearch} showCard={showCard}>
      <MainInputsDiv>
        <Input type='text' onChange={onChangeCity} value={city} placeholder='City' />
        <Input type='text' onChange={onChangeState} value={state} placeholder='State' />
        <Input type='text' onChange={onChangeCountry} value={country} placeholder='Country' />
        <Button type='submit'><FaSearch /></Button>
      </MainInputsDiv>
      <Select onChange={onChangeUnits}>
        <option value='metric'>Metric</option>
        <option value='imperial'>Imperial</option>
      </Select>
    </Form>
  )
}

export default Search
