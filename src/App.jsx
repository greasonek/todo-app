import { createContext, useState, useEffect } from 'react';
import Todo from './Components/Todo';
// import { DarkModeIcon, LightModeIcon } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import { darkMode } from './Components/Theme/dark-mode';
import {lightMode} from './Components/Theme/light-mode';
import CssBaseline from '@mui/material/CssBaseline';
// import { ReactDOM } from 'react-dom/client';
// import { BrowserRouter as Router, Routes } from 'react-router-dom';
// import SettingsForm from './Components/SettingsForm';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route exact path='/' element={<App/>} />
//         <Route path='/settings' element={<SettingsForm/>} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// )

export const ItemContext = createContext(null);

const App =() => {

  const[appTheme, setTheme] = useState('light');

  const[displayCount, setCount] = useState(3);

  const[showHide, setShowHide] = useState('show');

  const[sortKeyword, setSortKeyWord] = useState('');

  useEffect(()=> {
    const mode = localStorage.getItem('theme');
    setTheme(mode);
    
    const perPage = localStorage.getItem('itemCount');
    setCount(perPage);
    
    const cleanUp = localStorage.getItem('choice');
    setShowHide(cleanUp);

    const search = localStorage.getItem('sort');
    setSortKeyWord(search);
  }, [])


    return (
      <ItemContext.Provider 
      value={{
        defaultCount: displayCount, 
        hideCompleted: false, 
        sortWord: 'difficulty', 

        toggleTheme: () => 
          setTheme(appTheme === 'light' ? 'dark' : 'light'),
        appTheme,

        changeCount: (number) => 
          setCount(number),

        toggleShowHide: () => 
          setShowHide(!showHide ),
        showHide,

        changeSortWord: () => 
          setSortKeyWord(sortKeyword),
      }}>
        <ThemeProvider theme={appTheme === 'light' ? lightMode : darkMode}>
          <CssBaseline/>
          <Todo />
        </ThemeProvider>


      </ItemContext.Provider>
    );
};

export default App;
