import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',  //poi lo richiamo nell'app menu, per poterlo utilizzare
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  utente = sessionStorage.getItem('user');
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
