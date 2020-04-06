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
    { username:'Davide', password:'12345',admin:true },
    { username:'Luca', password:'1234',admin:false },
    { username:'Andrea', password:'123',admin:false }
  ];

  isPres(username: string, password: string): boolean {
    let controllo  = false;
    this.userList.forEach(element => {
      if(element.username === username && element.password === password){
        element.admin === true ? sessionStorage.setItem('privilege','admin') : sessionStorage.setItem('privilege','user')
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

  addUser(user:User){
    user.admin = false;
    console.log(user);    
    this.userList.push(user);
  }
}
