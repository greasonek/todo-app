import { Typography, Button } from "@mui/material";
import  LightModeIcon from "@mui/icons-material/LightMode";
import  DarkModeIcon from "@mui/icons-material/DarkMode";
import { ItemContext } from '../../App/';
import { useContext } from 'react';
import { Link } from "react-router-dom";


const Header = ({incomplete}) => {
  const {toggleTheme, appTheme} = useContext(ItemContext);

  const handleThemeClick = () => {
    localStorage.setItem('theme', appTheme === 'light' ? 'dark' : 'light')
    toggleTheme();
  };

  return (
    <>
        
        <Link to={'/'}>
        <Typography variant="h5" gutterBottom style={{margin:10}}>Home</Typography>
        </Link>
        
        <Link to={'/settings'}>
        <Typography variant="h5" gutterBottom style={{margin:10}}>Settings</Typography>
        </Link>

        <Button onClick={handleThemeClick}>
          {appTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>
      <header
        data-testid="todo-header"
        style={{ display: 'flex', justifyContent: 'space-between', background: '#263238', color: '#eceff1', margin: 20 }}>
        <Typography variant="h2" gutterBottom data-testid="todo-h3">To Do List: {incomplete.length} items pending</Typography>

      </header>
   
    </>
  );
};

export default Header;