import {FC} from "react";

import css from './GenreBadge.module.css';

interface IProps {

}

const GenreBadge: FC<IProps> = ({}) => {
    console.log('render GenreBadge');

    return (
        <div className={css.genreBadge}>
            <h2>GenreBadge</h2>
        </div>
    );
};

export {GenreBadge};