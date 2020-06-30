import { MovieModel } from './movie.model'

export interface MoviesModel {
    page: number
    total_results: number
    total_pages: number
    results: Array<MovieModel>
}