import axios from "axios"
import Head from "next/head"
import { useState,useEffect } from "react"

export const getStaticProps = async() =>{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      const data = response.data;
      return{
            props: {users: data}
      }
}

const Posts = ({users}) => {

     

      return(
            <>
            <Head>
                  <title>
                        Posts
                  </title>
            </Head>
            <div>
                  {users && users.map(({id,name,email}) =>{
                        return(
                              <div key={id}>{name} {email}</div>
                        )
                  })
                  }
            </div>
            </>
      )
}

export default Posts