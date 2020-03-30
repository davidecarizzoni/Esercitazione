import { Injectable } from '@angular/core';
import { User } from '../model/user-item.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private router:Router) {

  }

  private userList: User[] = [
    {username:'Davide', password:'12345'},
    {username:'Luca', password:'1234'},
    {username:'Andrea', password:'123'}
  ];

  isPres(username: string, password: string): boolean {
    let controllo  = false;
    this.userList.forEach(element => {
      if(element.username === username && element.password === password){
        controllo = true;
      } 
    });
    return controllo;
  }

  executeLogin(username: string, password: string){
    if(this.isPres(username,password)){
      //se giusto memorizza le informazioni nel session starage
      sessionStorage.setItem('user', username);
      
      this.router.navigateByUrl('/home');
    }
  }


  executeLoginSession(){
    let username = sessionStorage.getItem('user');
    let password = sessionStorage.getItem('password');

    if(this.isPres(username,password)){
      this.router.navigateByUrl("/home");
    }
  }
}
