import React, { useEffect, useState } from 'react'
import classes from './Button.module.css';

function UseEffect1() {

    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))

       
    }, [resourceType])

    return (
        <div>
           <div className={classes.actions}>
               <button onClick={() => setResourceType('Posts')}>Posts</button>
               <button onClick={() => setResourceType('Users')}>Users</button>
               <button onClick={() => setResourceType('Comments')}>Comments</button>
               </div> 
               <h1>{resourceType}</h1>
               {items.map(item => {
                   return(
                       <pre>{JSON.stringify(item)}</pre>
                       )
               })}
        </div>
    )
}

export default UseEffect1;
