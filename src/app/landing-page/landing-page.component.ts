import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from './../github-request/github-service.service';
import { User } from './../user';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  user: User;

  constructor( private githubService: GithubServiceService) { }

  ngOnInit() {
    this.githubService.personalDetailsRequest();
    this.user = this.githubService.user;
  }

}
