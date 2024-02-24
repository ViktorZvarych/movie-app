import {FC} from "react";

interface IProps {
    
}

const Pagination: FC<IProps> = ({}) => {
    console.log('render Pagination');

    return (
        <div>
            <h2>Pagination</h2>
        </div>
    );
};

export {Pagination};