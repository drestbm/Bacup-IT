import { Component, OnInit } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';

@Component({
  selector: 'app-list-of-films',
  templateUrl: './list-of-films.component.html',
  styleUrls: ['./list-of-films.component.sass']
})
export class ListOfFilmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
