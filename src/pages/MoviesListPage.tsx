import {GenresList, MoviesList} from "../components";

const MoviesListPage = () => {
    console.log('render MoviesListPage');

    return (
        <div>
            <h2>MoviesListPage</h2>

            <GenresList/>
            <MoviesList/>
        </div>
    );
};

export {MoviesListPage};