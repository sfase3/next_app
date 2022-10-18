import axios from "axios"
import Head from "next/head"
import { useState,useEffect } from "react"

export const getStaticProps = async() =>{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      const data = response.data;
      return{
            props: {con}
      }
}

const Posts = () => {

     

      return(
            <>
            <Head>
                  <title>
                        Posts
                  </title>
            </Head>
            <div>
                  {contacts && contacts.map(({id,name,email}) =>{
                        return(
                              <footer key={id}>{name} {email}</footer>
                        )
                  })
                  }
            </div>
            </>
      )
}

export default Posts