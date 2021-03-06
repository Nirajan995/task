import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interface/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.url + `${id}`);
  }
}
