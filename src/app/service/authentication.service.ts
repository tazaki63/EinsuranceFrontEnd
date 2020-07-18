import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  authenticate(username, password){
    return this.http.post<any>('http://localhost:8080/generate-tokens', {username,password}).pipe(
      map(
        userData=>{
          sessionStorage.setItem('username',username);
          return userData;
        }
      )
    )
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('username');
    console.log(!user===null);
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('username');
  }

}
