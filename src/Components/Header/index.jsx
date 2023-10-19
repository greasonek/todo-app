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

  const headerContainerStyle = {
    display: 'flex',
    // justifyContent: 'space-between',
    background: '#263238',
    color: '#eceff1',
    margin: '20px',
    alignItems: 'center', // Align items vertically
    padding: '10px',
    // position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    margin: 5,
    color: '#eceff1'
  };

  return (
    <>
      <header
        data-testid="todo-header"
        style={headerContainerStyle}>
        <Link to={'/'} style={linkStyle}>
        <Typography variant="h5" gutterBottom style={linkStyle}>Home</Typography>
        </Link>
        
        <Link to={'/settings'} style={linkStyle}>
        <Typography variant="h5" gutterBottom style={linkStyle}>Settings</Typography>
        </Link>

        <Button onClick={handleThemeClick}>
          {appTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>


      </header>
        <Typography 
          variant="h4" 
          gutterBottom 
          data-testid="todo-h3" 
          style={{
            margin: 20, 
            background:'#263238', 
            color: '#eceff1', 
            padding: 8 
          }}>To Do List: {incomplete.length} items pending
        </Typography>
   
    </>
  );
};

export default Header;