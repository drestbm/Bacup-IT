export interface Film {
    popularity: number
    vote_count: number
    video: boolean
    poster_path: string
    id: number
    adult: false
    backdrop_path: string
    original_language: string
    original_title: string
    genre_ids: Array<number>
    title: string
    vote_average: number
    overview: string
    release_date: string
}

export interface ListOfFilms {
    page: number
    total_results: number
    total_pages: number
    results: Array<Film>
}