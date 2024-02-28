import {FC, useEffect, useState} from "react";

import {IGenre} from "../../../interfaces";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";


interface IProps {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {
    console.log('render Genre');

    const {id} = genre

    const [clicked, setClicked] = useState<boolean>(false);

    const [urlParams, setUrlParams] = useSearchParams();

    const params = Array.from(urlParams.entries());

    console.log(params);

    const page = urlParams.get('page') || '1';

    const clickHandler = () => {
        !clicked
            ? setUrlParams({page: page.toString(), genres: id.toString()})
            : setUrlParams({genres: ''})
        setClicked(prev => !prev);
    }

    return (
        <button onClick={clickHandler}>
            <p>{genre.name}</p>
        </button>
    );
};

export {Genre};