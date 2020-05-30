import React from 'react'
import Keyboard from './keyboards'

const Topbuttons = (props) => {
    return (
        <div className="top-buttons pt-4">
            <Keyboard values={["+", "-", "x", "/"]} />
        </div>
    )
}
export default Topbuttons;