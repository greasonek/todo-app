import React from 'react'
import { Typography, Button } from '@mui/material'

const TodoForm = ({handleChange, handleSubmit, defaultValues}) => {
  return (
    <form onSubmit={handleSubmit}>

    <Typography variant="h3" gutterBottom>Add To Do Item</Typography>

    <label>
      <span>To Do Item</span>
      <input onChange={handleChange} 
      name="text" 
      type="text" 
      placeholder="Item Details" />
    </label>

    <label>
      <span>Assigned To</span>
      <input 
        onChange={handleChange} 
        name="assignee" 
        type="text" 
        placeholder="Assignee Name" />
    </label>

    <label>
      <span>Difficulty</span>
      <input 
        onChange={handleChange} 
        defaultValue={defaultValues.difficulty} 
        type="range" 
        min={1} 
        max={5} 
        name="difficulty" />
    </label>

    <label>
      <Button type="submit" variant='contained' color='success'>Add Item</Button>
  
    </label>
  </form>
  )
}

export default TodoForm