import {createContext, FC, PropsWithChildren, useState} from "react";
import {IMovieContext, IMoviesParams} from "../interfaces";

interface IProps extends PropsWithChildren {
}

const MovieContext = createContext<IMovieContext | null>(null);

const MovieContextProvider: FC<IProps> = ({children}) => {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => setTheme(prev => prev === 'dark' ? 'dark' : 'light')

    const moviesParams: IMoviesParams = {
        page: '1',
        genres: [],
        search: '',
        sortBy: '',
    }

    return (
        <MovieContext.Provider value={{moviesParams, theme, changeTheme}}>
                {children}
        </MovieContext.Provider>
    );
};

export {MovieContext, MovieContextProvider}