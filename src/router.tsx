import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout, PublicLayout, PrivateLayout} from './layouts';
import {ErrorPage, LoginPage, MovieInfoPage, MoviesPage, MoviesListPage, RegisterPage, SignInPage} from "./pages";
import {AuthProvider, MovieContextProvider} from './hocs';
import {ThemeContextProvider} from "./hocs/ThemeContextProider";

const router = createBrowserRouter([
    {
        path: '', element: <ThemeContextProvider><MainLayout/></ThemeContextProvider>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'login'}/>
            },
            {
                element: <PublicLayout/>, children: [
                    {
                        path: 'login', element: <LoginPage/>, children: [
                            {
                                path: 'register', element: <RegisterPage/>
                            },
                            {
                                path: 'signin', element: <SignInPage/>
                            }
                        ]
                    }
                ]
            },
            {
                element: <AuthProvider><MovieContextProvider><PrivateLayout/></MovieContextProvider></AuthProvider>, children: [
                    {
                        path: 'movies', element: <MoviesPage/>, children: [
                            {
                                index: true, element: <Navigate to={'list'}/>
                            },
                            {
                                path: 'list', element: <MoviesListPage/>
                            },
                            {
                                path: 'sorted', element: <MoviesListPage/>
                            },
                            {
                                path: 'search-results', element: <MoviesListPage/>
                            },
                            {
                                path: 'info/:id', element: <MovieInfoPage/>
                            },
                        ]
                    },

                ]
            }
        ]
    }
])

export {router}