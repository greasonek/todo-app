// import React from "react";
import { ItemContext } from '../../App';
import { useContext, useState, useMemo, useEffect } from 'react';
import { Pagination } from "@mui/material";

const TodoList = ({list, toggleComplete, incomplete}) => {
  // put all items when created in incomplete, once checked complete - remove them
const {hideCompleted, displayCount} = useContext(ItemContext);
const [count, setCount] = useState(0)
const [page, setPage] = useState(1);


const listToUse = useMemo(() => {
  if(hideCompleted) return incomplete;
  else return list;
}, [hideCompleted, incomplete, list])

  useEffect(() => {
    const totalPages = Math.floor(listToUse.length / displayCount);
    const addOne = listToUse.length % displayCount;
    setCount(addOne ? totalPages + 1 : totalPages);
  }, [displayCount, listToUse]);

  const handlePageChange = (e, ePage) => {
    setPage(ePage);
    console.log(e, ePage)
  }

  const startInd = useMemo(() => {
    return(page - 1) * displayCount;
  }, [displayCount, page]);

  const endInd = useMemo(() => {
    return(page - 1) * displayCount + displayCount;
  }, [page, displayCount]);

  return (
    <>
          {listToUse.slice(startInd, endInd).map((item) => (
              // (page - 1) * displayCount, 
              // (page - 1) * displayCount + displayCount
              // )
              // .map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
          ))}
          <Pagination count ={count} onChange={handlePageChange} />
    </>
  )
}

export default TodoList