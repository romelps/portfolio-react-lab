import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const firstStyle = {
  color: 'magenta',
}

const lastStyle = {
  color: "teal"
}

const App = () => {
  const mySkills = [
    {
      name:'JavaScript',
      comfort: 9,
      frontEnd: true,
      backend: true
    },
    {
      name:'CSS',
      comfort: 8,
      frontEnd: true,
      backend: false
    },
    {
      name:'HTML',
      comfort: 10,
      frontEnd: true,
      backend: false
    },
  ]

  console.log(mySkills)

  const skillElements = mySkills.map((currentSkill, index) => {
    return <li key={index}>
      {
      (mySkills.frontEnd === true)?
          
         <b>currentSkill.name</b> 
        :
        currentSkill.name
      }

    </li>
  })

  const firstName = { text: 'Romel'}
  const lastName = { text: 'Powell Serrano'}

  return <>
    <h3>Hello, my name is </h3>
    <h1 style={firstStyle}>{firstName.text}</h1>
    <h1 style={lastStyle}>{lastName.text}</h1>
    <ul><h3>{skillElements}</h3></ul>
   
  </> 
}

export default App;
