import React,{useState} from 'react'

function Form(props) {
    const [input,setInput]=useState('')

    const handleChange= e=>{
        setInput(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault()

        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        })

        setInput('')
 
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Add a todo' value={input}
            name='text' onChange={handleChange} className='todo-input'/>
            <button className='button'>Add</button>
        </form>
    )
}

export default Form
