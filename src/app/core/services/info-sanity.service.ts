import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InfoSanityService {
  constructor(private httpClient: HttpClient) {}
  private BASE_URL = environment.apiUrl;

  getContent(): Observable<any> {
    return this.httpClient
      .get<any>(`${this.BASE_URL}/content`)
      .pipe(
        retry(1),
        catchError((error) => throwError(error))
      );
  }

  getTags(): Observable<any> {
    return this.httpClient
      .get<any>(`${this.BASE_URL}/tags`)
      .pipe(
        retry(1),
        catchError((error) => throwError(error))
      );
  }
}
