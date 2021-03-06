import React, { useContext, useEffect } from 'react'
import Screen from '../components/screen';
import Topbuttons from '../components/topButtons';
import Leftbuttons from '../components/leftButtons';
import Rightbuttons from '../components/rightButtons';
import { Context } from '../store/appContext';


{/* 
The calculator was divided into four components, 
Topbuttons for mathematical operators [+,*,-,/] 
Screen is the component that must be the calculator's screen, the initial value of 123 is passed to the component as props
Leftbuttons has the numbers, the dot for decimals and AC to reset the calculator
Rightbuttons only has the equal (=) mathematical operator
 */ }

const Calculator = (props) => {
    const { actions } = useContext(Context);
    useEffect(() => { actions.setValues({ textValue: props.initialValue }) }, [])
    return (
        <div className="calculator">
            <Screen />
            <Topbuttons />
            <Leftbuttons />
            <Rightbuttons />
        </div>
    )
}
export default Calculator;