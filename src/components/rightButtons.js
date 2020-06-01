import React from 'react' //Importing React
import Keyboard from './keyboards' //Importing the keyboard components
import List from '../const/constants' //Importing the List of the elements declared in the const/constants.js file

const Rightbuttons = (props) => {
    return (
        <div className="right-buttons">
            {
                // List has the values that are storage in coponents.js, and this is an array of objects 
                // this is mapped to take each separate element represented as "item" and "i" is the key that reactjs needs to identify each child as unique element
                List.map((item, i) => {
                    if (item.position === "right") {
                        // this "if" is used to evaluate the value of item.position it only returns the elements that the component needs, 
                        // in this case it is if item.postion is equal right
                        return (
                            // the keyboard is rendered taking as "props" the "item" evaluated in the previous one "if" 
                            <Keyboard key={i} item={item} />
                        )
                    }

                })
            }
        </div>
    )
}
export default Rightbuttons;