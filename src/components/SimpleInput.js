import React, { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    enteredValue: enteredName,
    enteredValueIsValid: enteredNameIsValid, 
    hasError: enteredNameIsInvalid, 
    nameInputChangeHandler, 
    nameInputBlurHandler,
    reset: enteredNameReset 
  } = useInput(name => name.trim() !== "")

  const {
    enteredValue: enteredEmail,
    enteredValueIsValid: enteredEmailValid, 
    hasError: enteredEmailInvalid, 
    nameInputChangeHandler: emailInputChangeHandler, 
    nameInputBlurHandler: emailInputBlurHandler,
    reset: enteredEmailReset 
  } = useInput(email => email.includes("@"))

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

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid || !enteredEmailValid) {
      return;
    }
    console.log(enteredName, enteredEmail);
    enteredNameReset();
    enteredEmailReset();
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

export default SimpleInput;
