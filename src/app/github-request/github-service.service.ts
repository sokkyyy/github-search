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

  repositories;

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
          this.oneRepo.id = response[0].id;
          this.oneRepo.name = response[0].name;
          this.oneRepo.url = response[0].html_url;

          console.log(this.oneRepo);

          resolve();
        },
        error => {
          console.log('error');

          reject(error);
        });
    });

    return oneRepoPromise;

  }



// debug starting with one repo
  personalRepository() {
    const apiUrl = `${environment.apiUrl}sokkyyy/repos${environment.apiKey}`;

    // interface ApiResponse {

      // id: number;
      // name: string;
      // html_url: string;
    // }
    let repoArr = [];
    let repoObj = {
      id: 0,
      name: '',
      url: ''
    };
    const repoPromise = new Promise((resolve, reject) => {
      this.http.get(apiUrl).toPromise().then(
      response => {
        for (let i = 0; i < 10; i++) {
          //  const repoObj = new Repository(response[i].id, response[i].name, response[i].html_url);
          //  repoArr.push(repoObj);
          repoObj.id = response[i].id;
          repoObj.name = response[i].name;
          repoObj.url = response[i].html_url;

          repoArr.push(repoObj);
        }
        this.repositories = repoArr;

        console.log(this.repositories);
        resolve();
      },
      error => {
        // HANDLE BETTER
        console.log('error');

        reject(error);
      });
    });
    return repoPromise;
  }


}
