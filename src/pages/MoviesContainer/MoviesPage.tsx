import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    console.log('render MoviesPage');

    return (
        <div>
            <h2>MoviesPage</h2>

            <Outlet/>
        </div>
    );
};

export {MoviesPage};