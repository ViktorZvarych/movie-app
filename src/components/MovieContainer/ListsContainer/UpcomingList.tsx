import css from "../MoviesList/MoviesList.module.css";
import {IMovie, IMovies} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useEffect, useState} from "react";
import {moviesService} from "../../../services";
import {useNavigate} from "react-router-dom";
import {useScrollToTop} from "../../../hooks";

const UpcomingList = () => {
    console.log('render UpcomingList');

    const [movies, setMovies] = useState<IMovies | null>(null);

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getUpcomingList();
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
            <h2>UpcomingList</h2>
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

export {UpcomingList};