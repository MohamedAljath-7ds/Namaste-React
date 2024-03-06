import { useState } from "react";
import { LOGO_URL } from "../utils/constans";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {  useSelector } from "react-redux";




export const Header= () => {
    const[logs, setlogs] = useState("Login");
    console.log(logs)
    const onlineStatus = useOnlinestatus();
    

    const carts = useSelector((store) => store.cart.items);
    console.log(carts);

    // useEffect(()=> {
    //     console.log("without dependency array");
    // },[logs])
    return (
        <div className="flex justify-between shadow-md bg-orange-500 h-[100px]">
            <div className="logo-container">
               <img className="w-[136px] h-[100px] cursor-pointer" src={LOGO_URL}/>
            </div>
            <div className="nav-items text-center">
                <ul className="flex p-4 m-9">
                    <li className="px-5">
                        <h3 className="font-bold cursor-pointer">onlineStatus:{onlineStatus ? "💚" : "🔸"}</h3>
                    </li>
                    <li className="px-5">
                        <Link to="/"><h3 className="font-bold cursor-pointer">Home</h3></Link>
                    </li>
                    <li className="px-5">
                        <Link to="/about"><h3 className="font-bold cursor-pointer">About us</h3></Link>
                    </li>
                    <li className="px-5">
                        <Link to="/contact"><h3 className="font-bold cursor-pointer">Contact us</h3></Link>
                    </li>
                    <li className="px-5"><Link to="/cart" ><FontAwesomeIcon icon={faCartShopping} bounce /> - {carts.length}</Link></li>
                    <button className= {logs == "Login" ? "  px-4 py-2 relative left-3 bottom-2 rounded-md bg-green-600 text-white transition-all" : " px-4 py-2 relative left-3 bottom-2 rounded-md bg-black text-white  transition-all"}  onClick={() => {
                        logs == "Login" ? setlogs("Logout") :setlogs("Login");
                    }}>{logs}</button>
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;