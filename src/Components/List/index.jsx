import { ItemContext } from '../../App';
import { useContext, useState, useMemo, useEffect } from 'react';
import { Pagination, Card } from "@mui/material";

const TodoList = ({list, toggleComplete, incomplete}) => {
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
    <Card variant="outlined" style={{width: 500, height: 900, margin: 50, padding: 10}}>
      {listToUse.slice(startInd, endInd).map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
          ))}
    </Card>
          <Pagination count ={count} onChange={handlePageChange} style={{margin: 10, padding: 10}} />
    </>
  )
}

export default TodoList