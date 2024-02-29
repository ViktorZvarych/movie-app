import {createContext, FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovieContext, IMoviesParams, newMovieParam} from "../interfaces";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
}

const MovieContext = createContext<IMovieContext | null>(null);

const MovieContextProvider: FC<IProps> = ({children}) => {
    const [moviesParams, setMoviesParams] = useState<IMoviesParams>({
        page: '',
        with_genres: '',
        sort_by: '',
    });

    const changeMoviesParams = (movieKey: keyof IMoviesParams, value: string) => {
        setMoviesParams((prev: IMoviesParams) => ({ ...prev, [movieKey]: value }));
    };

    return (
        <MovieContext.Provider value={{moviesParams, changeMoviesParams}}>
            {children}
        </MovieContext.Provider>
    );
};

export {MovieContext, MovieContextProvider}