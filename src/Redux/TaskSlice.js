import { createSlice } from "@reduxjs/toolkit";


const  TaskSlice=createSlice({
    name:'TaskTracker',
    initialState:{
        tasks:[],
        
        filter:'none',
        
    },
    reducers :{
        addTask:(state,action)=>{
            state.tasks.push(action.payload)
        },
        
        toggleReminder:(state,action)=>{
            state.tasks.map ( el => {
                if( el.title === action.payload) {
                  return el.reminder=!el.reminder 
                }
                return el.reminder;
              })
        },
        setFilter:(state,action)=>{
            state.filter=action.payload;
        }
        ,
        deleteTask:(state,action)=>{
            state.tasks=state.tasks.filter(el=>el.title!==action.payload)
        }
        
        
    }
})

export default TaskSlice.reducer
export const {addTask,toggleReminder,setFilter,deleteTask}=TaskSlice.actions