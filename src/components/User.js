import { useState } from "react";

const User = ({name}) => {
    //create a multiple state variable in functional component
    let[count, setCount] = useState(0);
    
    return (
        <div className="user-card">
            <h1>count = {count}</h1>
            <button onClick={()=>{
                setCount(count = count + 1);
            }}>count increase</button>
            <h1>{name}</h1>
            <h2>Location</h2>
            <h4>contact@aljath</h4>
        </div>
    )
}

export default User;