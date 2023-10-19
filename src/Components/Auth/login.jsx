import { useContext, useState } from 'react';
import {When} from 'react-if';
import { Button } from "@mui/material";
import Header from '../Header/index.jsx';

import { LoginContext } from './context.jsx';

const Login = () => {
  const context = useContext(LoginContext);
  const [ state, setState ] = useState({ username: '', password: '' })

  const handleChange = e => {
    setState({...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    context.login(state.username, state.password);
  };

    return (
      <>
  
        <When condition={context.loggedIn}>
          <Button onClick={context.logout} variant='contained' color='error'>Log Out</Button>
        </When>
    

        <When condition={!context.loggedIn}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <button>Login</button>
          </form>
        </When>
      </>
    );
}

export default Login;