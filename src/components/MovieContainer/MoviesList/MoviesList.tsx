import {FC} from "react";

import css from './MoviesList.module.css';
import {IMovie, IMovies} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {PaginationCustom} from "../PaginationCustom/PaginationCustom";
import {useNavigate} from "react-router-dom";

interface IProps {
    movies: IMovies
}

const MoviesList: FC<IProps> = ({movies}) => {
    console.log('render MoviesList');

    const navigate = useNavigate();

    return (
        <section className={css.moviesList}>
            {/*<h2>MoviesList</h2>*/}
            {
                movies && typeof movies !== 'undefined'
                &&
                <div>
                    <ul>
                        {movies.results.map((movie: IMovie) =>
                            <li onClick={() => navigate(`../info/${movie.id}`)}
                                key={movie.id}>
                                <MoviesListCard movie={movie}/>
                            </li>)}
                    </ul>
                    <PaginationCustom/>
                </div>
            }
            <hr/>
        </section>
    );
};

export {MoviesList};