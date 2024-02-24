import {FC} from "react";

interface IProps {
    
}

const MoviesListCard: FC<IProps> = ({}) => {
    console.log('render MoviesListCard');

    return (
        <div>
            <h2>MoviesListCard</h2>
        </div>
    );
};

export {MoviesListCard};