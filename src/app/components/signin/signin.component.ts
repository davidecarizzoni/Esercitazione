import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;


  constructor(private signin: LoginService, private fb: FormBuilder) { 
    this.signinForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(user){
    this.signin.addUser(user);
  }
}
