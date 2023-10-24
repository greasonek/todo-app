import { useContext, useState } from 'react';
// import {When} from 'react-if';
import { Button } from "@mui/material";
import Header from '../Header/index.jsx';
import axios from 'axios';

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

  const signup = async (e) => {
    e.preventDefault();
    const config = {
      baseURL:'https://bearer-auth-lab34.onrender.com',
      url: '/signup',
      method: 'post',
      data: state,
    }
    try {
      const response = await axios(config);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

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

  const buttonStyle = {
    margin: '3px', 
    backgroundColor: '#eceff1',
    color: '#263238',
    padding:'5px' 
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
          <div>
          <Button style={buttonStyle} type='submit'>Login</Button>
          <Button style={buttonStyle} onClick={signup} type='button'>Sign Up</Button>
          </div>
        </form>  
        }
      </header>
    </>
    );
};

export default Login;

