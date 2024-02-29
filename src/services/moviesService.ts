import {apiService} from "./apiService";
import {urls} from "../constants";
import {IGenres, IMovieDetails, IMovies} from "../interfaces";
import {IRes} from "../types/axiosResponseType";

const moviesService = {
    getMovies: (params: string): IRes<IMovies> => apiService.get(urls.movies.allMovies + `?${params}`),
    getGenres: (): IRes<IGenres> => apiService.get(urls.movies.genres),

    searchMovie: (searchQuery: string, params: string) => apiService.get(urls.movies.search + `?${searchQuery}&${params}`),

    getMovieDetailsById: (id: number): IRes<IMovieDetails> => apiService.get(urls.movies.movieDetailsById(id)),
    getVideos: (id: number): IRes<[]> => apiService.get(urls.movies.videos(id)),
    getReviews: (id: number): IRes<[]> => apiService.get(urls.movies.reviews(id)),
    addRating: (id: number, rating: number): IRes<[]> => apiService.get(urls.movies.rating(id)),

    getPopularList: (): IRes<[]> => apiService.get(urls.movies.popularList),
    getTopRatedList: (): IRes<[]> => apiService.get(urls.movies.topRatedList),
    getUpcomingList: (): IRes<[]> => apiService.get(urls.movies.upcomingList)
}

export {moviesService};