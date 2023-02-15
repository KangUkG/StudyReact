import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input'
import AuthContext from '../../store/auth-context';


const emailReducer = (state, action) => {
  if (action.type === "INPUT_USER") {
    return { value: action.val, isValid: action.val.includes('@')}
  } else if (action.type === "INPUT_CHECK") {
    return { value: state.value, isValid:state.value.includes('@') }
  }
}

const passwordReducer = (state, action) => {
  if (action.type === 'INPUT_USER') {
    return { value: action.val, isValid: action.val.trim().length > 6}
  } else if (action.type === 'INPUT_CHECK') {
    return { value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value: '', isValid: false}
}

const Login = (props) => {

  const emailRef = useRef()
  const passRef = useRef()
  const ctx = useContext(AuthContext)
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false
  })

  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: false
  })

  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   console.log('EFFECT RUNNING');

  //   return () => {
  //     console.log('EFFECT CLEANUP');
  //   };
  // }, []);

  const { isValid: emailValid } = emailState
  const { isValid: passValid } = passwordState

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailValid && passValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailValid, passValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: "INPUT_USER", val: event.target.value})
    console.log(emailState.value)

    // setFormIsValid(
    //   emailState.value.includes('@') && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: "INPUT_USER", val: event.target.value})

    // setFormIsValid(
    //   emailState.value.includes('@') && passwordState.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({type: "INPUT_CHECK"})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_CHECK"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailState.isValid) {
      emailRef.current.focus();
    } else {
      passRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          isValid={emailState.isValid}
          id='email'
          content='E-Mail'
          type='text'
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passRef}
          isValid={passwordState.isValid}
          id='password'
          content='Password'
          type='password'
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

{/* <div
className={`${classes.control} ${
  emailState.isValid === false ? classes.invalid : ''
}`}
>
<label htmlFor="email">E-Mail</label>
<input
  type="email"
  id="email"
  value={emailState.value}
  onChange={emailChangeHandler}
  onBlur={validateEmailHandler}
/>
</div>
<div
className={`${classes.control} ${
  passwordState.isValid === false ? classes.invalid : ''
}`}
>
<label htmlFor="password">Password</label>
<input
  type="password"
  id="password"
  value={passwordState.value}
  onChange={passwordChangeHandler}
  onBlur={validatePasswordHandler}
/>
</div> */}