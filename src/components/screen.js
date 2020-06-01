import React, { useContext } from 'react'; //Importing React and useContext hooks
import { Context } from '../store/appContext';//Importing the context of the app

const Screen = (props) => {
    const { store } = useContext(Context);// store return the actual value of the context 
    console.log(store) // this console.log is used to validate the value that the component recive by the store
    return (
        <div className="screen">
            {/* Screen component receives initialValue as props and textValue from store and renders in h1 tag */}
            <h1>{props.initialValue + store.textValue}</h1>
        </div>
    )
}
export default Screen;
// exporting the Screen component