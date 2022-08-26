import React from 'react'
import { useState } from "react"
import AddTask from "./AddTask"
const Header = () => {
    const [toggleAdd,setToggle]=useState(false)
    let color=toggleAdd?'red':'rgb(37, 181, 37)'
    let text=toggleAdd?'CLOSE':'ADD';

  return (
    <>
    <header className='header'>  
        <h1>Task Tracker</h1>

        <button className="btn" style={{backgroundColor:color}} onClick={()=>setToggle(!toggleAdd)} >{text}</button>
        
    </header>
    {
            toggleAdd && <AddTask></AddTask>
        }
    </>
  )
}

export default Header