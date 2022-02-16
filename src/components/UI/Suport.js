import { Fragment, useState } from "react"
import Header from "./Header";
import classes from './Support.module.css'


const Support = () => {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);
    const [succes, setSucces] = useState(false);

    const textHandler = (event) => {
        setText(event.target.value);
    }
    const formHandler = (event) => {
        event.preventDefault();
        submitDataHandler(text);
    }

    const submitDataHandler = async (text) => {
        try {
            await fetch('https://react-http-d2dc0-default-rtdb.firebaseio.com/complains.json', {
                method: 'PUT',
                body: JSON.stringify({ text }),
            }
            );
            setIsError(false);
            setText('');
            setSucces(true);
        }
        catch (error) {
            setText('');
            setIsError(true);
        }

    }
    return <Fragment>
        <Header />
        <section className={classes.supportBox}>
            <p className={classes.text}>If you have encountered difficulties of any kind on our page, please write to us to improve the interaction with our customers, thank you!</p>
            <form onSubmit={formHandler}>
                <textarea id='text' type='text' className={classes.input} value={text} wrap='HARD' onChange={textHandler} ></textarea>
                {text ? <button type='submit' className={classes.validButton}>SUBMIT</button> : <button type='submit' disabled className={classes.invalidButton}>SUBMIT</button>}
            </form>
        </section>
        {isError === true && succes !== true && < p className={classes.errorPara}>Something went wrong!Please try to submit again.</p>}
        {succes === true && isError !== true && <p className={classes.succesPara}>Data was successfully sent!</p>}
    </Fragment >
}

export default Support;