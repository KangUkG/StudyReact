import React from "react";
import { Link, NavLink } from "react-router-dom";

import classes from './MainHeader.module.css';


const MainHeader = () => {

    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    {/* link 를 devTools에서 보면 a태그에 href로 렌더링 된다. 
                    다른점은 a태그는 새로고침이 된다.
                     이건 새로고침이 안된다. = router 를 동작시킨다. */}
                    <li>
                        <Link to='/welcome'>Welcome</Link>
                    </li>
                    <li>
                     {/* A <NavLink> is a special kind of <Link> that knows whether or not it is "active".
                     active 여부 기능을 추가한게 바로 NavLink. */}   
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <NavLink to='products' activeClassName={classes.active}>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainHeader;