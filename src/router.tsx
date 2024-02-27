import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout, PublicLayout, PrivateLayout} from './layouts';
import {ErrorPage, LoginPage, MovieInfoPage, MoviesPage, MoviesListPage, RegisterPage, SignInPage} from "./pages";
import {AuthProvider} from './hocs';
import {PosterPreview} from "./components";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
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
                element: <AuthProvider><PrivateLayout/></AuthProvider>, children: [
                    {
                        path: 'movies', element: <MoviesPage/>, children: [
                            {
                                index: true, element: <Navigate to={'list'}/>
                            },
                            {
                                path: 'list', element: <MoviesListPage/>
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