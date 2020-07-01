import { Component } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Bacup-IT';

  constructor() {}

  scrollUp() {
      window.scrollTo(0,0)
  }
}
