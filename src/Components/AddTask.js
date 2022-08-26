import React from 'react'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from '../Redux/TaskSlice'

const AddTask = () => {
    const [newTask,setTask]=useState({})
    const onChange=(e)=>{setTask({...newTask,[e.target.name]:e.target.value})}

    let dispatch=useDispatch()

  return (
    <div className="add-form"  >
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' name='title'
             onChange={onChange} />
        </div>

        <div className='form-control'>
            <label>Day and Time</label>
            <input type='text' placeholder='Add date' name='day'
             onChange={onChange}/>
        </div>

        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' name='reminder'
              onChange={(e) => setTask({...newTask,[e.target.name]:e.currentTarget.checked})}/>
        </div>
        <button className='btn btn-block' onClick={()=>{dispatch(addTask(newTask))}} >Save Task</button>
    </div>  )
}

export default AddTask