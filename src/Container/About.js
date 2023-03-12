import React from 'react'
import {useContext} from 'react'
import { AppContext } from '../AppContext'
function About(props) {
  const {state}=useContext(AppContext)
  return (
    <div>
      <h1>About me {state}</h1>
    </div>
  )
}

export default About
