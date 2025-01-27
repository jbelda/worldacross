import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getTutors(): Observable<any> {
    return this.http.get('https://test.worldsacross.com/api/tutors');
  }
  getUsers(): Observable<any> {
    return this.http.get('https://test.worldsacross.com/api/users');
  }
  getBooking(): Observable<any> {
    return this.http.get('https://test.worldsacross.com/api/booking');
  }
}
