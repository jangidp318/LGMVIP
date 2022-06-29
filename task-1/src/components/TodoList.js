import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo'

export default function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTask = task =>{
        if(!task.text){
            return
        }

        const newTodos = [task, ...todos];
        setTodos(newTodos);
    }

    const removeTask = id =>{
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)
    }

    const completeTask = id =>{
        let updatedTasks = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }


    return (
        <div>
            <TodoForm addTask={addTask} />
            <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
        </div>
    )
}
