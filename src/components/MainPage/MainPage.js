import { Fragment } from "react"
import classes from './MainPage.module.css'
import image from './caption.jpg'
import { NavLink } from "react-router-dom"
import Header from "../UI/Header"
import Footer from "../UI/Footer"

const MainPage = () => {
    const isMainPage = true;
    return (
        <Fragment>
            <div className={classes.mainBk}>
                <Header isTrue={isMainPage} />
                <div className={classes.imgBox}>
                    <img src={image} className={classes.img} alt='ceva'></img>
                </div>
                <div className={classes.menu}>
                    <section className={classes.menuBox}>
                        <h1 className={classes.menuTitle}>Day's Menu</h1>
                        <p className={classes.menuPara}>From Monday to Friday between 10 am and 6 pm,choose a complete menu and enjoy the flavor.</p>
                        <NavLink to='/menu' className={classes.buttonLink}>
                            <button className={classes.menuButton}>MENU</button>
                        </NavLink>
                    </section>
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}

export default MainPage;