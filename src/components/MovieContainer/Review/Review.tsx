import {FC} from "react";

import css from './Review.module.css'

interface IProps {

}

const Review: FC<IProps> = ({}) => {
    console.log('render Reviews');

    return (
        <div className={css.review}>
            <h2>Review</h2>
        </div>
    );
};

export {Review};