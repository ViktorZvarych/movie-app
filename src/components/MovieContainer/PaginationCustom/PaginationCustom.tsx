import {Dispatch, FC, SetStateAction} from "react";
import Pagination from '@mui/material/Pagination';

import css from './PaginationCustom.module.css';
import {IMovies} from "../../../interfaces";

interface IProps {
    page: string;
    setPage: Dispatch<SetStateAction<string>>
}

const PaginationCustom: FC<IProps> = ({setPage}) => {
    console.log('render PaginationCustom');

    const handleChange = (e: any) => {
        setPage(e.target.innerText);
    }

    return (
        <div className={css.pagination}>
            <Pagination count={500} variant="outlined" shape="rounded" onChange={handleChange}/>
        </div>
    );
};

export {PaginationCustom};