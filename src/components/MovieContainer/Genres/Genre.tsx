import {FC} from "react";
import {IGenre} from "../../../interfaces";

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    console.log('render Genre');

    return (
        <div>
            <p>{genre.name}</p>
        </div>
    );
};

export {Genre};