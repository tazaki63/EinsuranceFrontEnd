import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='';
  password='';
  invalidLogin:boolean=false;
  constructor(private loginService:AuthenticationService, private router:Router ) { }

  ngOnInit(): void {
  }

  checkLogin(){
    if(this.loginService.authenticate(this.username,this.password)){
      this.router.navigate(['create-agent']); ////need to change view here
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true;
    }
  }

}
