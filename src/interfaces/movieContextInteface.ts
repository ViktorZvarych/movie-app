import {IMoviesParams} from "./moviesParamsInterface";


export interface IMovieContext {
    moviesParams: IMoviesParams;
    theme: string;
    changeTheme: () => void;
}