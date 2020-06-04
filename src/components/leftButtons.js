import React from 'react' //Importing React
import Keyboard from './keyboards' //Importing the keyboard components
import List from '../const/constants' //Importing the List of the elements declared in the const/constants.js file

const Leftbuttons = (props) => {
    let result;
    return (
        <div className="left-buttons">
            <div className="">

                {/* // List has the values that are storage in coponents.js, and this is an array of objects 
                    is filter to take each the elements represented in a new array "item", then the item array is mapped and "i" 
                    is the key that reactjs needs to identify each child as unique element */}
                {List.filter(item => item.value == 7 || item.value == 8 || item.value == 9).map((item, i) => (
                    <Keyboard key={i} item={item} />
                ))}
            </div>
            <div className="pt-2">
                {List.filter(item => item.value == 4 || item.value == 5 || item.value == 6).map((item, i) => (
                    <Keyboard key={i} item={item} />
                ))}
            </div>
            <div className="pt-2">
                {List.filter(item => item.value == 1 || item.value == 2 || item.value == 3).map((item, i) => (
                    <Keyboard key={i} item={item} />
                ))}
            </div>
            <div className="pt-2">
                {List.filter(item => item.value == "." || item.value == 0 || item.value == "AC").map((item, i) => (
                    <Keyboard key={i} item={item} />
                ))}
            </div>


        </div>
    )
}
export default Leftbuttons;