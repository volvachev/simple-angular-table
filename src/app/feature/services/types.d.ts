import { Observable } from 'rxjs/Observable';

interface IApiClient {
  get<T>(path: string, options?: any): Observable<T>;
}