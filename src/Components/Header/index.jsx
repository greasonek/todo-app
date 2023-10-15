// import LoginButton from '../LoginButton';
import { Typography, Button } from "@mui/material";
import  LightModeIcon from "@mui/icons-material/LightMode";
import  DarkModeIcon from "@mui/icons-material/DarkMode";
import { ItemContext } from '../../App/';
import { useContext } from 'react';
import SettingsForm from "../SettingsForm";
import useForm from "../../hooks/form";
import TodoForm from "../TodoForm";


const Header = ({incomplete}) => {
  const {toggleTheme, appTheme} = useContext(ItemContext);

  const handleThemeClick = () => {
    localStorage.setItem('theme', appTheme === 'light' ? 'dark' : 'light')
    toggleTheme();
  };

  return (
    <>
      <header
        data-testid="todo-header"
        style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h2" gutterBottom data-testid="todo-h3">To Do List: {incomplete.length} items pending</Typography>
        
        <Button onClick={TodoForm}>
        <Typography variant="h5" gutterBottom>Home</Typography>
        </Button>
        
        <Button onClick={SettingsForm}>
        <Typography variant="h5" gutterBottom>Settings</Typography>
        </Button>

        <Button onClick={handleThemeClick}>
          {appTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>


        {<SettingsForm/>}
      </header>
      
      {/* <SettingsForm 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      /> */}
    
    </>
  );
};

export default Header;