import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { setFilter } from '../Redux/TaskSlice'
import { useSelector } from "react-redux/es/exports";


const Filter = () => {

    let filterBy=useSelector(state=>state.Task.filter)

    let color=filterBy=="none"?"black":filterBy=="done"?"green":"red"
    let dispatch=useDispatch()

    const toggle=()=>{
        if(filterBy=="none")
        {
            filterBy="done"
            
        }
        else if(filterBy=="done")
        {
            filterBy="undone"
        }
        else{
            filterBy="none"
        }
        dispatch(setFilter(filterBy))
    }
  return (
    <button className="btn" style={{backgroundColor:color}} onClick={toggle} >{filterBy}</button>
    )
}

export default Filter