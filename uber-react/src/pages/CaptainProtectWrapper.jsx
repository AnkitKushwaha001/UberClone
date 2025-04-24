import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)


    // taks1 - implement same as UserProtectWrapper
    // taks2 - implement logout route in captain
    
    useEffect(() => {
        if(!token) {
            navigate('/captain-login')
        }
        else {
          axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then((response) => {
            if(response.status === 200) {
              setCaptain(response.data.captain)
              setIsLoading(false)
            }
          }).catch(err => {
            console.log(err)
            localStorage.removeItem('token')
            navigate('/captain-login')
          })
        }
    }, [token, navigate])


    if(isLoading) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <>
          {children}
      </>
    )
}

export default CaptainProtectWrapper