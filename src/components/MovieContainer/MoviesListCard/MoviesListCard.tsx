import {FC} from "react";

import css from './MoviesListCard.module.css';
import {IMovie} from "../../../interfaces";
import {Navigate, useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    console.log('render MoviesListCard');
    const {id, title} = movie;

    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate(`../info/${id}`)
    }

    return (
        <div className={css.moviesList}>
            <h3>{title}</h3>
            <button onClick={onClickHandler}>Movie details</button>
        </div>
    );
};

export {MoviesListCard};