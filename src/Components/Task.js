import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { toggleReminder,deleteTask } from '../Redux/TaskSlice'
import { useDispatch } from "react-redux"

const Task = ({task, onDelete, onToggle }) => {

    let dispatch=useDispatch()

  return (
<div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={()=>dispatch(toggleReminder(task.title))}
    >
      <h3>
        {task.title}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => dispatch(deleteTask(task.title))}
        />
      </h3>
      <p>{task.day}</p>
    </div>  )
}

export default Task