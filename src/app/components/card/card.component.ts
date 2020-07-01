import { Input, Component, OnInit } from '@angular/core'
import { MovieModel } from '../../models/movie.model'
import { GenreService } from 'src/app/services/genre.service'
import { LocalStorageService } from '../../services/local-storage.service'
import { Subscribable, Subject } from 'rxjs'

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() movie: MovieModel
  @Input() justDel: boolean = false
  genres:string

  constructor(private genresService: GenreService,  private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  getGenres(movie: MovieModel) {
    this.genresService.searchGenres2(movie.genre_ids).subscribe(
      value => this.genres = value
    )

  }

  errorHandler(event) {
    event.target.src = "assets/close.png";
  }

  addFavoriteMovie(movie: MovieModel) { this.localStorageService.add(movie) }

  delFavoriteMovie(movie: MovieModel) { this.localStorageService.del(movie) }

}
