import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOfFilmsService } from '../shared/list-of-films.service'

@Component({
  selector: 'app-list-of-films',
  templateUrl: './list-of-films.component.html',
  styleUrls: ['./list-of-films.component.sass']
})

export class ListOfFilmsComponent implements OnInit {
  private loading: boolean = true
  
  constructor(public listOfFilmsService:ListOfFilmsService) {}

  ngOnInit(): void {
    this.listOfFilmsService.downloadList()
      .subscribe(() => {
        this.loading = false
      })
  }

  

}
