import React, { useContext } from 'react';
// import { Context } from '../store/appContext';

// import {getValue} from '../components/keyboards'
// import {getValues} from '../components/hooks'

const Screen = (props) => {
    // const { store, actions } = useContext(Context);

    console.log(props.value)
    return (
        <div className="screen">
            <h1>{props.initialValue}</h1>
        </div>
    )
}
export default Screen;