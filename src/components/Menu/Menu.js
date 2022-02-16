import { Fragment, useState } from "react";
import { Prompt } from 'react-router-dom'
import classes from './Menu.module.css';
import menu from './menu.jpg';
import meniu1 from './meniu1.jpg';
import meniu2 from './meniu2.jpg';
import meniu3 from './meniu3.jpg';
import meniu4 from './meniu4.jpg';
import meniu5 from './meniu5.jpg';
import meniu6 from './meniu6.jpg';
import Header from "../UI/Header";
import Cart from "../UI/Cart";
import Footer from "../UI/Footer";

const Menu = () => {
    const [orderNumber, setOrderNumber] = useState(0);
    const [menu1, setMenu1] = useState(0);
    const [menu2, setMenu2] = useState(0);
    const [menu3, setMenu3] = useState(0);
    const [menu4, setMenu4] = useState(0);
    const [menu5, setMenu5] = useState(0);
    const [menu6, setMenu6] = useState(0);

    const [isCart, setIsCart] = useState(false);
    const [orderElements, setOrderElements] = useState();
    const [price, setPrice] = useState(0);

    let isTrue = true;


    const cartHandler = () => {
        setIsCart(true);
    }

    const falseSetter = () => {
        setIsCart(false);
    }

    const menu1Sent = () => {
        setOrderNumber(orderNumber + 1);
        setMenu1(menu1 + 1);
        setPrice(price + 22);
        if (menu1 < 1) {
            let obj = "Meniu Nr.1";
            setOrderElements((prevState) => ({
                ...prevState, menu1: "Meniu Nr.1",
            }));
            submitDataHandler(obj);
            console.log("Menu1:", menu1);
        }
    }
    const menu2Sent = () => {
        setOrderNumber(orderNumber + 1);
        setMenu2(menu2 + 1);
        setPrice(price + 22);
        if (menu2 < 1) {
            let obj = "Meniu Nr.2";
            setOrderElements((prevState) => ({
                ...prevState, menu2: "Meniu Nr.2",
            }))
            submitDataHandler(obj);
        }
    }

    const menu3Sent = () => {
        setOrderNumber(orderNumber + 1);
        setMenu3(menu3 + 1);
        setPrice(price + 22);
        if (menu3 < 1) {
            let obj = "Meniu Nr.3";
            setOrderElements((prevState) => ({
                ...prevState, menu3: "Meniu Nr.3",
            }))
            submitDataHandler(obj);
        }
    }

    const menu4Sent = () => {
        setOrderNumber(orderNumber + 1);
        setMenu4(menu4 + 1);
        setPrice(price + 22);
        if (menu4 < 1) {
            let obj = "Meniu Nr.4";
            setOrderElements((prevState) => ({
                ...prevState, menu4: "Meniu Nr.4",
            }))
            submitDataHandler(obj);
        }
    }
    const menu5Sent = () => {
        setOrderNumber(orderNumber + 1);
        setMenu5(menu5 + 1);
        setPrice(price + 22);
        if (menu5 < 1) {
            let obj = "Meniu Nr.5";
            setOrderElements((prevState) => ({
                ...prevState, menu5: "Meniu Nr.5",
            }))
            submitDataHandler(obj);
        }
    }
    const menu6Sent = () => {
        setOrderNumber(orderNumber + 1);
        setMenu6(menu6 + 1);
        setPrice(price + 22);
        if (menu6 < 1) {
            let obj = "Meniu Nr.6";
            setOrderElements((prevState) => ({
                ...prevState, menu6: "Meniu Nr.6",
            }))
            submitDataHandler(obj);
        }
    }

    const decreaseElem1 = () => {
        setMenu1(menu1 - 1);
        setOrderNumber(orderNumber - 1);
        setPrice(price - 22);
    }
    const decreaseElem2 = () => {
        setMenu2(menu2 - 1);
        setOrderNumber(orderNumber - 1);
        setPrice(price - 22);
    }
    const decreaseElem3 = () => {
        setMenu3(menu3 - 1);
        setOrderNumber(orderNumber - 1);
        setPrice(price - 22);
    }
    const decreaseElem4 = () => {
        setMenu4(menu4 - 1);
        setOrderNumber(orderNumber - 1);
    }
    const decreaseElem5 = () => {
        setMenu5(menu5 - 1);
        setOrderNumber(orderNumber - 1);
        setPrice(price - 22);
    }
    const decreaseElem6 = () => {
        setMenu6(menu6 - 1);
        setOrderNumber(orderNumber - 1);
        setPrice(price - 22);
    }
    //--------------------------------------------------------//
    const increaseElem1 = () => {
        setMenu1(menu1 + 1);
        setOrderNumber(orderNumber + 1);
        setPrice(price + 22);
    }
    const increaseElem2 = () => {
        setMenu2(menu2 + 1);
        setOrderNumber(orderNumber + 1);
        setPrice(price + 22);
    }
    const increaseElem3 = () => {
        setMenu3(menu3 + 1);
        setOrderNumber(orderNumber + 1);
        setPrice(price + 22);
    }
    const increaseElem4 = () => {
        setMenu4(menu4 + 1);
        setOrderNumber(orderNumber + 1);
        setPrice(price + 22);
    }
    const increaseElem5 = () => {
        setMenu5(menu5 + 1);
        setOrderNumber(orderNumber + 1);
        setPrice(price + 22);
    }
    const increaseElem6 = () => {
        setOrderNumber(orderNumber + 1);
        setMenu6(menu6 + 1);
        setPrice(price + 22);
    }

    const submitDataHandler = async (orderElements) => {
        try {
            await fetch('https://react-http-d2dc0-default-rtdb.firebaseio.com/menu.json', {
                method: "PUT",
                body: JSON.stringify({ orderElements }),
            }
            );
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Fragment>
            <Prompt when={isTrue} message="Are you sure you want to leave the page?Your cart will be emptyed!" />
            <Header number={orderNumber} cart={cartHandler} />
            <section className={classes.menuCover}>
                <img src={menu} alt="meniu" className={classes.menuImg} />
                <h1 className={classes.menuTitle}>Day's Menu</h1>
            </section>
            <section className={classes.menusContainer1}>
                <div className={classes.menuContainer}>
                    <img src={meniu1} alt='meniu1' className={classes.menusImg} />
                    <h1 className={classes.menusTitle}>Menu Nr.1</h1>
                    <p className={classes.menusPara}>Beef soup (50/300 gr) / Sausages with puree (100/200 gr) / Cabbage salad / Bread / Hot peppers</p>
                    <div className={classes.bottomMenuBox}>
                        <p className={classes.menuPrice}>22 RON / 1 menu</p>
                        <button className={classes.menuButton} onClick={menu1Sent}>Add to Cart</button>
                    </div>
                </div>
                <div className={classes.menuCenterContainer}>
                    <img src={meniu2} alt='meniu2' className={classes.menu2Img} />
                    <h1 className={classes.menusCenterTitle}>Menu Nr.2</h1>
                    <p className={classes.menusCenterPara}>Ciorba de perisoare(50/300 gr) / Specialitatea Casei (chiftea grill, cartofi prajiti, salata varza) (100/150/100 gr) / Paine / Ardei iute</p>
                    <div className={classes.bottomMenuBox}>
                        <p className={classes.menuPrice}>22 RON / 1 menu</p>
                        <button className={classes.menuButton} onClick={menu2Sent}>Add to Cart</button>
                    </div>
                </div>
                <div className={classes.menuContainer}>
                    <img src={meniu3} alt='meniu3' className={classes.menusImg} />
                    <h1 className={classes.menusTitle}>Menu Nr.3</h1>
                    <p className={classes.menusPara}>Ciorba de burta (50/300 gr) / Ficatei cu piure (150/200 gr) / Salata de varza / Paine / Ardei iute</p>
                    <div className={classes.bottomMenuBox}>
                        <p className={classes.menuPrice}>22 RON / 1 menu</p>
                        <button className={classes.menuButton} onClick={menu3Sent}>Add to Cart</button>
                    </div>
                </div>
            </section>
            <section className={classes.menusContainer2}>
                <div className={classes.menuContainer}>
                    <img src={meniu4} alt='meniu4' className={classes.menusImg} />
                    <h1 className={classes.menusTitle}>Menu Nr.4</h1>
                    <p className={classes.menusPara}>Ciorba de pui (50/300 gr) / Snitel de pui cu cartofi prajiti (100/150 gr) / Salata de varza / Paine / Ardei iute</p>
                    <div className={classes.bottomMenuBox}>
                        <p className={classes.menuPrice}>22 RON / 1 menu</p>
                        <button className={classes.menuButton} onClick={menu4Sent}>Add to Cart</button>
                    </div>
                </div>
                <div className={classes.menuCenterContainer}>
                    <img src={meniu5} alt='meniu5' className={classes.menu5Img} />
                    <h1 className={classes.menusCenterTitle}>Menu Nr.5</h1>
                    <p className={classes.menusCenterPara}>Supa de pui (50/300 gr) / Ostropel de pui cu piure (100/200 gr) / Salata de varza / Paine</p>
                    <div className={classes.bottomMenuBox}>
                        <p className={classes.menuPrice}>22 RON / 1 menu</p>
                        <button className={classes.menuButton} onClick={menu5Sent}>Add to Cart</button>
                    </div>
                </div>
                <div className={classes.menuContainer}>
                    <img src={meniu6} alt='meniu6' className={classes.menusImg} />
                    <h1 className={classes.menusTitle}>Menu Nr.6</h1>
                    <p className={classes.menusPara}>Mamaliga cu branza si smantana (200/50/50 gr) / Mici cu cartofi prajiti (3/150 gr) / Paine</p>
                    <div className={classes.bottomMenuBox}>
                        <p className={classes.menuPrice}>22 RON / 1 menu</p>
                        <button className={classes.menuButton} onClick={menu6Sent}>Add to Cart</button>
                    </div>
                </div>
            </section>
            {isCart ? <Cart backDrop={falseSetter} order={orderElements} nr1={menu1} nr2={menu2} nr3={menu3} nr4={menu4} nr5={menu5} nr6={menu6} minus1={decreaseElem1} minus2={decreaseElem2} minus3={decreaseElem3} minus4={decreaseElem4} minus5={decreaseElem5} minus6={decreaseElem6} plus1={increaseElem1} plus2={increaseElem2} plus3={increaseElem3} plus4={increaseElem4} plus5={increaseElem5} plus6={increaseElem6} menusPrice={price} /> : ""}
            <Footer />
        </Fragment>
    )
}

export default Menu;