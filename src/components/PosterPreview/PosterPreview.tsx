import {FC} from "react";

interface IProps {

}

const PosterPreview: FC<IProps> = ({}) => {
    console.log('render PosterPreview');

    return (
        <div>
            <h2>PosterPreview</h2>
        </div>
    );
};

export {PosterPreview};