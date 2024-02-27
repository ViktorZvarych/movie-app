import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    console.log('render Header');

    return (
        <div className={css.header}>
            <nav>
                <ul>
                    <NavLink to={'/'}>Home</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export {Header};