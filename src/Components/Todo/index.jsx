import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
// import { ItemContext } from '../../App';
import { v4 as uuid } from 'uuid';
import TodoList from '../List';
import Header from "../Header";
import TodoForm from "../TodoForm";
import starterData from './starterData.json';
// import {Button, Typography, Pagination} from '@mui/material';


const Todo = () => {
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState(starterData)

  const [incomplete, setIncomplete] = useState([]);
  // const [showCompleted, setShowCompleted] = useState(true);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( (item) => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });
    const newIncomplete = items.filter((it) => !it.complete)
    setIncomplete(newIncomplete);
    setList(items);

  }

  useEffect(() => {

    let incompleteCount = list.filter((item) => !item.complete);
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete.length}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);  

  return (
    <>
      <Header incomplete = {incomplete}/> 
  
      <TodoForm 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        defaultValues={defaultValues}
        deleteItem={deleteItem}
      />

      <TodoList 
        list={list} 
        toggleComplete={toggleComplete} 
        incomplete = {incomplete}
      />

    </>
  );
};

export default Todo;