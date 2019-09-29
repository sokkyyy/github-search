import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { GithubServiceService } from './../github-request/github-service.service';
import { User } from './../user';
import { Repository } from './../repository';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  user: User;

  repos;

  constructor(private githubService: GithubServiceService, private http: HttpClient) {  }

  ngOnInit() {
    this.githubService.personalDetailsRequest();


    this.user = this.githubService.user;



    // HAD TO PLACE REPOS REQUEST INSIDE INIT BECAUSE IT WASN'T BINDING WITH REQUEST(Github service)
    const apiUrl = `${environment.apiUrl}sokkyyy/repos${environment.apiKey}`;
    this.http.get(apiUrl).subscribe(response => {
      this.repos = response;
    });
  }

}
