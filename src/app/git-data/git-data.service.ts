import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitDataService {

  constructor(private http: HttpClient) { }

  getPullRequests(org: string, repo: string) {
    return this.http.get(`https://api.github.com/repos/${org}/${repo}/pulls?status=open`);
  }
}
