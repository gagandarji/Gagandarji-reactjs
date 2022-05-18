
import Layout from '../components/Layout'
import {Provider } from '../context/Provider'
import '../styles/globals.css' 

function MyApp({ Component, pageProps }) {

  return (
  <Layout>
    <Provider> 
        <Component {...pageProps} /> 
    </Provider>
  </Layout>
  )
}

export default MyApp
