import React, { useContext } from 'react';
import List from '../const/constants';
import { Context } from '../store/appContext';

const opEqual = List.find((item) => item.value === "=")
const opAC = List.find((item) => item.value === "AC")

const Keyboard = (props) => {
    let keyClass = ""

    // const[value, setValue]=useState("");
    const { store, actions } = useContext(Context);
    console.log(store.textValue)

    const handleClick = () => {

        let val = store.textValue;
        let valChar = val.charAt(val.length - 1)
        console.log(val.length)

        // si el valor que presionaron es un igual y ademas el ultimo elemento que esta en el vizualizador no es un numero no haga la operación
        if (props.item.value === opEqual.value) {
            if (!List.some((valItem) => valItem.type !== "number" && valItem.value == valChar)) {
                actions.setValues({ textValue: eval(val).toString() })
                console.log("soy list",!List.some((valItem) => valItem.type !== "number" && valItem.value == valChar))
                return;
            }
            else if (props.item.type == "operation") {
                actions.setValues({ textValue: eval(val.slice(0, -1)).toString() })
                console.log("soy operation")
            }
            // console.log("soy eval")
            return;
        }
        else if (props.item.value === opAC.value) {
            // console.log("soy AC")
            val = val.slice(0, -val.length)
            actions.setValues({ textValue: val })
        }
        else if ((List.some((valItem) => valItem.type == "operation" && valChar == "0") && props.item.value !== ".")) {
            val = val.slice(0,-1)
            console.log("soy el agua fria")
        }
        else if ((List.some((valItem) => valItem.type !== "operation" && valItem.value == valChar) && props.item.type === "operation") || props.item.type == "number") {
            

            if (valChar == "0" && props.item.value == "0") {
                console.log("soy un cero")
                return;
            }
            val += props.item.value;
            // console.log("soy el 2do if ")
        }
        else {
            val = val.slice(0, -1) + props.item.value
            console.log("ELSE", val)
        }
        // if(List.some((valItem) => valItem.type === "operation" && valItem.value === props.item.value)){
        //     actions.setValues({ textValue: parseInt(val) })
        // } 

        actions.setValues({ textValue: val.toString() })
        console.log("estoy afuera del if", List.some((valItem) => valItem.type === "operation" && valItem.value === props.item.value), valChar)
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