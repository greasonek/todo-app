import Todo from './Components/Todo';
import SettingsForm from './Components/SettingsForm';
import { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkMode } from './Components/Theme/dark-mode';
import {lightMode} from './Components/Theme/light-mode';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Auth from './Components/Auth/auth';
import Login from './Components/Auth/login';
import LoginContext from './Components/Auth/context';
import TodoForm from './Components/TodoForm';
import AccessDenied from './Components/AccessDenied';


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

            <LoginContext>
              <Login />
              
              <Auth>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Todo/>}/>
                  <Route path='/settings' element={<AccessDenied/>}/>
                </Routes>
              </BrowserRouter>
              </Auth>

              <Auth capability="create">
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Todo/>}/>
                  <Route path = '/settings' element={<AccessDenied/>}/>
                </Routes>
              </BrowserRouter>
              </Auth>
          
              <Auth capability="update">
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Todo/>}/>
                  <Route path = '/settings' element={<SettingsForm/>}/>
                </Routes>
              </BrowserRouter>
              </Auth>

              <Auth capability="delete">
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Todo/>}/>
                  <Route path = '/settings' element={<SettingsForm/>}/>
                </Routes>
              </BrowserRouter>
              </Auth>

          </LoginContext>
        </ThemeProvider>
      </ItemContext.Provider>
    );
  };

export default App;
