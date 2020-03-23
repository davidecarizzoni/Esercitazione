import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',  //poi lo richiamo nell'app menu, per poterlo utilizzare
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
