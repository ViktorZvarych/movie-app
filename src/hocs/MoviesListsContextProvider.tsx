import {createContext, FC, PropsWithChildren, useEffect, useState} from "react";

import {IMovies} from "../interfaces";
import {moviesService} from "../services";

interface IProps extends PropsWithChildren {
}

const MoviesListsContext = createContext<IMovies | null>(null);

const MoviesListsContextProvider: FC<IProps> = ({children}) => {
    const [topRatedMoviesList, setTopRatedMoviesList] = useState<IMovies | null>(null);
    const [popularMoviesList, setPopularMoviesList] = useState<IMovies | null>(null);
    const [upcomingMoviesList, setUpcomingMoviesList] = useState<IMovies | null>(null);

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getTopRatedList();
                setTopRatedMoviesList(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getPopularList();
                setPopularMoviesList(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getUpcomingList();
                setUpcomingMoviesList(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [])


    return (
        <MoviesListsContext.Provider value={{topRatedMoviesList}}>
                {children}
        </MoviesListsContext.Provider>
    );
};

export {MoviesListsContext, MoviesListsContextProvider}