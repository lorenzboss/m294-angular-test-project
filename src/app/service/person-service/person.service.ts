import { Injectable } from '@angular/core';
import { Person } from '../../data/person';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  readonly backendUrl = 'person';

  constructor(private http: HttpClient) {}

  public getList(): Observable<Person[]> {
    return this.http.get<Person[]>(
      environment.backendBaseUrl + this.backendUrl
    );
  }

  public save(person: Person): Observable<Person> {
    return this.http.post<Person>(
      environment.backendBaseUrl + this.backendUrl,
      person
    );
  }
}
