import React, { useEffect, useState } from 'react';
// import { Context } from '../store/appContext';


const Keyboard = (props) => {
    let classes = ""
    const [values, setValues] = useState(0)

    if (values !== "") {
        console.log("soy get", values)
    }
    useEffect(() => {

        if (values !== "") {
            console.log("soy get", typeof values)
        }
        else {
            console.log("vacio")
        }

    }, []);

    return (
        <>
            {
                props.values.map((val, i) => {
                    if (val === "AC") {
                        classes = "keyboard btn-danger"
                    }
                    else if (val === "=") {
                        classes = "keyboard btn-primary"
                    }
                    else {
                        classes = "keyboard"
                    }
                    return (

                        <button onClick={() => setValues(val)} key={i} value={val} className={classes}><h1>{val}</h1></button>
                    )
                })
            }
        </>
    )
}

export default Keyboard;