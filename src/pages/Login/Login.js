import React, { useState, useEffect } from "react";
import "./Login.styles.scss";
import Input from "../../components/Input/Input";
import CustomButton from "../../components/CustomButton/CustomButton";

import { login, authenticate, logout } from "../../redux/auth/auth.actions";

import { useDispatch } from "react-redux";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const loginHandler = async () => {
    setWarning(null);
    setIsLoading(true);
    try {
      await dispatch(login(email, password, "test"));
    } catch (err) {
      setWarning("Please check your email and password");
      setIsLoading(false);
      console.log(err);
      return;
    }

    props.history.push(`/`);
  };

  useEffect(() => {
    const tryLogin = async () => {
      const userData = localStorage.getItem("userData");

      if (!userData) {
        dispatch(logout());

        return;
      }
      const transformedData = await JSON.parse(userData);
      const { userName, userId, token } = transformedData;

      dispatch(authenticate(userName, userId, token));
    };

    tryLogin();
  }, [dispatch]);

  // let onSubmitForm = (email, password, device_name) => {
  //   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //   if (re.test(email)) {
  //     dispatch(login(email, password, device_name));
  //     props.history.push(`/`);
  //   } else {
  //     setWarning('Please check your email and password');
  //   }
  // };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setWarning("");
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='content-container column'>
      <h2>Please Log In</h2>
      <div>
        <Input
          inputtype='input'
          type='email'
          name='email'
          label='Username: '
          value={email}
          onChange={(e) => onEmailChange(e)}
          warning={warning}
        />
        <Input
          inputtype='input'
          type='password'
          name='password'
          label='Password: '
          value={password}
          onChange={(e) => onPasswordChange(e)}
        />
      </div>
      <div className='warning-message'>{warning}</div>
      <div className='navbuttons'>
        {/* <CustomButton onClick={() => onSubmitForm(email)}>Log In</CustomButton> */}
        <div className='spinner-container'></div>

        <CustomButton onClick={loginHandler} buttonLoader={isLoading}>
          Log In
        </CustomButton>
      </div>
    </div>
  );
};

export default Login;
