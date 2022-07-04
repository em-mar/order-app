import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from 'react';
import mealsImage from "../../assets/meal-top2.jpg";
import classes from "./Header.module.css";



function Header(props) {
    return (
        <Fragment>
           <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onClickCart} />
           </header> 
           <div className={classes['main-image']}>
            <img src={mealsImage} alt="Delicious foods"/>
           </div>
        </Fragment>
    )
}
export default Header;