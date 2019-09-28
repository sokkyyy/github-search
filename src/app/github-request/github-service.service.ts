import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../user';
import { environment } from './../../environments/environment';
import { Repository } from './../repository';


@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  user: User;

  oneRepo: Repository;




  constructor(private http: HttpClient) {
    this.user = new User(0, '', '');
    this.oneRepo = new Repository(0, '', '');

  }

  personalDetailsRequest() {
    const apiUrl = `${environment.apiUrl}sokkyyy${environment.apiKey}`;

    interface ApiResponse {
      id: number;
      login: string;
      avatar_url: string;
    }

    const detailsPromise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(apiUrl).toPromise().then(
      response => {
        this.user.id = response.id;
        this.user.username = response.login;
        this.user.avatarUrl = response.avatar_url;

        resolve();
      },
      error => {
        // HANDLE BETTER
        console.log('error');

        reject(error);
      });
    });
    return detailsPromise;
  }

  // Try to request for only one repo
  requestOneRepo() {
    const apiUrl = `${environment.apiUrl}sokkyyy/repos${environment.apiKey}`;
    const oneRepoPromise = new Promise((resolve, reject) => {
      this.http.get(apiUrl).toPromise().then(
        response => {
          this.oneRepo.id = response[2].id;
          this.oneRepo.name = response[2].name;
          this.oneRepo.url = response[2].html_url;

          resolve();
        },
        error => {
          console.log('error');

          reject(error);
        });
    });

    return oneRepoPromise;

  }


}
