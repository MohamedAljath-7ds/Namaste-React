import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
       <div className="error-container">
        <div className="error-img">
            
        </div>
        <div className="error-status">
            <h2>I am in a bad mood</h2>
            <h3>{error.status} :  {error.statusText}</h3>
        </div>
       </div>
    );
};


export default Error;