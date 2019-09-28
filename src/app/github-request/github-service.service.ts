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

  arr1 = [];


  constructor(private http: HttpClient) {
    this.user = new User(0, '', '');
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

  personalRepository() {
    const apiUrl = `${environment.apiUrl}sokkyyy/repos${environment.apiKey}`;

    // interface ApiResponse {

      // id: number;
      // name: string;
      // html_url: string;
    // }

    const repoPromise = new Promise((resolve, reject) => {
      this.http.get(apiUrl).toPromise().then(
      response => {
        //let repoArr = [];
        let repoObj = {
          id: 0,
          name: '',
          url: '',
        };
        for (let i = 0; i < 10; i++) {
          repoObj.id = response[i].id;
          repoObj.name = response[i].name;
          repoObj.url = response[i].html_url;

          this.arr1.push(repoObj);
          console.log(repoObj);
        }
        console.log(this.arr1);
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
