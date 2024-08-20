import React from 'react'
import TaskItem from './TaskItem'

function TaskList() {

  const data= JSON.parse(localStorage.getItem('data'))
 



 

  return (
    <div>
      {data.map((el, index)=> <TaskItem element={el} index={index}/>)}
    
     
    </div>
  )
}

export default TaskList
