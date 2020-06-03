import React, { useContext } from 'react';
import List from '../const/constants';
import { Context } from '../store/appContext';

const opEqual = List.find((item) => item.value === "=")
const opAC = List.find((item) => item.value === "AC")

const Keyboard = (props) => {
    // this console.log is used to validate the value that the component recive by the store
    console.log(props)
    // keyClass variable is declared as string empty, and this the className that the button of the calculator is going to have
    let keyClass = ""

    const { store, actions } = useContext(Context);

    const handleClick = () => {

        let val = store.textValue; //this is the value that is in the store
        let valChar = val.charAt(val.legth - 1)

        if (props.item.value === opEqual.value) { //this conditional evalue if the actual value of the key pressed is equal to "="
            if (!List.some((valItem) => valItem.type !== "number" && valItem.value == valChar)) {
                actions.setValues({ textValue: eval(val).toString() })
                console.log("soy list", !List.some((valItem) => valItem.type !== "number" && valItem.value == valChar))
                return;
            }
            else if (props.item.type == "operation") {
                actions.setValues({ textValue: eval(val.slice(0, -1)).toString() })
                console.log("i'm operation")
            }
            return;
        }
        
        else if ((List.some((valItem) => valItem.type !== "operation" && valItem.value == valChar) && props.item.type === "operation") || props.item.type == "number") {


            if (valChar == "0" && props.item.value == "0") {
                console.log("soy un cero")
                return;
            }
            val += props.item.value;
            // console.log("I'm the 2nd if ")
        }
        actions.setValues({ textValue: val })
    }




    // the next if conditionals are used to evaluated the values that the component recive by props and depending  of the given
    // value the keyClass variable is going to be assigned

    if (props.item.value === "AC") {
        // if the value is equal to AC the button is going to have the "btn-danger" and the "keyboard" class
        keyClass = "keyboard btn-danger"
    }
    else if (props.item.value === "=") {
        // if the value is equal to = the button is going to have the "btn-primary" and the "keyboard" class

        keyClass = "keyboard btn-primary"
    }
    // if not the buttons are only going to have the "keyboard" class
    else {
        keyClass = "keyboard"
    }
    return (
        <>
            <button onClick={handleClick} value={props.item.value} className={keyClass}><h1>{props.item.text}</h1></button>
        </>
    )
}

export default Keyboard;