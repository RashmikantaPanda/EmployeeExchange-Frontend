import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private authService: AuthService) {}

  get isAuthenticated(): boolean {
    return this.authService.getIsAuthenticated();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
