import { useState } from "react"

const useOnlinestatus = () => {

    //used to keep track of the online status and updated into the onlinestatus local state vaiable
    const[onlineStatus, setOnlineStatus] = useState(true);
    
    //browser gives us an window object in window there is already an online eventListener
    window.addEventListener("online", () => {
        //logic if user is online setOnlinestatus as true
        setOnlineStatus(true);
    })

    window.addEventListener("offline", () => {
        //if user is offline setOnlinestatus as fasle
        setOnlineStatus(false);
    })

    //retunr the onlinestatus
    return onlineStatus
}

export default useOnlinestatus;