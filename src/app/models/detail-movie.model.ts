import { MovieModel } from './movie.model'

export interface DetailMovieModel extends MovieModel {
    adult: boolean
    budget: number
    genres: [
        {
            id: number
            name: string
        }
    ]
    overview: string
    popularity: number
    production_companies: [
        {
            logo_path: string
            name: string
        }
    ]
    production_countries: [
        {
            name: string
        }
    ]
    status: string
    vote_average: number
    vote_count: number
}