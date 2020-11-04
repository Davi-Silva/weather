import Head from 'next/head'
import { useState } from 'react'
import _ from 'lodash'

import Search from '../components/UI/Form/Search'

const Home = () => {
  const [result, setResult] = useState({})


  return (
    <>
      <Head>
        <title>Weather - Home</title>
      </Head>
      <Search setResult={setResult} />
      {!_.isEmpty(result) && (
        <>
          <p>{result.name}</p>
          <p>{result.main.temp}</p>
        </>
      )}
    </>
  )
}

export default Home