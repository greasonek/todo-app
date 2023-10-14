import React, { createContext } from 'react';
import Todo from './Components/Todo';
export const ItemContext = createContext(null);

const App =() => {

    return (
      <ItemContext.Provider value={{displayCount: 3, hideCompleted: false, sortWord: 'difficulty'}}>

      <Todo />
     
      </ItemContext.Provider>
    );
};

export default App;
