import { useContext, useState } from 'react'
import { Button, FormControlLabel, Switch } from "@mui/material";
import { ItemContext } from '../../App';


const SettingsForm = () => {
  const {changeCount, displayCount} = useContext(ItemContext);
  const [inputValue, setInputValue] = useState(displayCount);

  const {toggleShowHide, showHide} = useContext(ItemContext);
  const [showChoice, setShowChoice] = useState(false);

  const {changeSortWord, sortKeyWord} = useContext(ItemContext);

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
    <form>
    {/* <Typography variant="h5" gutterBottom>Update Settings</Typography> */}

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
    
  )
}

export default SettingsForm