import { useEffect, useState } from "react";
import { MENU_URL } from "./constans";

//own custom hook for fetching the restaurant with menu details
const useRestaurantmenu = (resId) => {
    // local state variable
    const[restaurantMenu, setRestaurantMenu] = useState(null);
    
    //after the component renders
    useEffect(() => {
        fetchData();
    },[])

    //fetch the data
    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId)
        const json = await data.json();
        setRestaurantMenu(json?.data);
        console.log(json);
    }


    return restaurantMenu;
}

export default useRestaurantmenu;