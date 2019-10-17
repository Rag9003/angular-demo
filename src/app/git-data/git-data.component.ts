import { Component, OnInit } from '@angular/core';
import { GitDataService } from './git-data.service';

@Component({
  selector: 'app-git-data',
  templateUrl: './git-data.component.html',
  styleUrls: ['./git-data.component.scss']
})
export class GitDataComponent implements OnInit {

  gitData: any[];
  organisation: string;
  repo: string;

  cols = [
    { field: 'user', header: 'User' },
    { field: 'patch_url', header: 'Patch URL' },
    { field: 'number', header: 'PR Number' }
  ];

  constructor(private gitDataService: GitDataService) { }

  ngOnInit() {

  }
  submit() {
    this.gitDataService.getPullRequests(this.organisation,this.repo).subscribe((response: any[]) => {
      console.log(response);
      response.map( (pr) =>{
        pr.user = pr.head.user.login;
      });
      this.gitData = response;
    });    
  }

}
