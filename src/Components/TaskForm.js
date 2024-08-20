import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "../layout/TaskForm.css"
function TaskForm({add}) {

  const [name,setName]= useState('')
  const [descrip, setDesciption]= useState('')
  const navigate=useNavigate()
  const AddTask=()=>{

    add(name,descrip)
    navigate('/')
    console.log(name,descrip)
  }
  return (

    <div className='form-css'>
      <form onSubmit={AddTask}>
      <label>Name</label>
      <input onChange={(e)=>setName(e.target.value)}/>
      <label>Description</label>
      <input onChange={(e)=>setDesciption(e.target.value)}/>
      <button type='submit' className='button-form'>Save</button>
      <Link to={'/'}><button>Return</button></Link>
      </form>
    </div>
  )
}

export default TaskForm
