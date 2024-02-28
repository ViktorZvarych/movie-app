import {useContext} from "react";

import {MovieContext} from "../hocs";

const useMovieContext = () => useContext(MovieContext)

export {useMovieContext}