import { Component, OnInit } from '@angular/core';
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


  findProfile() {
    this.searchRequest.getUsersProfiles(this.searchItem);

    this.user = this.searchRequest.user;
    console.log(this.user);
  }


  constructor(private searchRequest: GithubServiceService) {
  }

  ngOnInit() {
  }

  

}
