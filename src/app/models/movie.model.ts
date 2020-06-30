export interface MovieModel {
    poster_path: string
    id: number
    genre_ids: Array<number>
    title: string
    release_date: string
    isFavorite: boolean
}