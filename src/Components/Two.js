import React,{useContext} from 'react'
import { AppContext } from '../AppContext'

function Two(props) {
    const {state}=useContext(AppContext)
  return (
    <div>
      <h1>Layer Two {state} </h1>
    </div>
  )
}

export default Two
