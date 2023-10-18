import React from 'react'
import { Typography, Button, Card } from '@mui/material'

const TodoForm = ({handleChange, handleSubmit, defaultValues}) => {
  return (
    <Card variant="outlined" style={{width: 500, height: 300, margin: 50, padding: 10}}>{
    <form onSubmit={handleSubmit}>

    <Typography variant="h4" gutterBottom>Add To Do Item</Typography>
    <label>
      <span style={{margin: 10, padding: 3}}>To Do Item</span>
      <input onChange={handleChange} 
      name="text" 
      type="text" 
      placeholder="Item Details" />
    </label>

    <label>
      <span style={{margin: 10, padding: 3}}>Assigned To</span>
      <input 
        onChange={handleChange} 
        name="assignee" 
        type="text" 
        placeholder="Assignee Name" />
    </label>

    <label>
      <span style={{margin: 10, padding: 3}}>Difficulty</span>
      <input 
        onChange={handleChange} 
        defaultValue={defaultValues.difficulty} 
        type="range" 
        min={1} 
        max={5} 
        name="difficulty" />
    </label>

    <label>
      <Button type="submit" variant='contained' color='secondary' style={{margin: 10, padding: 3}}>Add Item</Button>
  
    </label>
  </form>
}</Card>
  )
}

export default TodoForm