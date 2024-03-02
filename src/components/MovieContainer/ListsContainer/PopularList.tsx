import {useEffect, useState} from "react";

import {IMovie, IMovies} from "../../../interfaces";
import {moviesService} from "../../../services";
import css from "../MoviesList/MoviesList.module.css";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useNavigate} from "react-router-dom";
import {useScrollToTop} from "../../../hooks";

const PopularList = () => {
    console.log('render PopularList');

    const [movies, setMovies] = useState<IMovies | null>(null);

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getPopularList();
                setMovies(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [])

    const navigate = useNavigate();

    const {scrollTopHandler} = useScrollToTop();

    return (
        <section className={css.moviesList}>
            <h2>PopularList</h2>
            {
                movies && typeof movies !== 'undefined'
                &&
                <div>
                    <ul>
                        {movies.results.map((movie: IMovie) =>
                            <li onClick={() => {
                                navigate(`info/${movie.id}`);
                                scrollTopHandler()
                            }}
                                key={movie.id}>
                                <MoviesListCard movie={movie}/>
                            </li>)}
                    </ul>
                </div>
            }
            <hr/>
        </section>
    );
};

export {PopularList};