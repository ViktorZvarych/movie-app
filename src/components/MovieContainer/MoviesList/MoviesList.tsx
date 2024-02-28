import {useEffect, useState} from "react";

import {moviesService} from "../../../services";
import {IMovie, IMovies} from "../../../interfaces";
import css from './MoviesList.module.css';
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import {FC} from "react";

interface IProps {
    movies: IMovies
}

const MoviesList: FC<IProps> = ({movies}) => {
    console.log('render MoviesList');

    return (
        <div className={css.moviesList}>
            <h2>MoviesList</h2>
            {
                movies && typeof movies !== 'undefined'
                &&
                <div>
                    {movies.results.map((movie: IMovie) => <MoviesListCard key={movie.id} movie={movie}/>)}
                </div>
            }
            <hr/>
        </div>
    );
};

export {MoviesList};