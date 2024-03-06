//usecontext

// this is like a global space we can access anywhere in the app

import { createContext } from "react";

const Usercontext = createContext({
    loggedIn:"default user"
});

export default Usercontext;