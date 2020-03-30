import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private loginService:LoginService,private  router:Router){}
  
  ngOnInit(): void {}

  login(username:string, password:string){
    if(this.loginService.isPres(username,password)){
      this.router.navigateByUrl('/home');
    }
  }
  

}
