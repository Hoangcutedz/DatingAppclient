import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUser() {
    // send a http get request to https://localhost:5001/api/users
    this.http.get('https://localhost:5001/api/users').subscribe({ // subscribe to listen events next, error, complete
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
