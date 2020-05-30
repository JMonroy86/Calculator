import React from 'react'
import Keyboard from './keyboards'

const Leftbuttons = (props) => {
    return (
        <div className="left-buttons">
                <div className="">
                    <Keyboard values={[7, 8, 9]} />
                </div>
                <div className="pt-2">
                    <Keyboard values={[4, 5, 6]} />
                </div>
                <div className="pt-2">
                    <Keyboard values={[1, 2, 3]} />
                </div>
                <div className="pt-2">
                    <Keyboard values={[0, ".", "AC"]} />
                </div>
            </div>
    )
}
export default Leftbuttons;