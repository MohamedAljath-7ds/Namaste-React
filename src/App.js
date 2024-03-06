import React, { Suspense, useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { lazy } from "react";
import { Suspense } from "react";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import Cart from "./components/Cart";
import RestaurantMenu from "./components/Restaurant";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FakeCard from "./components/Shimmer";
import Usercontext from "./utils/Usercontext";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";






//my own data


//not using key(not acceptable) <<<< index as Key <<<< unique id(best Practice)
//using a key as index big big no big big L no no no!!!!!!!
    





const AppLayout = () => {
    const[firstLog, setFirstlog] = useState();

    useEffect(() => {
        const data = {
            name:"aljath",
        }
        setFirstlog(data.name);
    },[])
  
    return (
        <Provider store={appstore}>
        <Usercontext.Provider value={{loggedIn:firstLog,setFirstlog}} >
        <div className="app">
            
            <Header />
            <Outlet/>
            
        </div>
        </Usercontext.Provider>
        </Provider>
        
    )
}

//implement seperate bundling for about

const appRouter = createBrowserRouter([
    {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body />
           },
        {
            path:"/about",
            element:<About/>
           },
           {
            path:"/contact",
            element:<Contact/>
           },
           {
            path:"/cart",
            element:<Cart/>
           },
           {
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>
           },
           
    ],
    errorElement:<Error/>
   },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)