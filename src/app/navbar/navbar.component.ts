import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from './../github-request/github-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchItem: string;

  findProfile() {
    this.searchRequest.getUsersProfiles(this.searchItem);
    console.log(this.searchRequest.user);
  }

  constructor(private searchRequest: GithubServiceService) { }

  ngOnInit() {
  }

}
