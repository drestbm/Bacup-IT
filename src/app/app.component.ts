import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Bacup-IT';
  nameFilmControl = new FormControl('');

  onChangeName() {
    console.log(this.nameFilmControl)
  }
}
