import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
const USER_KEY = 'User';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser! : User;
  
  constructor() { }

  ngOnInit(): void {
    this.loggedUser=JSON.parse(localStorage.getItem(USER_KEY)|| '{}')
  }

}
