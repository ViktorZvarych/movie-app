import {useEffect, useState} from "react";

import {MoviesList} from "../../components";
import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";
import {useSearchParams} from "react-router-dom";
import {useMoviesListsContext} from "../../hooks";

const MoviesListPage = () => {
    console.log('render MoviesListPage');

    const moviesListsContext = useMoviesListsContext();
    const firstPageMoviesList = moviesListsContext?.firstPageMoviesList;

    const [movies, setMovies] = useState<IMovie[] | null>(null);

    const [urlSearchParams, ] = useSearchParams();
    
    useEffect(() => {
        const urlParams = [];

        for (const [key, value] of urlSearchParams.entries()) {
            urlParams.push(`${key}=${value}`);
        }

        console.log(urlParams[0])
        
        if (urlParams[0]) {
            try {
                (async (): Promise<void> => {
                    const {data} = await moviesService.getMovies(urlParams.join('&'));
                    setMovies(data.results);
                })()
            } catch (e) {
                console.log(e);
            }
        } else {
            firstPageMoviesList && setMovies(firstPageMoviesList);
        }
    }, [firstPageMoviesList, urlSearchParams])


    return (
        <div>
            {/*<h2>MoviesListPage</h2>*/}

            {movies &&
                <div>
                    <MoviesList movies={movies}/>
                </div>
            }

        </div>
    );
};

export {MoviesListPage};