import React from 'react'

import mealsIamge from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {

    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsIamge} alt="A table"/>
                {/* <img src="https://github.com/...url입력해"/> */}
            </div>
        </>
    );
}
export default Header;