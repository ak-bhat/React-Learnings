import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(()=>import("./components/Grocery") )


const AppLayout = () => {

    const [userName, setUserName] = useState()

    useEffect(()=>{
        //Api call
        const data = {
            name:"Ananthu"
        }
        setUserName(data.name)
    },[])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>      
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
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
                path:"/grocery",
                element:(<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>)
            },
            {
                path:"/restaurants/:resId",   //:resId is dynamic
                element:<RestaurantMenu/>
            }

        ],
        errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)