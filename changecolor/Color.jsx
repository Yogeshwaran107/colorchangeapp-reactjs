import { useState } from "react";

function Color()
{
    const [color,setcolor]=useState("orange");

    function handle(event)
    {
       setcolor(event.target.value);
    }

    return (<div className="main-container">
        <h1>color picker app</h1>
        <p className="color-container" style={{backgroundColor: color}}>selected  color:{color}</p>

        <label>select the color</label>
        <input type="color" value={color} onChange={handle}/>


    </div>)
}

export default Color;