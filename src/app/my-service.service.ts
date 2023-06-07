import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  postData() {
    //const url = 'https://jsonplaceholder.typicode.com/posts';
    const url = 'https://my-json-server.typicode.com/NirmalGit/demo-1/posts';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const body = {
      title: 'Sample Title',
      body: 'Sample Body1',
      userId: 1,
    };

    this.http.post(url, body, { headers }).subscribe(
      (response) => {
        console.log('POST Request Successful:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
