import {FC} from "react";

import css from './MoviesList.module.css';
import {IMovie, IMovies} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {PaginationCustom} from "../PaginationCustom/PaginationCustom";

interface IProps {
    movies: IMovies
}

const MoviesList: FC<IProps> = ({movies}) => {
    console.log('render MoviesList');

    return (
        <section className={css.moviesList}>
            {/*<h2>MoviesList</h2>*/}
            {
                movies && typeof movies !== 'undefined'
                &&
                <div>
                    <PaginationCustom/>
                    <ul>
                        {movies.results.map((movie: IMovie) => <li key={movie.id}><MoviesListCard movie={movie}/></li>)}
                    </ul>
                    <PaginationCustom/>
                </div>
            }
            <hr/>
        </section>
    );
};

export {MoviesList};