import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {GenresList} from "../MovieContainer/Genres/GenresList";
import {SortInput} from "../MovieContainer/SortInput/SortInput";
import {SearchInput} from "../SearchInput/SearchInput";

const Header = () => {
    console.log('render Header');

    return (
        <div className={css.header}>
            <nav>
                <ul>
                    <NavLink to={'/'}>Home</NavLink>
                </ul>
            </nav>

            <SearchInput/>

            <GenresList/>

            <SortInput/>

            <hr/>
        </div>
    );
};

export {Header};