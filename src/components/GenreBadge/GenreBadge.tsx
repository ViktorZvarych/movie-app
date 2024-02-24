import {FC} from "react";

interface IProps {

}

const GenreBadge: FC<IProps> = ({}) => {
    console.log('render GenreBadge');

    return (
        <div>
            <h2>GenreBadge</h2>
        </div>
    );
};

export {GenreBadge};