import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {authService} from "../services";
import {token} from "../constants";
import {useState} from "react";
import {IMovies} from "../interfaces";
import {useMovieContext, useThemeContext} from "../hooks";



const MainLayout = () => {
    console.log('render MainLayout');

    const themeContext = useThemeContext();
    const theme = themeContext?.theme;
    const changeTheme = themeContext?.changeTheme;

    console.log(theme, changeTheme);

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