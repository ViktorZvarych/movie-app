import {useEffect, useState} from "react";

import {moviesService} from "../../../services";
import {IMovie, IMovies} from "../../../interfaces";
import css from './MoviesList.module.css';
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {PaginationCustom} from "../PaginationCustom/PaginationCustom";

const MoviesList = () => {
    console.log('render MoviesList');

    const [movies, setMovies] = useState<IMovies | null>(null);

    const [page, setPage] = useState<string>('1');

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getMovies(page);
                setMovies(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [page])

    useEffect(() => {
        console.log(movies);
    }, [movies]);

    return (
        <div className={css.moviesList}>
            <h2>MoviesList</h2>
            {
                movies && typeof movies !== 'undefined'
                &&
                <div>
                    {movies.results.map((movie: IMovie) => <MoviesListCard key={movie.id} movie={movie}/>)}

                    <PaginationCustom page={page} setPage={setPage}/>
                </div>
            }
            <hr/>
        </div>
    );
};

export {MoviesList};