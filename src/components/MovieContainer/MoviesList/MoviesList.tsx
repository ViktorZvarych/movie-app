import {FC} from "react";

import css from './MoviesList.module.css';
import {IMovie, IMovies} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

interface IProps {
    movies: IMovies
}

const MoviesList: FC<IProps> = ({movies}) => {
    console.log('render MoviesList');

    return (
        <section className={css.moviesList}>
            <h2>MoviesList</h2>
            {
                movies && typeof movies !== 'undefined'
                &&
                <ul>
                    {movies.results.map((movie: IMovie) => <li key={movie.id}><MoviesListCard movie={movie}/></li>)}
                </ul>
            }
            <hr/>
        </section>
    );
};

export {MoviesList};