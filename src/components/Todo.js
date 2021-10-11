import React,{useState} from 'react'
import Form from './Form'

function Todo() {

    const [edit,setEdit]=useState({
        id:null,
        value: ''
    })
    return todos.map((todo,index) =>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={}
        </div> )
    
        
    )
}

export default Todo
