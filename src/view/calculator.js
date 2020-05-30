import React from 'react'
import Screen from '../components/screen';
import Topbuttons from '../components/topButtons';
import Leftbuttons from '../components/leftButtons';
import Rightbuttons from '../components/rightButtons';

const Calculator = (props) => {
    return (
        <div className="calculator">
            <Screen initialValue={props.initialValue} />
            <Topbuttons />
            <Leftbuttons />
            <Rightbuttons />
        </div>
    )
}
export default Calculator;