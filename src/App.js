import React, { lazy, Suspense, useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from './components/RestaurantMenu.js'
import UserContext from "./utils/UserContext.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On-demand loading
// Dynamic Import

const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
        const data = {
            name:"Mohit",
        };
        setUserName(data.name);
    },[])


    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    );
};



const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <AppLayout />,
      errorElement : <Error/>,
      children: [
          { path: "/", element: <Body />}, 
          { path: "/about", element: <About /> },
          { path: "/contact", element: <Contact /> },
          { path: "/grocery", element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense> },
          { path: "/restaurants/:resId", element: <RestaurantMenu /> }
      ]
  }
]);




const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
// root.render(<AppLayout/>);

