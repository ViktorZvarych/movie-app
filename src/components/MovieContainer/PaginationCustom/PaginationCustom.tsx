import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import Pagination from '@mui/material/Pagination';

import css from './PaginationCustom.module.css';
import {useSearchParams} from "react-router-dom";


const PaginationCustom = () => {
    console.log('render SearchInput');

    const [currentPage, setCurrentPage] = useState<string>('');

    const [urlParams, setUrlParams] = useSearchParams();

    useEffect(() => {
        if (currentPage) {
            setUrlParams(prev => {
                prev.set('page', currentPage.toString());
                return prev
            })
        }
    }, [currentPage]);

    const handleChange = (e: any) => {
        setCurrentPage(e.target.innerText);
    }

    return (
        <div className={css.pagination}>
            <Pagination count={500} variant="outlined" shape="rounded" onChange={handleChange}/>
        </div>
    );
};

export {PaginationCustom};