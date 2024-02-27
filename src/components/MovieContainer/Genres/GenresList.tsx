import {useEffect, useState} from "react";

import {IGenre, IGenres} from "../../../interfaces";
import {moviesService} from "../../../services";
import {Genre} from "./Genre";

const GenresList = () => {
    console.log('render GenresList');

    const [genres, setGenres] = useState<IGenres | null>(null);

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getGenres();
                setGenres(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        console.log(genres);
    }, [genres]);

    return (
        <div>
            <h2>Genres</h2>
            {
                genres
                &&
                genres.genres.map((genre: IGenre) => <Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export {GenresList};