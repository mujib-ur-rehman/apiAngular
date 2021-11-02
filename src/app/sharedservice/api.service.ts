import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  postdata(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data);
  }
  getdata() {
    return this.http.get<any>('http://localhost:3000/posts');
  }
}
