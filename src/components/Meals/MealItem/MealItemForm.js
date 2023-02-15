import React, { useRef, useState } from "react";

import classes from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(amountInputRef.current)
        const enteredAmount = amountInputRef.current.value; // 항상 str type임을 압시다
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return
        }
        props.onAddToCart(enteredAmountNumber);
    }



    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                label="Amount"
                ref={amountInputRef}
                input={{
                    id: `amount_${props.id}`,
                    type: 'number',
                    min: '1',
                    max: '500',
                    step: '1',
                    defaultValue: '1',
            }}/>
            <button type="submit">+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
}
export default MealItemForm;