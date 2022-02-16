import { Fragment, useState } from "react"
import Header from "./Header"
import classes from './Contact.module.css'

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [adress, setAdress] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [firstNameBlur, setFirstNameBlur] = useState(false);
    const [emailBlur, setEmailBlur] = useState(false);
    const [adressBlur, setAdressBlur] = useState(false);
    const [lastNameBlur, setLastNameBlur] = useState(false);
    const [messageBlur, setMessageBlur] = useState(false);
    let isEmpty = true;
    let firstNameMessage = '';
    let lastNameMessage = '';
    let emailMessage = '';
    let messageMessage = '';
    let adressMessage = '';

    const formHandler = (event) => {
        event.preventDefault();
        const info = { name: firstName, lastname: lastName, adress: adress, email: email, message: message };
        const sendInfoHandler = async (info) => {
            try {
                await fetch('https://react-http-d2dc0-default-rtdb.firebaseio.com/info.json', {
                    method: "PUT",
                    body: JSON.stringify({ complainInfo: info }),
                }
                );
                setIsError(false);
            } catch (e) {

                setIsError(true);
                setErrorMessage('Something went wrong!Please try again!');
            }
            setFirstName('');
            setLastName('');
            setAdress('');
            setEmail('');
            setMessage('');
        }
        sendInfoHandler(info);
    }
    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
    }
    const firstNameBlurHandler = () => {
        setFirstNameBlur(true);
    }
    const lastNameBlurHandler = () => {
        setLastNameBlur(true);
    }
    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    }
    const adressHandler = (event) => {
        setAdress(event.target.value);
    }
    const adressBlurHandler = () => {
        setAdressBlur(true);
    }
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const emailBlurHandler = () => {
        setEmailBlur(true);
    }
    const messageHandler = (event) => {
        setMessage(event.target.value);
    }
    const messageBlurHandler = () => {
        setMessageBlur(true);
    }
    if (firstName && lastName && email && message && adress) {
        isEmpty = false
    }
    if (firstNameBlur && firstName === '') {
        firstNameMessage = "Please enter a valid first name!";
    }
    if (lastNameBlur && lastName === "") {
        lastNameMessage = "Please enter a valid last name!";

    }
    let emailValidation = true;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && emailBlur) {
        console.log("intra");
        emailValidation = false;
    }
    if (emailValidation === false) {
        emailMessage = 'Please enter a valid email'
    }

    if (adressBlur && adress === '') {
        adressMessage = 'Please enter a valid adress!';
    }

    if (messageBlur && message === '') {
        messageMessage = "Please enter a valid message!";
    }
    return (
        <Fragment>
            <Header />
            <section className={classes.container}>
                <div className={classes.formBox}>
                    <p>Please complete the empty spaces ann send your request to us.</p>
                    <form onSubmit={formHandler}>
                        <div className={classes.nameBox}>
                            {firstNameMessage === '' && <input id='firstname' type='text' className={classes.firstname} placeholder='First Name' onChange={firstNameHandler} value={firstName} onBlur={firstNameBlurHandler}></input>}
                            {firstNameMessage !== '' && <input id='firstname' type='text' className={classes.firstnameInvalid} placeholder={firstNameMessage} onChange={firstNameHandler} value={''} onBlur={firstNameBlurHandler}></input>}
                            {lastNameMessage === '' && <input id='lastname' type='text' className={classes.lastname} placeholder='Last Name' onChange={lastNameHandler} value={lastName} onBlur={lastNameBlurHandler}></input>}
                            {lastNameMessage !== '' && <input id='lastname' type='text' className={classes.lastnameInvalid} placeholder={lastNameMessage} onChange={lastNameHandler} value={lastName} onBlur={lastNameBlurHandler}></input>}
                        </div>
                        <div className={classes.emailBox}>
                            {emailMessage === '' && <input id='email' type='text' className={classes.email} placeholder='Email' onChange={emailHandler} value={email} onBlur={emailBlurHandler}></input>}
                            {emailMessage !== '' && <input id='email' type='text' className={classes.emailInvalid} placeholder={emailMessage} onChange={emailHandler} value={email} onBlur={emailBlurHandler}></input>}
                        </div>
                        <div className={classes.adressBox}>
                            {adressMessage === '' && < input id='adress' type='text' className={classes.adress} placeholder='Adress' onChange={adressHandler} value={adress} onBlur={adressBlurHandler}></input>}
                            {adressMessage !== '' && < input id='adress' type='text' className={classes.adressInvalid} placeholder={adressMessage} onChange={adressHandler} value={adress} onBlur={adressBlurHandler}></input>}
                        </div>
                        <div className={classes.messageBox}>
                            {messageMessage === '' && <input id='message' type='text' className={classes.message} placeholder='Your Message' onChange={messageHandler} value={message} onBlur={messageBlurHandler}></input>}
                            {messageMessage !== '' && <input id='message' type='text' className={classes.messageInvalid} placeholder={messageMessage} onChange={messageHandler} value={message} onBlur={messageBlurHandler}></input>}
                        </div>
                        <div className={classes.buttonBox}>

                            {!isEmpty && <button type="submit" className={classes.formButton}>SEND</button>}
                            {isEmpty && <button type="submit" className={classes.formDenyButton}>SEND</button>}
                        </div>
                    </form>
                    {isError && <p className={classes.errorPara}>{errorMessage}</p>}
                </div>
            </section >
        </Fragment >
    )
}

export default Contact;