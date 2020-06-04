import React, { useContext } from 'react';
import List from '../const/constants';
import { Context } from '../store/appContext';

const opEqual = List.find((item) => item.value === "=") //opEqual is a variable declared to store the item that List.find return, in this case it returns the first element where item.value === "="
const opAC = List.find((item) => item.value === "AC") ////opEqual is a variable declared to store the item that List.find return, in this case it returns the first element where item.value === "AC"

const Keyboard = (props) => {
    let keyClass = ""

    const { store, actions } = useContext(Context); // The context is brought to the component to use the store and the actions
    // console.log(store.textValue) //i usually use console.log to evaluate what the store is giving to me 

    const handleClick = () => { // handleClick () is a function created to be executed when a button is clicked

        let val = store.textValue; //I declared the variable val to be faster when using it
        let valChar = val.charAt(val.length - 1) //varChar is a variable that stores the element before the last of the val variable which is a string, to do that I need to use the charAt () function.

        if (props.item.value === opEqual.value) { // if the value of the button pressed is an equal

            if (!List.some((valItem) => valItem.type !== "number" && valItem.value == valChar)) {
                /*i used the some() function to check if at least one element of the array meets the condition that it must be a data type different from a number 
                and must have the same value of valChar, if  return true i going to send the value to the store as string*/

                actions.setValues({ textValue: eval(val).toString() }) /*I call the actions.setValues ​​() function that is in the context and pass the value "val" as parameter,
                the function eval () that I used to evaluate that the value of the data type of "val" is a string and to prevent that use the function toString ()*/
                return;
            }
            else if (props.item.type == "operation") { //if not, if the data type value of the button pressed is equal to "operation" (+,-,*,/)
                actions.setValues({ textValue: eval(val.slice(0, -1)).toString() }) /*I call the actions.setValues ​​() function that is in the context and pass the value "val" 
                as parameter, the function eval () that I used to evaluate that the value of the data type of "val" is a string and to prevent that use the function toString and slice()
                eliminate the current value of val to prevent that exist an "operation" value next to equal ()*/
            }
            return;
        }
        else if (props.item.value === opAC.value) { // if the value of button pressed is iqual to "AC the calculator is going to be resset to the initialValue ="123"
           
            val = val.slice(0, -val.length-1) //the slice function eliminate the entire value store in value
            val = "123" //value set to 123 as initialValue
            actions.setValues({ textValue: val }) // sending val as parameter to the function actions.setValues()
        }
        else if ((List.some((valItem) => valItem.type == "operation" && valChar == "0") && props.item.value !== ".")) { /* if at least one of the elements type is an operation
            and the valChar value is a "0" and also if the button pressed is diferent of a dot "." */
            val = val.slice(0, -1) + props.item.value; // slice the "0" and left current value
            
        }
        else if ((List.some((valItem) => valItem.type !== "operation" && valItem.value == valChar) && props.item.type === "operation") || props.item.type == "number"){
            /*if at least one element of the List is different to "operation" and this element is iqual to valChar and also the current value of the button pressed is of type 
             "operation" or is a number we can add ne current value to "val" */

            if (valChar == "0" && props.item.value == "0") { //this conditional "if" evaluates if the previous value of "val" and the value of the current button pressed is zero, nothing will happen
                
                return;
            }
            val += props.item.value; //otherwise the current value will be added to the value of val
            
        }
        else { //if not, maybe the value of val is an operation or a zen, then we need to eliminate this value and add the current value
            val = val.slice(0, -1) + props.item.value
            
        }


        actions.setValues({ textValue: val.toString() }) //and finally we send the value of val to actions.setValue function passing it as parameter
        
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
            {/* this button calls an onClick event that executes the handleClick function, it also receives as value the current value 
            of the pressed button and renders it inside the html <h1> tag */}
            <button onClick={handleClick} value={props.item.value} className={keyClass}><h1>{props.item.text}</h1></button>
        </>
    )
}

export default Keyboard; //exporting the  Keyboard component