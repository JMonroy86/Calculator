import React from 'react' //Importing React
import Keyboard from './keyboards' //Importing the keyboard components
import List from '../const/constants' //Importing the List of the elements declared in the const/constants.js file

const Rightbuttons = (props) => {
    return (
        <div className="right-buttons">
           {List.filter(item => item.value == "=" ).map((item,i) => (
                        <Keyboard key={i} item={item} />
                      ))}
        </div>
    )
}
export default Rightbuttons;