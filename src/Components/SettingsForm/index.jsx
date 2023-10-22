import { useContext, useState } from 'react'
import { Button, FormControlLabel, Switch, Typography, Card } from "@mui/material";
import { ItemContext } from '../../App';
import { Link } from "react-router-dom";
import Auth from '../Auth/auth';


const SettingsForm = () => {
  const {changeCount, displayCount, toggleShowHide, showHide, changeSortWord, sortKeyWord} = useContext(ItemContext);
  const [inputValue, setInputValue] = useState(displayCount);
  const [showChoice, setShowChoice] = useState(false);

const handleDisplayCountChange = () => {
  localStorage.setItem('itemCount', inputValue)
  changeCount(inputValue);
}

const handleToggleShowHide = () => {
  localStorage.setItem('choice', !showHide)
  toggleShowHide(showChoice);
}

const handleSortWordChange = () => {
  localStorage.setItem('sort', inputValue)
  changeSortWord(inputValue);
}

const handleChange =(e) => {
  setInputValue(parseInt(e.target.value));
  setShowChoice(e.target.value);
}

const cardStyle = {
  width: '100%', // Adjust the width as needed
  padding: '20px',
  marginBottom: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const labelStyle = {
  margin: '10px 0',
};

const inputStyle = {
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  marginTop: '10px',
};

const switchStyle = {
  marginTop: '10px',
};


  return (
    <Auth>
    <Card variant="outlined" style={cardStyle}>
      <Link to={'/'} style={linkStyle}>
        <Typography variant="h5" gutterBottom>Home</Typography>
      </Link>

    <form style={formStyle}>   
    <label style={labelStyle}>
      <span>Items Per Page</span>
      <input 
        value={inputValue}
        onChange={handleChange}
        type='number'
        placeholder={1}/>
    </label>
    <label style={labelStyle}>
      <span>Sort Keyword</span>
      <input
        onChange={handleSortWordChange}
        type='text'
        placeholder='difficulty'
      />
    </label>
    <Button color='secondary' variant='contained' onClick={handleDisplayCountChange}>
      Show New Settings
    </Button>

    <FormControlLabel value={showHide} control={<Switch defaultChecked />} label ='Hide Completed To Dos' onChange={handleToggleShowHide} style={switchStyle}>
          {/* {showHide === 'show' ? 'hide' : 'show'} */}
    </FormControlLabel>
    </form>
    </Card>
    </Auth>
  )
}

export default SettingsForm