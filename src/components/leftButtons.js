import React from 'react' //Importing React
import Keyboard from './keyboards' //Importing the keyboard components
import List from '../const/constants' //Importing the List of the elements declared in the const/constants.js file

const Leftbuttons = (props) => {
    return (
        <div className="left-buttons">
            <div className="">
                {
                    // List has the values that are storage in coponents.js, and this is an array of objects 
                    // this is mapped to take each separate element represented as "item" and "i" is the key that reactjs needs to identify each child as unique element
                    List.map((item, i) => {
                        if (item.value === 7 || item.value === 8 || item.value === 9) {
                            // this "if" is used to evaluate the value of item.value it only returns the elements that the component needs, 
                            // in this case it is if item.value is equal to "7","8" and "9"
                            return (
                                // the keyboard is rendered taking as "props" the "item" evaluated in the previous one "if" 
                                <Keyboard key={i} item={item} />
                            )
                        }
                    })
                }
            </div>
            <div className="pt-2">
                {
                    List.map((item, i) => {
                        if (item.value === 4 || item.value === 5 || item.value === 6) {
                            return (
                                <Keyboard key={i} item={item} />
                            )
                        }
                    })
                }
            </div>
            <div className="pt-2">
                {
                    List.map((item, i) => {
                        if (item.value === 1 || item.value === 2 || item.value === 3) {
                            return (
                                <Keyboard key={i} item={item} />
                            )
                        }
                    })
                }
            </div>
            <div className="pt-2">
                {
                    List.map((item, i) => {
                        if (item.value === 0 || item.value === "." || item.value === "AC") {
                            return (
                                <Keyboard key={i} item={item} />
                            )
                        }
                    })
                }
            </div>


        </div>
    )
}
export default Leftbuttons;