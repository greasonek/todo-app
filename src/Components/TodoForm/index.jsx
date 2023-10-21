import React from 'react'
import { Typography, Button, Card } from '@mui/material'

const cardStyle = {
  width: 500,
  // height: 800,
  margin: 10,
  padding: 20,
  position: 'sticky',
};

const labelStyle = {
  margin: '10px',
  padding: '5px',
};

const inputStyle = {
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
};

const buttonLabelStyle = {
  margin: '10px',
  padding: '3px',
};

const buttonStyle = {
  width: 'auto', // To make the button full-width
};


const TodoForm = ({handleChange, handleSubmit, defaultValues}) => {
  return (
    <Card variant="outlined" style={cardStyle}>{
    <form onSubmit={handleSubmit}>

    <Typography variant="h4" gutterBottom>Add To Do Item</Typography>
    <label style={labelStyle}>
      <span>To Do Item</span>
      <input onChange={handleChange} 
      name="text" 
      type="text" 
      placeholder="Item Details"
      style={inputStyle}/>
    </label>

    <label style={labelStyle}>
      <span>Assigned To</span>
      <input 
        onChange={handleChange} 
        name="assignee" 
        type="text" 
        placeholder="Assignee Name" 
        style={inputStyle}/>
    </label>

    <label style={labelStyle}>
      <span>Difficulty</span>
      <input 
        onChange={handleChange} 
        defaultValue={defaultValues.difficulty} 
        type="range" 
        min={1} 
        max={5} 
        name="difficulty" 
        style={inputStyle}/>
    </label>

    <label style={buttonLabelStyle}>
      <Button type="submit" variant='contained' color='secondary' style={buttonStyle}>Add Item</Button>
  
    </label>
  </form>
}</Card>
  )
}

export default TodoForm