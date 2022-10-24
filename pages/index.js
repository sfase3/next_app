import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


export async function getServerSideProps() {

  const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
  const data = await res.data

  
  return { props: {connect: data } }
}

export default function Home({connect}) {
  console.log(connect)
  return (
    <>
    <Head>
      <title>SSR Page</title>
            </Head>
    <h3>Server Side Rendering for albums</h3>
    <div className={styles.content}>
    {connect.map((e,i)=>(
     <div key={e.id}>
      <span>ID: {e.id}</span><br/>
      <span>{e.title}</span>
     </div> 
    ))}
    </div>
    </>
  )
}
