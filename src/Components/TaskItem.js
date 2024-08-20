import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdAutoDelete } from 'react-icons/md'
import  "../layout/taskItem.css"
import {  Link } from 'react-router-dom'
function TaskItem({element, index}) {
  const[ischecked, setIschecked]= useState()
  const checkboxchange=(e)=>{
    setIschecked(e.target.checked)
  }


  const deleteTask=()=>{

    const data= JSON.parse(localStorage.getItem('data'))
    console.log(data)
    
    const deletedData = data.filter((_, indexelementtab) => indexelementtab !== index);
    
    localStorage.setItem('data', JSON.stringify(deletedData))
    console.log(deletedData)
    window.location.reload();

  }
  return (
    <div className='css-item'>
      <h3>Name:{element.name}</h3>
      <p>Description:{element.Description}</p>
      <input type='checkbox'
      onChange={checkboxchange}/>
      {ischecked ? <p className='check'>Completed</p>: null}
      <Link to={`/edit/${index}`}><CiEdit /></Link>
      <MdAutoDelete onClick={deleteTask}/>
    </div>
  )
}

export default TaskItem
