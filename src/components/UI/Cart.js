import { Fragment } from "react"
import { useEffect, useState } from "react/cjs/react.development";
import classes from './Cart.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


const Cart = (props) => {
    const [menus, setMenus] = useState([]);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    useEffect(() => {
        let array = [];
        for (const elem in props.order) {
            if (props.order[elem] === 'Meniu Nr.1' && props.nr1 !== 0) {
                const element = <div className={classes.menus} key={Math.random()}>{props.order[elem]}
                    <AddIcon className={classes.specialAddButton1} onClick={props.plus1} />
                    {props.nr1 !== 0 && <p className={classes.nr1}>{props.nr1}</p>}
                    <RemoveIcon className={classes.removeSpecialButton1} onClick={props.minus1}></RemoveIcon>
                </div>
                array.push(element);

            } else if (props.order[elem] === 'Meniu Nr.2' && props.nr2 !== 0) {
                const element = <div className={classes.menus} key={Math.random()}>{props.order[elem]}
                    <AddIcon className={classes.specialAddButton2} onClick={props.plus2} />
                    {props.nr2 !== 0 && <p className={classes.nr}>{props.nr2}</p>}
                    <RemoveIcon className={classes.removeSpecialButton2} onClick={props.minus2}></RemoveIcon>
                </div>
                array.push(element);

            }
            else if (props.order[elem] === 'Meniu Nr.3' && props.nr3 !== 0) {
                const element = <div className={classes.menus} key={Math.random()}>{props.order[elem]}
                    <AddIcon className={classes.addButton} onClick={props.plus3} />
                    {props.nr3 !== 0 && <p className={classes.nr}>{props.nr3}</p>}
                    <RemoveIcon className={classes.removeButton} onClick={props.minus3}></RemoveIcon>
                </div>
                array.push(element);

            }
            else if (props.order[elem] === 'Meniu Nr.4' && props.nr4 !== 0) {
                const element = <div className={classes.menus} key={Math.random()}>{props.order[elem]}
                    <AddIcon className={classes.addButton} onClick={props.plus4} />
                    {props.nr4 !== 0 && <p className={classes.nr}>{props.nr4}</p>}
                    <RemoveIcon className={classes.removeButton} onClick={props.minus4}></RemoveIcon>
                </div>
                array.push(element);

            }
            else if (props.order[elem] === 'Meniu Nr.5' && props.nr5 !== 0) {
                const element = <div className={classes.menus} key={Math.random()}>{props.order[elem]}
                    <AddIcon className={classes.addButton} onClick={props.plus5} />
                    {props.nr5 !== 0 && <p className={classes.nr}>{props.nr5}</p>}
                    <RemoveIcon className={classes.removeButton} onClick={props.minus5}></RemoveIcon>
                </div>
                array.push(element);

            }
            else if (props.order[elem] === 'Meniu Nr.6' && props.nr6 !== 0) {
                const element = <div className={classes.menus} key={Math.random()}>{props.order[elem]}
                    <AddIcon className={classes.specialAddButton6} onClick={props.plus6} />
                    {props.nr6 !== 0 && <p className={classes.nr6}>{props.nr6}</p>}
                    <RemoveIcon className={classes.removeSpecialButton6} onClick={props.minus6}></RemoveIcon>
                </div>
                array.push(element);
            }
        }
        setMenus(array);
    }, [props])

    const submitDataHandler = async (menuElements) => {
        try {
            await fetch('https://react-http-d2dc0-default-rtdb.firebaseio.com/MenuToSend.json', {
                method: "PUT",
                body: JSON.stringify({ menuElements }),
            }
            );
            setSuccess(true);
            setSuccessMessage("Your food was successfully sent to our restaurant!");
        } catch (e) {
            setError(true);
            setErrorMessage("Something went wrong with sending your cart ! Please try again ! ");
            console.log(e);
        }
    }
    const sendHandler = () => {
        let menuArray = [];
        for (const elem in props.order) {
            switch (props.order[elem]) {
                case 'Meniu Nr.1':
                    menuArray.push({ Menu1: "Meniu Nr.1", Numar_meniuri_1: props.nr1 });
                    break;
                case "Meniu Nr.2":
                    menuArray.push({ Menu2: "Meniu Nr.2", Numar_meniuri_2: props.nr2 });
                    break;
                case "Meniu Nr.3":
                    menuArray.push({ Menu3: "Meniu Nr.3", Numar_meniuri_3: props.nr3 });
                    break;
                case "Meniu Nr.4":
                    menuArray.push({ Menu4: "Meniu Nr.4", Numar_meniuri_4: props.nr4 });
                    break;
                case "Meniu Nr.5":
                    menuArray.push({ Menu5: "Meniu Nr.5", Numar_meniuri_5: props.nr5 });
                    break;
                case "Meniu Nr.6":
                    menuArray.push({ Menu6: "Meniu Nr.6", Numar_meniuri_6: props.nr6 });
                    break;
                default: {
                    console.log("Do nothing! :)");
                }
            }
        }
        menuArray.push({ Price: props.menusPrice });
        submitDataHandler(menuArray);
    }
    return (
        <Fragment>
            <section className={classes.backdrop} onClick={props.backDrop} />
            <div className={classes.container}>
                {!error && !success && <section className={classes.cartBox}>
                    <h1 className={classes.title}>Here is your cart!</h1>
                    {menus}
                    {props.menusPrice === 0 && <div className={classes.emptyBox}><SentimentSatisfiedAltIcon /><p className={classes.emptyPara}>Your cart is still empty,please add something from our menu!</p></div>}
                    {props.menusPrice !== 0 && <p className={classes.priceBox}>{props.menusPrice} RON</p>}
                    <div className={classes.buttonBox}>
                        {props.menusPrice !== 0 && <button className={classes.sendButton} onClick={sendHandler}>SEND</button>}
                        {props.menusPrice === 0 && <button className={classes.dontSendButton} disabled>SEND</button>}
                        <button className={classes.menuButton} onClick={props.backDrop}>Cancel</button>
                    </div>
                </section>}
                {error && <div className={classes.errorBox}><p>{errorMessage}</p></div>}
                {success && <div className={classes.successBox}><p>{successMessage}</p><button className={classes.successButton} onClick={props.backDrop}>OK</button></div>}
            </div>
        </Fragment >
    )
}

export default Cart;