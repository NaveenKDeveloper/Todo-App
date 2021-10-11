import React,{useState} from 'react'
import Form from './Form'

function List() {

    const [todos,setTodos]=useState([])

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo,...todos]

        setTodos(newTodos)
        
    }
    return (
        <div>
            <h1>whats the plan</h1>
           <Form onSubmit={addTodo}/> 
        </div>
    )
}

export default List
