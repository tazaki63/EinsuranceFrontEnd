import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CEO} from 'src/ceo';
@Injectable({
  providedIn: 'root'
})
export class CeoService {

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get<CEO[]>('http://localhost:8080/ceos/allCEOs');
  }

  public create(ceo){
    return this.http.post<CEO>('http://localhost:8080/ceos/createCEO', ceo);
  }

  public delete(ceo){
    return this.http.delete<CEO>('http://localhost:8080/ceos/'+ceo.ceo_id);
  }

  public get(ceo){
    return this.http.get<CEO>('http://localhost:8080/ceos/'+ceo.ceo_id);
  }

  public update(ceo){
    return this.http.put<CEO>('http://localhost:8080/ceos/update/'+ceo.ceo_id, ceo);
  }

}
