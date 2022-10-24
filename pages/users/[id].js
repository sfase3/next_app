import axios from "axios"
import Head from "next/head"
import { useState,useEffect } from "react"
import UserInfo from "../../components/UserInfo"


export const getServerSideProps = async(context) =>{
      const {id} =context.params
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = response.data;
      return{
            props: {contact: data}
      }
}

const User = ({contact}) => {

     

      return(
            <>
            <Head>
                  <title>
                        User
                  </title>
            </Head>
      
            <UserInfo contact={contact}/>
                        </>
      )
}

export default User