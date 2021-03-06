import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get<Customer[]>('http://localhost:8080/customers/allCustomers');
  }

  public create(customer){
    return this.http.post<Customer>('http://localhost:8080/customers/createCustomer', customer);
  }

  public delete(customer){
    return this.http.delete<Customer>('http://localhost:8080/customers/'+customer.customerId);
  }

  public get(customer){
    return this.http.get<Customer>('http://localhost:8080/customers/'+customer.customerId);
  }

  public update(customer){
    return this.http.put<Customer>('http://localhost:8080/customers/update/'+customer.customerId, customer);
  }
}
