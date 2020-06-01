import React from 'react'
import Screen from '../components/screen';
import Topbuttons from '../components/topButtons';
import Leftbuttons from '../components/leftButtons';
import Rightbuttons from '../components/rightButtons';

const Calculator = (props) => {
    return (
        <div className="calculator">
            {/* the calculator was divided into four components, */}
            {/* Topbuttons for mathematical operators [+,*,-,/] */}
            {/* Screen is the component that must be the calculator's screen, the initial value of 123 is passed to the component as props */}
            {/* Leftbuttons has the numbers, the dot for decimals and AC to reset the calculator */}
            {/* Rightbuttons only has the equal (=) mathematical operator */}
            <Screen initialValue={props.initialValue} />
            <Topbuttons />
            <Leftbuttons />
            <Rightbuttons />
        </div>
    )
}
export default Calculator;