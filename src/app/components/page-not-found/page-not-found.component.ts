import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) { } //classe usiliaria predefinita, che mi permette di fare tante cose, tra cui navigare

  ngOnInit(): void {}

  returnToHome(){
    this.router.navigateByUrl('/home');
  }

}
