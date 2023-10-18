import { useContext, useState } from 'react'
import { Button, FormControlLabel, Switch, Typography, Card } from "@mui/material";
import { ItemContext } from '../../App';
import { Link } from "react-router-dom";


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

  return (
    <Card variant="outlined" style={{width: 500, height: 300, margin: 50, padding: 10}}>
      <Link to={'/'}>
        <Typography variant="h5" gutterBottom>Home</Typography>
      </Link>
    <form>

        
    <label>
      <span>Items Per Page</span>
      <input 
        value={inputValue}
        onChange={handleChange}
        type='number'
        placeholder={1}/>
    </label>
    <label>
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

    <FormControlLabel value={showHide} control={<Switch defaultChecked />} label ='Hide Completed To Dos' onChange={handleToggleShowHide}>
          {/* {showHide === 'show' ? 'hide' : 'show'} */}
    </FormControlLabel>

    </form>
    </Card>
  )
}

export default SettingsForm