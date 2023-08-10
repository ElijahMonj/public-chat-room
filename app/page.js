'use client'
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export default function Home() {
  const [user, setUser] = useState(0)

  useEffect(() => {
    console.log('fetch data....')
  },[user]);

  function isLoggedIn (){
    if (user===0){
      return(
        <Dashboard />
      )
    }else{
      return(
        <Dashboard />
      ) 
    }
  }

  return (
    (isLoggedIn())
  )
}
