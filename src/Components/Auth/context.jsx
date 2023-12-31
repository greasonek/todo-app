import React, { useCallback, useEffect, useState } from "react";
import cookie from "react-cookies";
import jwt_decode from "jwt-decode";
import axios from "axios";

const capabilities = {
  'Administrator': ['create', 'update', 'delete'],
  'Editor': ['create', 'udpate'],
  'Writer': ['create'],
  'User': [],
}

export const LoginContext = React.createContext();

const LoginProvider = (props) => {
  const [state, setState] = useState({
    loggedIn: false,
    user: { capabilities: [] },
    error: null,
  });

  const can = (capability) => {
    return state?.user?.capabilities?.includes(capability);
  };

  const validateToken = useCallback((token) => {
    try {
      let validUser = jwt_decode(token);
      validUser.capabilities = capabilities[validUser.username];
      setLoginState(true, token, validUser);
    } catch (e) {
      setLoginState(false, null, {}, e);
      console.log("Token Validation Error", e);
    }
  }, []);

  const setLoginState = (loggedIn, token, user, error) => {
    cookie.save("auth", token);
    setState({ token, loggedIn, user, error: error || null });
  };

  const logout = () => {
    setLoginState(false, null, {});
  };

  const login = async (username, password) => {
    let { loggedIn, token, user } = state;

    const config = {
      baseURL: 'https://bearer-auth-lab34.onrender.com',
      url: '/signin',
      method: 'post',
      auth: { username, password }
    }

    const response = await axios(config);
    console.log(response);

    const auth = response.data.user;
    // let auth = testUsers[username];

    if (auth && auth.username === username) {
      try {
        validateToken(auth.token);
      } catch (e) {
        setLoginState(loggedIn, token, user, e);
        console.error(e);
      }
    }
  };

  // const signup = async (username, password) => {
  //   const config = {
  //     baseURL:'https://bearer-auth-lab34.onrender.com',
  //     url: '/signup',
  //     method: 'post',
  //     auth: { username, password }
  //   }
  //   const response = await axios(config);
  //   console.log(response);

    // const newUser = { username, capabilities: capabilities['User']};

    // setState((prevState) => ({
    //   ...prevState,
    //   user: newUser,
    // }));
  // }

  useEffect(() => {
    if (state.user.name) return;
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load("auth");
    const token = qs.get("token") || cookieToken || null;
    validateToken(token);
  }, [state.user.name, validateToken]);


  return (
    <LoginContext.Provider value={{ ...state, can: can, login: login, logout: logout }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;