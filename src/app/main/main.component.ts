import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  username: string;

  constructor(
    private authService: AuthService
    ) {
      this.username = this.authService.username;
     }

  ngOnInit() {
    this.username = this.authService.username;
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

}
