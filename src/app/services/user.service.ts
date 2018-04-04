import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { user } from '../models/user.model';

@Injectable()
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }
  getUser(): Observable<user[]> {
    return this.http.get<user[]>(this.serviceUrl);
}
}
