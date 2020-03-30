import { Injectable } from '@angular/core';
import { User } from '../model/user-item.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private controllo:boolean;

  constructor() {}

  private userList: User[] = [
    {username:'Davide', password:'12345'},
    {username:'Luca', password:'1234'},
    {username:'Andrea', password:'123'}
  ];

  isPres(username: string, password: string): boolean {
    this.controllo  = false;
    this.userList.forEach(element => {
      if(element.username === username && element.password === password){
        this.controllo = true;
        //sessionStorage.setItem('user',username);
        //sessionStorage.setItem('pw',password);
      } 
    });
    return this.controllo;
  }
}
