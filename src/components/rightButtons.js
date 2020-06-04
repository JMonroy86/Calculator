import React from 'react' //Importing React
import Keyboard from './keyboards' //Importing the keyboard components
import List from '../const/constants' //Importing the List of the elements declared in the const/constants.js file

const Rightbuttons = (props) => {
    return (
        <div className="right-buttons">
            {/* // List has the values that are storage in coponents.js, and this is an array of objects 
                    is filter to take each the elements represented in a new array "item", then the item array is mapped and "i" 
                    is the key that reactjs needs to identify each child as unique element */}
            {List.filter(item => item.value == "=").map((item, i) => (
                <Keyboard key={i} item={item} />
            ))}
        </div>
    )
}
export default Rightbuttons;