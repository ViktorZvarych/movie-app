import {Outlet} from "react-router-dom";
import {PopularList, TopRatedList, UpcomingList} from "../../components";

const MoviesPage = () => {
    console.log('render MoviesPage');

    return (
        <div>
            {/*<h2>MoviesPage</h2>*/}

            <Outlet/>

            <TopRatedList/>
            <PopularList/>
            <UpcomingList/>
        </div>
    );
};

export {MoviesPage};