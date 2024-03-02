import {FC} from "react";
import Badge from '@mui/material/Badge';

import css from './MovieInfoCard.module.css'
import {IMovieDetails} from "../../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {urls} from "../../../constants";

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
        popularity,
        backdrop_path
    } = movie;

    return (
        <article className={css.article}>

            <div className={css.card}>

                <div className={css.titleContainer}>
                    <Badge badgeContent={genres.map(({name}) => name + '  ')} color="success" sx={{ "& .MuiBadge-badge": { fontSize: 12, height: 25, minHeight: 15 } }}>
                        <h3 className={css.cardTitle}>{title}</h3>
                    </Badge>
                </div>

                <img src={urls.movies.backdrop(backdrop_path)} alt={title}/>

                <PosterPreview imgUrl={poster_path} title={title}/>

                <StarsRating stars={vote_average}/>

                <p>Votes: {vote_count}</p>
                <p>Release date: {release_date.toString()}</p>
                <p>video: {video.toString()}</p>
                <p>Budget: $ {budget}</p>
                <p>Popularity: {popularity}</p>
                <p>{overview}</p>
            </div>


        </article>
    );
};

export {MovieInfoCard};