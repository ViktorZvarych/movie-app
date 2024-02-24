import {FC} from "react";

interface IProps {

}

const MovieInfo: FC<IProps> = ({}) => {
    console.log('render MovieInfo');

    return (
        <div>
            <h2>MovieInfo</h2>
        </div>
    );
};

export {MovieInfo};