import axios from "axios"
import Head from "next/head"
import { useState,useEffect } from "react"
import Link from "next/link"

export const getStaticProps = async() =>{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      const data = response.data;
      return{
            props: {users: data}
      }
}

const Users = ({users}) => {

     

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
                              <footer key={id}>
                                <Link href={`/users/${id}`}>{name}
                                </Link>
                                </footer>
                        )
                  })
                  }
            </div>
            </>
      )
}

export default Users