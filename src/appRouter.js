import React from "react";

 import {BrowserRouter,Routes,Route} from "react-router-dom";
 import HomeComponent from "./Components/Home/homepage";
 import LoginComponent from "./Components/Login/login";
 import RegisterComponent from "./Components/Register/register"

 const AppRouter=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={LoginComponent} />
                <Route path="/login" Component={LoginComponent} />
                <Route path="/home" Component={HomeComponent} />
                <Route path="/register" Component={RegisterComponent} />

            </Routes>
        </BrowserRouter>
    )
 }

 export default AppRouter;
