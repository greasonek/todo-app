import React from 'react';
export const ItemContext = React.createContext(null);
import {useState} from 'react';
import Todo from './Components/Todo';

const App =() => {
    const [list, setList] = useState([
      {
        text: 'Lecture',
        assignee: 'Emily',
        difficulty: 3,
        complete: false
      },
      {
        text: 'Meeting',
        assignee: 'Jimbob',
        difficulty: 10,
        complete: false
      },
      {
        text: 'Lab',
        assignee: 'Josh',
        difficulty: 8,
        complete: false
      },
    ]);

    return (
      <ItemContext.Provider value={{list, setList}}>
        {/* <Header /> */}
        <Todo />
        {/* <Footer /> */}
      </ItemContext.Provider>
    );
};

export default App;

// import React from 'react';
// import Todo from './Components/Todo';
// import Header from './Components/Header/index';
// export const UserContext = React.createContext(null);
// import {useState} from 'react';

// //export, define, give starting value, wrap it around what you want to use it (any components)
// const App = () => {
//   const [user, setUser] = useState({name: '', address: ''});
//     return (
//       <><UserContext.Provider value={{user, setUser}}>
//         <Header />
//         <Todo />
//       </UserContext.Provider><Todo /></>
//     );
// };

// export default App;