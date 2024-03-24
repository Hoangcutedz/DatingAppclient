import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Dating app';
  users: any;

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    // send a http get request to https://localhost:5001/api/users
    this.http.get('https://localhost:5001/api/users').subscribe({ // subscribe to listen events next, error, complete
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }
}
