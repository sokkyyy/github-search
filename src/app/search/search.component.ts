import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { GithubServiceService } from './../github-request/github-service.service';
import { User } from './../user';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchItem: string;
  user: User;
  repos;


  findProfile() {
    this.searchRequest.getUsersProfiles(this.searchItem);
    this.findRepos(this.searchItem);

    this.user = this.searchRequest.user;

  }

  findRepos(user) {
    const apiReposUrl = `${environment.apiUrl}${user}/repos${environment.apiKey}`;
    this.http.get(apiReposUrl).subscribe(response => {
      this.repos = response;
      console.log(this.repos);
    });
  }


  constructor(private searchRequest: GithubServiceService, private http: HttpClient) {
  }

  ngOnInit() {
  }

  

}
