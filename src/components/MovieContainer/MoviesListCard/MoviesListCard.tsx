import {FC} from "react";

import css from './MoviesListCard.module.css';
import {IMovie} from "../../../interfaces";
import {useNavigate} from "react-router-dom";
import {StarsRating} from "../StarsRating/StarsRating";
import {urls} from "../../../constants";

interface IProps {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    console.log('render MoviesListCard');
    const {id, title, vote_average, backdrop_path, } = movie;

    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate(`../info/${id}`)
    }

    return (
        <div className={css.moviesList}>
            <h3>{title}</h3>
            <img src={urls.movies.backdrop(backdrop_path)} alt={title}/>
            <StarsRating stars={vote_average}/>
            <button onClick={onClickHandler}>Movie details</button>
        </div>
    );
};

export {MoviesListCard};