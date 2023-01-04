import React, { useState, useRef, useEffect } from "react";

const SimpleInputNoHook = (props) => {

  

  // onchange를 통해 validation 해보자
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredNameIsInvalid = enteredNameTouched && !enteredNameIsValid;
  // submit 할때 value를 받아보자
  // const nameInputRef = useRef();

  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const enteredEmailValid = enteredEmail.includes("@")
  const enteredEmailInvalid = emailTouched && !enteredEmailValid

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailValid) {
    formIsValid = true
  }

  const nameValidClasses = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  
  const emailValidClasses = enteredEmailInvalid
    ? "form-control invalid"
    : "form-control";

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  }

  const emailInputBlurHandler = (e) => {
    setEmailTouched(true);
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEmailTouched(true);
    if (!enteredNameIsValid || !enteredEmailValid) {
      return;
    }
    console.log(enteredName, enteredEmail);
    // console.log(nameInputRef.current.value)
    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEmailTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameValidClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {/* <input type='text' id='name' ref={nameInputRef} /> */}
      </div>
      {enteredNameIsInvalid && <p className="error-text">No Empty Name.</p>}
      <div className={emailValidClasses}>
        <label htmlFor="Email">Your E-Mail</label>
        <input
          type="text"
          id="Email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
      </div>
      {enteredEmailInvalid && <p className="error-text">Please contain '@' in your email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
      
    </form>
  );
};

export default SimpleInputNoHook;
