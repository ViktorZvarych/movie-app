import {FC, useEffect, useState} from "react";
import Badge from '@mui/material/Badge';

import css from './MovieInfoCard.module.css'
import {IMovieDetails} from "../../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";

interface IProps {
    movie: IMovieDetails
}

const MovieInfoCard: FC<IProps> = ({movie}) => {
    console.log('render MovieInfoCard');

    const {
        title,
        genres,
        vote_count,
        release_date,
        video,
        overview,
        vote_average,
        poster_path,
        budget,
        popularity
    } = movie;


    return (
        <div className={css.card}>
            <StarsRating stars={vote_average}/>

            <Badge badgeContent={genres.map(({name}) => name + '  ')} color="primary">

                <h3 className={css.cardTitle}>{title}</h3>
            </Badge>

            <p>Votes: {vote_count}</p>
                <p>Release date: {release_date.toString()}</p>
                <p>video: {video.toString()}</p>
                <p>Budget: $ {budget}</p>
                <p>Popularity: {popularity}</p>

                <p>{overview}</p>


            <PosterPreview imgUrl={poster_path} title={title}/>
        </div>
    );
};

export {MovieInfoCard};