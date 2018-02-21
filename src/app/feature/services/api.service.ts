import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiClient } from '@feature/services/types';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class ApiService implements IApiClient {
  constructor(private readonly httpClient: HttpClient) { }

  public get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(path)
      .pipe(
        catchError(err => ErrorObservable.create(err))
      );
  }
}
