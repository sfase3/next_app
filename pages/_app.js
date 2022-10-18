import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{height: '100vh'}}>
    <Layout>
      
     
  <Component {...pageProps} />
  
  </Layout>
  </div>
  )
}

export default MyApp
