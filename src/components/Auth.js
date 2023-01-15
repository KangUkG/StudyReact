import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import classes from './Auth.module.css';

const Auth = () => {

  const dispatch = useDispatch();
  const emailRef = useRef();
  const passRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    // validation 로직 이후 로그인
    console.log(`email : ${emailRef.current.value}\npassword: ${passRef.current.value}`)
    // auth 상태변경
    dispatch(authActions.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passRef}/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
