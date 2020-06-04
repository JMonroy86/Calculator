import React from 'react' //Importing React
import Keyboard from './keyboards' //Importing the keyboard components
import List from '../const/constants' //Importing the List of the elements declared in the const/constants.js file

const Topbuttons = (props) => {
    return (
        <div className="top-buttons pt-4">
           {List.filter(item => item.position  == "top").map((item,i) => (
                        <Keyboard key={i} item={item} />
                      ))}
        </div>
    )




}
export default Topbuttons;