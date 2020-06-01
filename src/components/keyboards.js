import React, { useContext } from 'react';

import { Context } from '../store/appContext';


const Keyboard = (props) => {
    // this console.log is used to validate the value that the component recive by the store
    console.log(props)
    // keyClass variable is declared as string empty, and this the className that the button of the calculator is going to have
    let keyClass = ""

    const { store, actions } = useContext(Context);

    // the next if conditionals are used to evaluated the values that the component recive by props and depending  of the given
    // value the keyClass variable is going to be assigned

    if (props.item.value === "AC") {
        // if the value is eqcual to AC the button is going to have the "btn-danger" and the "keyboard" class
        keyClass = "keyboard btn-danger"
    }
    else if (props.item.value === "=") {
        // if the value is eqcual to AC the button is going to have the "btn-primary" and the "keyboard" class

        keyClass = "keyboard btn-primary"
    }
    // if not the buttons are only going to have the "keyboard" class
    else {
        keyClass = "keyboard"
    }
    return (
        <>
            <button onClick={() => actions.setValues({ textValue: props.item.value })} value={props.item.value} className={keyClass}><h1>{props.item.text}</h1></button>
        </>
    )
}

export default Keyboard;