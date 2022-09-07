import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../data.service';

@Injectable({
  providedIn: 'root',
})
export class GithubFollowersService extends DataService {
  constructor(httpClient: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', httpClient);
  }
}
