import {FC} from "react";

interface IProps {

}

const StarsRating: FC<IProps> = ({}) => {
    console.log('render StarsRating');

    return (
        <div>
            <h2>StarsRating</h2>
        </div>
    );
};

export {StarsRating};