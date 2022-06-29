import React from 'react';
import {TiTick} from 'react-icons/ti';
import {ImBin} from 'react-icons/im'

export default function Todo({todos, completeTask, removeTask}) {
  return (todos.map((todo,index)=>(
      <div className={todo.isComplete ? 'complete task-div': 'task-div'} key = {index}>
          <div className='task-text'>{todo.text}</div>
          <div className='icons' key={todo.id}>
            <TiTick className={todo.isComplete ? 'hide':'tick'} onClick = {()=>{completeTask(todo.id)}}></TiTick>
            <ImBin className='cross' onClick={()=>{removeTask(todo.id)}}></ImBin>
        </div>
      </div>
  )))
}
