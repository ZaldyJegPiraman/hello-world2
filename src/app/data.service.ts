import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    @Inject(String) private url: string,
    private httpClient: HttpClient
  ) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.url).pipe(map((response) => response));
  }

  create(resource: any): Observable<any> {
    //return throwError('create fake error!');
    return this.httpClient
      .post(this.url, JSON.stringify(resource))
      .pipe(map((response) => response));
  }

  update(resource: any): Observable<any> {
    return this.httpClient
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(map((response) => response));
  }

  delete(id: number): Promise<any> {
    //return throwError('delete fake error!');

    return this.httpClient
      .delete(this.url + '/' + id)
      .pipe(map((response) => response))
      .toPromise();
  }
}
