import { useContext, useState } from 'react';
// import {When} from 'react-if';
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

  const headerContainerStyle = {
    display: 'flex',
    background: '#263238',
    color: '#eceff1',
    margin: '0px',
    alignItems: 'center',
    padding: '10px',
    top: 0,
    left: 0,
    right: 0,
  };

  const linkStyle = {
    textDecoration: 'none',
    background: '#eceff1',
    margin: 5,
    color: '#263238'
  };

  const labelStyle = {
    margin: '15px',
    padding: '10px',
  };

    return (
      <>
      {context.loggedIn &&
      <div>
        <Button onClick={context.logout} variant='contained' color='error'>Log Out</Button>
      </div> }

      {/* <When condition={context.loggedIn}>
          <Button onClick={context.logout} variant='contained' color='error'>Log Out</Button>
        </When>
       */}
      <header style={headerContainerStyle}>
        {!context.loggedIn &&
           <form onSubmit={handleSubmit}>
           <input
             style={labelStyle}
             placeholder="UserName"
             name="username"
             onChange={handleChange}
           />
          <input
            style={labelStyle}
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button >Login</button>
        </form>  
        }
      </header>
    </>
    );
};

export default Login;
        {/* <When condition={!context.loggedIn}>
          <form onSubmit={handleSubmit}>
            <input
              style={labelStyle}
              placeholder="UserName"
              name="username"
              onChange={handleChange}
            />
            <input
              style={labelStyle}
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          <button >Login</button>            
          {/* <Button style={linkStyle}>Login</Button> */}
          {/* </form> */}
        
