import {useEffect, useState} from "react";

import {MoviesList} from "../../components";
import {IMovies} from "../../interfaces";
import {moviesService} from "../../services";
import {useSearchParams} from "react-router-dom";

const MoviesListPage = () => {
    console.log('render MoviesListPage');

    const [movies, setMovies] = useState<IMovies | null>(null);

    const [urlSearchParams, ] = useSearchParams();

    useEffect(() => {
        const urlParams = [];

        for (const [key, value] of urlSearchParams.entries()) {
            urlParams.push(`${key}=${value}`);
        }

        console.log(urlParams[0])

        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getMovies(urlParams.join('&'));
                setMovies(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [urlSearchParams])


    return (
        <div>
            <h2>MoviesListPage</h2>

            {movies &&
                <div>
                    <MoviesList movies={movies}/>
                </div>
            }

        </div>
    );
};

export {MoviesListPage};