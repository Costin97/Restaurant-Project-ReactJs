import classes from './Header.module.css';
import { Fragment } from "react";
import { NavLink } from "react-router-dom"


const Header = (props) => {
    return (
        <Fragment>
            <section className={classes.header}>
                <NavLink to='/home' className={classes.link}>
                    <h1 className={classes.headerTitle}>Rsc's Restaurant</h1>
                </NavLink>
                {!props.isTrue && <button className={classes.button} onClick={props.cart}>CART {props.number}</button>}
            </section>
        </Fragment>
    )
}

export default Header;