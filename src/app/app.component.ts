import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListOfFilmsService } from './shared/list-of-films.service'


@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Bacup-IT';
  name: string = ""

  constructor(public listOfFilmsService:ListOfFilmsService) {}

  onChangeName() {
    if (this.name !== "")
      this.listOfFilmsService.searchFilm(this.name)
  }
}
