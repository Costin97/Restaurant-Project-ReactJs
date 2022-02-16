import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Footer.module.css'

const Footer = () => {
    return (<Fragment>
        <section className={classes.footer}>
            <NavLink to='/support' className={classes.link}><p>SUPPORT</p></NavLink>
            <NavLink to='/contact' className={classes.link}><p>CONTACT</p></NavLink>
            <NavLink to='/termsofuse' className={classes.link}><p>TERMS OF USE</p></NavLink>
        </section>
    </Fragment>)
}

export default Footer