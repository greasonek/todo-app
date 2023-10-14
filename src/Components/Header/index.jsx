// import {ItemContext} from './App';
// import LoginButton from '../LoginButton';
// import { useContext } from 'react';
import { Typography } from "@mui/material";

const Header = (incomplete) => {
  // const user = useContext(ItemContext);
  return (
    <header data-testid="todo-header">
    <Typography variant="h2" gutterBottom data-testid="todo-h3">To Do List: {incomplete.length} items pending</Typography>
  </header>
  );
};

export default Header;