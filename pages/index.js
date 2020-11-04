import Head from 'next/head'
import { useState } from 'react'
import _ from 'lodash'

import Search from '../components/UI/Form/Search'

import {
  Background,
  Card,
  CityName,
  Temperature,
  TemperatureSymbol
} from '../styles/pages/home'

const Home = () => {
  const [result, setResult] = useState({})
  const [unitSymbol, setUnitSymbol] = useState('ºC')
  const [showCard, setShowCard] = useState(false)


  return (
    <>
      <Head>
        <title>Weather - Home</title>
      </Head>
      <Background>
        <Search
          setResult={setResult}
          setUnitSymbol={setUnitSymbol}
          showCard={showCard}
          setShowCard={setShowCard}
        />
        {!_.isEmpty(result) && showCard && (
          <Card>
            <CityName>{result.name}</CityName>
            <Temperature>{result.main.temp} <TemperatureSymbol>{unitSymbol}</TemperatureSymbol></Temperature>
          </Card>
        )}

        <div className="x1">
          <div className="cloud"></div>
        </div>

        <div className="x2">
          <div className="cloud"></div>
        </div>

        <div className="x3">
          <div className="cloud"></div>
        </div>

        <div className="x4">
          <div className="cloud"></div>
        </div>

        <div className="x5">
          <div className="cloud"></div>
        </div>
      </Background>
    </>
  )
}

export default Home