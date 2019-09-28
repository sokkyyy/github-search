import { Component, OnInit } from '@angular/core';
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

  oneRepo: Repository;

  constructor(private githubService: GithubServiceService) { }

  ngOnInit() {
    this.githubService.personalDetailsRequest();
    this.githubService.requestOneRepo();


    this.user = this.githubService.user;
    this.oneRepo = this.githubService.oneRepo;

  }

}
