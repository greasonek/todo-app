import { ItemContext } from '../../App';
import { useContext, useState, useMemo, useEffect } from 'react';
import { Pagination, Card, Button } from "@mui/material";
import Auth from '../Auth/auth';

const TodoList = ({list, toggleComplete, incomplete, deleteItem}) => {
const {showHide, defaultCount} = useContext(ItemContext);
const [count, setCount] = useState(0)
const [page, setPage] = useState(1);


const listToUse = useMemo(() => {
  if(showHide) return incomplete;
  else return list;
}, [showHide, incomplete, list])

  useEffect(() => {
    const totalPages = Math.floor(listToUse.length / defaultCount);
    const addOne = listToUse.length % defaultCount;
    setCount(addOne ? totalPages + 1 : totalPages);
  }, [defaultCount, listToUse]);

  const handlePageChange = (e, ePage) => {
    setPage(ePage);
    console.log(e, ePage)
  }

  const startInd = useMemo(() => {
    return(page - 1) * defaultCount;
  }, [defaultCount, page]);

  const endInd = useMemo(() => {
    return(page - 1) * defaultCount + defaultCount;
  }, [page, defaultCount]);

  return (
    <>
    <Card variant="outlined"  
      style={{
        width: 500,
        margin: 10,
        marginTop: 10,
        padding: 10,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', 
        borderRadius: '8px', 
      }}>
        
      {listToUse.slice(startInd, endInd).map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <Auth capability={'update'}>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          </Auth>
          <Auth capability={'delete'}>
          <Button variant='contained' onClick={() => deleteItem(item.id)}>Delete</Button>
          </Auth>
          <hr />
        </div>
          ))}
          <Pagination count ={count} onChange={handlePageChange} style={{margin: 10, padding: 10}} />
    </Card>
    </>
  )
}

export default TodoList