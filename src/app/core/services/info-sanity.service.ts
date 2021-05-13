import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InfoSanityService {
  constructor(private httpClient: HttpClient) {}

  // TODO: replace with actual API logic
  getContent(): Observable<any> {
    return this.httpClient
      .get<any>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        retry(1),
        catchError((error) => throwError(error))
      );
  }
}
