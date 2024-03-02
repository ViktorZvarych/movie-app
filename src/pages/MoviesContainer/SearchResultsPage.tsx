import {MoviesList, PaginationCustom} from "../../components";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMovies} from "../../interfaces";
import {moviesService} from "../../services";

const SearchResultsPage = () => {
    console.log('render SearchResultsPage');
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
                const {data} = await moviesService.searchMovie(urlParams.join('&'));
                setMovies(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [urlSearchParams])


    return (
        <div>
            <h2>MoviesListPage</h2>

            {movies && <MoviesList movies={movies}/>}

            <PaginationCustom/>
        </div>
    );
};

export {SearchResultsPage};