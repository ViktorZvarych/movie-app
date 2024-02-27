import {FC} from "react";

import css from './Reviews.module.css'

interface IProps {

}

const Reviews: FC<IProps> = ({}) => {
    console.log('render Reviews');

    return (
        <div className={css.reviews}>
            <h2>Review</h2>
        </div>
    );
};

export {Reviews};