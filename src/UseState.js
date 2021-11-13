import React, { useState } from 'react'
import classes from './Button.module.css';


function UseState() {
    const [state, setState] = useState(0);

    

    return (
        <div className={classes.actions}>
          <button onClick={() => setState(state + 1)}>{state}</button>
        </div>
    )
}

export default UseState
