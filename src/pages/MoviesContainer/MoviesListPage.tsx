import {useEffect, useState} from "react";

import {GenresList, MoviesList, PaginationCustom} from "../../components";
import {IMovies} from "../../interfaces";
import {moviesService} from "../../services";
import {useMovieContext} from "../../hooks";

const MoviesListPage = () => {
    console.log('render MoviesListPage');

    const [movies, setMovies] = useState<IMovies | null>(null);

    const movieContext = useMovieContext();
    const moviesParams = movieContext?.moviesParams

    console.log(moviesParams)

    const [currentPage, setCurrentPage] = useState<string>( '1');

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getMovies(currentPage);
                setMovies(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [currentPage])

    return (
        <div>
            <h2>MoviesListPage</h2>

            {/*<GenresList/>*/}

            {/*{movies && <MoviesList movies={movies}/>}*/}

            <PaginationCustom page={currentPage} setPage={setCurrentPage}/>
        </div>
    );
};

export {MoviesListPage};