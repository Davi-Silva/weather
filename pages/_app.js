import Layout from '../components/UI/Layout'
import '../styles/_app.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
