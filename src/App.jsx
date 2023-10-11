import React from 'react';

import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <Todo />
    );
  }
}


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