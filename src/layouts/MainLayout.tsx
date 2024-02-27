import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {authService} from "../services";
import {token} from "../constants";



const MainLayout = () => {
    console.log('render MainLayout');

    authService.setToken(token);

    return (
        <div>
            <Header/>
            <h2>MainLayout</h2>
            <Outlet/>
        </div>
    );
};

export {MainLayout};