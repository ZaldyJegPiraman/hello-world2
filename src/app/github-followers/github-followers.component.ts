import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from './../services/github-followers.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) {}

  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(
      (combined) => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        console.log('ID: ' + id);
        console.log('PAGE: ' + page);

        this.service
          .getAll()
          .subscribe((followers) => (this.followers = followers));
      }
    );
  }
}
